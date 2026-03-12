import { motion } from "motion/react";
import { Database, Slack, Mail, Code, ShieldCheck } from "lucide-react";
import SEO from "../components/SEO";

export default function Integrations() {
  return (
    <div className="pt-32 pb-24">
      <SEO 
        title="HubSpot & Salesforce Sales Handoff Integration | Cognenta" 
        description="Cognenta syncs directly with HubSpot and Salesforce. No new dashboards. No double data entry. Technically grounded AE drafts staged in Slack or email."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Your Team Doesn't Change How They Work. We Just Make the Output Better.</h1>
            <p className="text-lg sm:text-xl text-medium-grey leading-relaxed">
              Cognenta is built to be invisible to your front-line team. Your SDRs get a cleaner workflow. Your AEs find better drafts waiting for them. Everything else happens behind the scenes.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "HubSpot & Salesforce — Bi-Directional Sync",
              desc: "The moment your SDR submits the 3-bullet intake form, we push the data to the lead record, update the deal stage, and stage a technically grounded draft in the AE's queue. No manual CRM entry. No dropped context.",
              icon: <Database className="text-cyber-mint" size={32} aria-hidden="true" />
            },
            {
              title: "Staged in Slack or Email — Where Your AEs Already Live",
              desc: "High-context drafts appear exactly where your AEs already work. One click to review. One click to send. No new dashboards, no new logins, no change management.",
              icon: <Slack className="text-cyber-mint" size={32} aria-hidden="true" />
            },
            {
              title: "The Zero-Template Policy",
              desc: "Every draft is grounded in exactly two sources: your verified product documentation and the prospect's actual call context. If a technical claim can't be verified, it doesn't make it into the draft.",
              icon: <Code className="text-cyber-mint" size={32} aria-hidden="true" />
            },
            {
              title: "API-First — You Control the Access",
              desc: "We connect via specific API connections, not broad integrations. You see exactly what Cognenta can access. You can revoke it instantly without involving IT. We apply a zero-retention policy to all prospect call notes.",
              icon: <ShieldCheck className="text-cyber-mint" size={32} aria-hidden="true" />
            }
          ].map((item, i) => (
            <div key={i} className="glass p-10 rounded-3xl hover:border-cyber-mint/30 transition-all duration-200 group cursor-default">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-medium-grey leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 mb-24">
          <h2 className="text-3xl font-bold text-center mb-16">The Cognenta Data Flow</h2>
          <div className="relative glass p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 relative z-10">
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <span className="text-cyber-mint font-mono font-bold">01</span>
                </div>
                <h4 className="font-bold mb-2">SDR Intake</h4>
                <p className="text-xs text-medium-grey">3-bullet form submitted in CRM</p>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-20 h-20 rounded-2xl bg-cyber-mint/10 border border-cyber-mint/30 flex items-center justify-center mb-6 mint-glow">
                  <Database className="text-cyber-mint" size={32} aria-hidden="true" />
                </div>
                <h4 className="font-bold mb-2">Cognenta Engine</h4>
                <p className="text-xs text-medium-grey">Enrichment & Technical Drafting</p>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <span className="text-cyber-mint font-mono font-bold">03</span>
                </div>
                <h4 className="font-bold mb-2">AE Delivery</h4>
                <p className="text-xs text-medium-grey">Draft staged in Slack/Email</p>
              </motion.div>
            </div>
            
            {/* Animated background pulse */}
            <motion.div 
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyber-mint/20 blur-[100px] rounded-full z-0"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="mt-24 glass p-8 sm:p-12 rounded-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Security & Privacy First</h2>
          <p className="text-medium-grey max-w-2xl mx-auto mb-8">
            We apply a zero-retention policy to all prospect call notes and PII once the draft is staged. We retain only the anonymized CRM Deal ID for billing reconciliation — nothing else.
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale" aria-label="Integration partners">
            <div className="flex items-center gap-2 font-bold text-lg sm:text-xl"><Database size={24} aria-hidden="true" /> HubSpot</div>
            <div className="flex items-center gap-2 font-bold text-lg sm:text-xl"><Database size={24} aria-hidden="true" /> Salesforce</div>
            <div className="flex items-center gap-2 font-bold text-lg sm:text-xl"><Database size={24} aria-hidden="true" /> GoHighLevel</div>
            <div className="flex items-center gap-2 font-bold text-lg sm:text-xl"><Slack size={24} aria-hidden="true" /> Slack</div>
          </div>
        </div>
      </div>
    </div>
  );
}
