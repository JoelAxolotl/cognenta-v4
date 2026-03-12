import { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Send, Loader2, Copy, Check, ShieldCheck } from "lucide-react";

export default function BridgeDraftDemo() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `You are Cognenta's AI Bridge Draft Engine. 
        Your task is to take messy SDR call notes and transform them into a "Technically Grounded Bridge Draft" for an Account Executive (AE) to send.
        
        Rules:
        1. Use "Thick Data" (specific technical context, bottlenecks, timelines).
        2. No generic templates.
        3. Professional, peer-to-peer tone.
        4. Reference the SDR by name [SDR] if appropriate.
        5. Focus on the prospect's pain.
        
        SDR NOTES:
        ${input}
        
        GENERATE BRIDGE DRAFT:`,
      });
      setOutput(response.text || "Failed to generate draft.");
    } catch (error) {
      console.error(error);
      setOutput("We need a little more context to build a grounded draft. Try adding the prospect's stack, main bottleneck, and timeline.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
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
              className="grow bg-obsidian/50 border border-white/10 rounded-2xl p-6 text-white placeholder:text-medium-grey/30 focus:outline-none focus:border-cyber-mint/50 transition-colors duration-200 resize-none min-h-[200px]"
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
              {output && (
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
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-12 h-12 border-4 border-cyber-mint/20 border-t-cyber-mint rounded-full animate-spin" aria-hidden="true" />
                      <p className="text-sm text-cyber-mint animate-pulse font-mono" role="status">Extracting situational context...</p>
                    </div>
                  </motion.div>
                ) : output ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-white leading-relaxed whitespace-pre-wrap"
                  >
                    {output}
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
