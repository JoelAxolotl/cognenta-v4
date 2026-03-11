import { motion } from "motion/react";
import { Target, ShieldAlert, Zap } from "lucide-react";
import SEO from "../components/SEO";

export default function Philosophy() {
  return (
    <div className="pt-32 pb-24">
      <SEO 
        title="Thick Data vs. Thin Data: Why Most B2B Follow-Ups Fail | Cognenta" 
        description="Generic personalization loses deals. Cognenta builds follow-ups from the specific technical context your prospects volunteer on qualification calls — not scraped demographics."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl font-bold mb-6 italic tracking-tighter uppercase">Thick Data vs. Thin Data</h1>
            <p className="text-xl text-medium-grey leading-relaxed">
              The B2B industry talks about personalization constantly. What actually ships is thin: a first name, a company name, a LinkedIn headline scraped from the web. That's not personalization. It's a template wearing a disguise.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="glass p-10 rounded-3xl border-white/5">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <ShieldAlert className="text-red-400" />
              Thin Data
            </h3>
            <p className="text-medium-grey leading-relaxed mb-6">
              Thin Data is demographic — who someone is. Useful for cold outreach. Tells you almost nothing about what a specific person needs right now.
            </p>
            <div className="bg-obsidian p-4 rounded border border-white/5 font-mono text-xs text-medium-grey/50">
              [Template] Hi {"{first_name}"}, I saw you work at {"{company_name}"}...
            </div>
          </div>

          <div className="glass p-10 rounded-3xl border-cyber-mint/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Target className="text-cyber-mint" />
              Thick Data
            </h3>
            <p className="text-medium-grey leading-relaxed mb-6">
              Thick Data is situational — the specific bottleneck they admitted to your SDR, their actual tech stack, the deadline they volunteered. Cognenta is built to work exclusively with Thick Data.
            </p>
            <div className="bg-obsidian p-4 rounded border border-cyber-mint/20 font-mono text-xs text-cyber-mint/80">
              "Since you mentioned your manual KYC process is bottlenecking your Q3 goals..."
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">The Accuracy Constraint</h2>
            <p className="text-xl text-medium-grey leading-relaxed">
              In high-ticket SaaS and agency sales, a follow-up that is confidently wrong isn't just unhelpful — it's a brand liability. Sending a technically inaccurate claim to a CISO or a senior dev loses the deal instantly.
            </p>
          </div>

          <div className="relative p-12 glass rounded-3xl overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-cyber-mint" />
            <p className="text-lg leading-relaxed italic text-white/90">
              "Accuracy isn't a feature we've added. It's a constraint our entire internal ops stack is built around. Nothing gets staged for your AEs that isn't grounded in your product docs and the prospect's verified reality."
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-cyber-mint/20 flex items-center justify-center">
                <Zap className="text-cyber-mint" />
              </div>
              <div>
                <p className="font-bold">The Cognenta Promise</p>
                <p className="text-sm text-medium-grey">Zero-Template Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
