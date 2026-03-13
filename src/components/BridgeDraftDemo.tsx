import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Loader2, Copy, Check, ShieldCheck, Mail } from "lucide-react";

const DEMO_API_URL = process.env.DEMO_API_URL || "http://localhost:3001";
const DEMO_API_KEY = process.env.DEMO_API_KEY || "";

const LOADING_STEPS = [
  "Analyzing SDR notes...",
  "Extracting prospect intelligence...",
  "Identifying pain points & intent...",
  "Building personalized bridge draft...",
  "Polishing final output...",
];

interface DemoResult {
  subject: string;
  content: string;
  enrichment: {
    recipientName: string;
    recipientCompany: string;
    buyingStage: string;
    intent: string;
    persona: string;
    keyPainPoints: string[];
  };
}

export default function BridgeDraftDemo() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<DemoResult | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const stepInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  // Cycle through loading steps while generating
  useEffect(() => {
    if (isLoading) {
      setLoadingStep(0);
      stepInterval.current = setInterval(() => {
        setLoadingStep((prev) => Math.min(prev + 1, LOADING_STEPS.length - 1));
      }, 3000);
    } else {
      if (stepInterval.current) clearInterval(stepInterval.current);
      setLoadingStep(0);
    }
    return () => {
      if (stepInterval.current) clearInterval(stepInterval.current);
    };
  }, [isLoading]);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch(`${DEMO_API_URL}/demo/generate-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-demo-key": DEMO_API_KEY,
        },
        body: JSON.stringify({ notes: input }),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        if (response.status === 429) {
          throw new Error("Rate limit reached. Please try again in a few minutes.");
        }
        throw new Error(err.message || `Request failed (${response.status})`);
      }

      const data: DemoResult = await response.json();
      setResult(data);
    } catch (err: any) {
      console.error("[Demo] Generation failed:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!result) return;
    const fullText = `Subject: ${result.subject}\n\n${result.content}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 relative overflow-hidden" aria-label="Bridge Draft Demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience the Bridge Draft Engine</h2>
          <p className="text-medium-grey max-w-2xl mx-auto">
            Paste your messiest SDR notes below and watch Cognenta build a technically grounded follow-up in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Area */}
          <div className="glass p-6 sm:p-8 rounded-3xl border-white/5 flex flex-col">
            <label htmlFor="sdr-notes-input" className="text-xs font-bold uppercase tracking-widest text-medium-grey mb-4">SDR Call Notes (The "Thick Data")</label>
            <textarea
              id="sdr-notes-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g. Stack: AWS, Kubernetes. Pain: Manual deployments taking 4 hours. Goal: Automate by end of month."
              className="grow bg-obsidian/50 border border-white/10 rounded-2xl p-6 text-white placeholder:text-medium-grey/30 focus:outline-none focus:border-cyber-mint/50 transition-colors duration-200 resize-none min-h-[140px]"
              maxLength={2000}
              aria-label="Enter your SDR call notes"
            />
            <button
              onClick={handleGenerate}
              disabled={isLoading || !input.trim()}
              className="mt-6 bg-cyber-mint text-obsidian font-bold py-4 rounded-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mint-glow-hover transition-all duration-200 cursor-pointer"
              aria-busy={isLoading}
            >
              {isLoading ? <Loader2 className="animate-spin" aria-hidden="true" /> : <Sparkles size={20} aria-hidden="true" />}
              {isLoading ? "Enriching Data..." : "Generate Bridge Draft"}
            </button>
          </div>

          {/* Output Area */}
          <div className="glass p-6 sm:p-8 rounded-3xl border-cyber-mint/20 relative flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <label className="text-xs font-bold uppercase tracking-widest text-cyber-mint">Cognenta Output (AE Draft)</label>
              {result && (
                <button
                  onClick={copyToClipboard}
                  className="text-medium-grey hover:text-white transition-colors duration-200 cursor-pointer p-2 rounded-lg"
                  aria-label={copied ? "Copied to clipboard" : "Copy draft to clipboard"}
                >
                  {copied ? <Check size={18} className="text-cyber-mint" aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
                </button>
              )}
            </div>
            
            <div className="grow bg-sapphire/5 border border-sapphire/20 rounded-2xl p-6 min-h-[200px] relative overflow-hidden" aria-live="polite">
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="flex flex-col items-center gap-5 w-full max-w-xs">
                      <div className="w-12 h-12 border-4 border-cyber-mint/20 border-t-cyber-mint rounded-full animate-spin" aria-hidden="true" />
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={loadingStep}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm text-cyber-mint font-mono text-center"
                          role="status"
                        >
                          {LOADING_STEPS[loadingStep]}
                        </motion.p>
                      </AnimatePresence>
                      {/* Progress dots */}
                      <div className="flex gap-2">
                        {LOADING_STEPS.map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-500 ${
                              i <= loadingStep ? "bg-cyber-mint scale-100" : "bg-white/10 scale-75"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : error ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 leading-relaxed"
                  >
                    {error}
                  </motion.div>
                ) : result ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-white leading-relaxed"
                  >
                    {/* Subject Line */}
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                      <Mail size={14} className="text-cyber-mint shrink-0" aria-hidden="true" />
                      <span className="text-xs uppercase tracking-widest text-medium-grey">Subject:</span>
                      <span className="text-cyber-mint font-semibold">{result.subject}</span>
                    </div>

                    {/* Email Body */}
                    <div className="whitespace-pre-wrap">{result.content}</div>
                  </motion.div>
                ) : (
                  <div className="h-full flex items-center justify-center text-medium-grey/20 italic">
                    Draft will appear here...
                  </div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="mt-6 flex items-center gap-3 text-xs text-medium-grey/50">
              <ShieldCheck size={14} className="text-cyber-mint" aria-hidden="true" />
              <span>Grounded in prospect context. Zero templates used.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
