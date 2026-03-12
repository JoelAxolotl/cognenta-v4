import { motion } from "motion/react";
import { Target, ShieldAlert, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 italic tracking-tighter uppercase">Thick Data vs. Thin Data</h1>
            <p className="text-lg sm:text-xl text-medium-grey leading-relaxed">
              The B2B industry talks about personalization constantly. What actually ships is thin: a first name, a company name, a LinkedIn headline scraped from the web. That's not personalization. It's a template wearing a disguise.
            </p>
          </motion.div>
        </div>

        {/* Side-by-side Thick vs. Thin Data Examples */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {/* Thin Data Card */}
          <div className="glass p-8 sm:p-10 rounded-3xl border-white/5">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <ShieldAlert className="text-red-400" aria-hidden="true" />
              Thin Data
            </h3>
            <p className="text-medium-grey leading-relaxed mb-6">
              Thin Data is demographic — who someone is. Useful for cold outreach. Tells you almost nothing about what a specific person needs right now.
            </p>
            <div className="bg-obsidian p-5 rounded-xl border border-white/5 font-mono text-xs text-medium-grey/50 mb-4">
              <p className="mb-1 text-medium-grey/30 text-[10px] uppercase tracking-wider font-sans font-bold">Template Follow-Up</p>
              [Template] Hi {"{first_name}"}, I saw you work at {"{company_name}"}. We help companies like yours streamline their operations. Would love to set up 15 minutes to show you how.
            </div>
            <p className="text-xs text-medium-grey/40 italic">
              Scraped from LinkedIn. No context from the actual conversation. Zero signal that your team was listening.
            </p>
          </div>

          {/* Thick Data Card */}
          <div className="glass p-8 sm:p-10 rounded-3xl border-cyber-mint/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Target className="text-cyber-mint" aria-hidden="true" />
              Thick Data
            </h3>
            <p className="text-medium-grey leading-relaxed mb-6">
              Thick Data is situational — the specific bottleneck they admitted to your SDR, their actual tech stack, the deadline they volunteered. Cognenta is built to work exclusively with Thick Data. The context your prospects hand you voluntarily, which most sales teams quietly ignore until the demo.
            </p>
            <div className="bg-obsidian p-5 rounded-xl border border-cyber-mint/20 font-mono text-xs text-cyber-mint/80 mb-4">
              <p className="mb-1 text-cyber-mint/40 text-[10px] uppercase tracking-wider font-sans font-bold">Cognenta Bridge Draft</p>
              "Since you mentioned your manual KYC process is bottlenecking your Q3 goals, I pulled your Auth0 setup and mapped how teams at your stage have reduced onboarding latency by 60%. I've outlined two approaches we can walk through on Thursday — both built around your current identity stack so there's no rip-and-replace."
            </div>
            <p className="text-xs text-cyber-mint/40 italic">
              Grounded in the prospect's actual call context. Two-sentence opening that proves the AE understood the pain.
            </p>
          </div>
        </div>

        {/* The Accuracy Constraint */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">The Accuracy Constraint</h2>
            <p className="text-lg sm:text-xl text-medium-grey leading-relaxed">
              In high-ticket SaaS and agency sales, a follow-up that is confidently wrong isn't just unhelpful — it's a brand liability. Sending a technically inaccurate claim to a CISO or a senior dev loses the deal instantly.
            </p>
          </div>

          <div className="relative p-8 sm:p-12 glass rounded-3xl overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-cyber-mint" aria-hidden="true" />
            <blockquote>
              <p className="text-lg leading-relaxed italic text-white/90">
                "Accuracy isn't a feature we've added. It's a constraint our entire internal ops stack is built around. Nothing gets staged for your AEs that isn't grounded in your product docs and the prospect's verified reality."
              </p>
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-cyber-mint/20 flex items-center justify-center" aria-hidden="true">
                <Zap className="text-cyber-mint" />
              </div>
              <div>
                <p className="font-bold">The Cognenta Promise</p>
                <p className="text-sm text-medium-grey">Zero-Template Policy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking CTA */}
        <div className="mt-24 text-center">
          <Link
            to="/revenue-audit"
            className="bg-cyber-mint text-obsidian px-10 py-5 rounded-full font-bold text-xl inline-flex items-center gap-2 mint-glow-hover transition-all duration-200 cursor-pointer"
          >
            Book Your Free Revenue Audit
            <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}
