import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Zap, Shield, Users, Target, Building2, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import BridgeDraftDemo from "../components/BridgeDraftDemo";

export default function Home() {
  return (
    <div className="pt-20">
      <SEO 
        title="Stop Losing Deals in the SDR-to-AE Handoff | Cognenta" 
        description="Cognenta stages a technically grounded bridge email for your AE — with a 15-minute target SLA from the moment your SDR submits the handoff form. Pay only when the meeting shows. $200/meeting."
      />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none" aria-hidden="true">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sapphire/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyber-mint/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
                Your SDR Books the Meeting. <br />
                <span className="text-cyber-mint">Your AE Sends a Generic Follow-Up.</span> <br />
                The Prospect Ghosts.
              </h1>
              <p className="text-lg sm:text-xl text-medium-grey mb-10 max-w-2xl mx-auto leading-relaxed">
                You already know the 24-hour window after the qualification call is where your pipeline dies. 
                Cognenta closes it — staging a technically grounded bridge email — built from the prospect's actual call context — for your AE to review, with a 15-minute target SLA from the moment your SDR submits the handoff form.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/revenue-audit"
                  className="bg-cyber-mint text-obsidian px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 mint-glow-hover transition-all duration-200 cursor-pointer"
                >
                  Calculate My Pipeline Leak — 15 Minutes
                  <ArrowRight size={20} />
                </Link>
                <button
                  type="button"
                  className="border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 cursor-pointer text-center"
                  onClick={() => {
                    document.getElementById('bridge-demo')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  See the Drafts We Build
                </button>
              </div>
              <p className="mt-6 text-sm text-medium-grey/60 italic">
                No new software. No CRM double-entry. You only pay when the meeting shows.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dead Zone Visual Section */}
      <section className="py-16 bg-obsidian relative overflow-hidden" aria-label="The Dead Zone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 uppercase tracking-widest text-cyber-mint">The Dead Zone</h2>
            <p className="text-medium-grey">Where your pipeline disappears.</p>
          </div>
          
          <div className="relative h-2 bg-white/5 rounded-full mb-8 overflow-hidden" role="img" aria-label="Timeline showing pipeline decay from SDR call to generic invite">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2, ease: "linear" }}
              className="absolute h-full bg-gradient-to-r from-cyber-mint to-sapphire"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <p className="text-xs font-bold text-medium-grey mb-2">MINUTE 0</p>
              <p className="font-bold">SDR Submits Handoff Form</p>
              <p className="text-xs text-medium-grey mt-1">High Intent Peak</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1 }}>
              <div className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold rounded mb-2">THE DEAD ZONE</div>
              <p className="font-bold">Silence</p>
              <p className="text-xs text-medium-grey mt-1">Context Fades</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.8 }}>
              <p className="text-xs font-bold text-medium-grey mb-2">HOUR 24</p>
              <p className="font-bold">Generic Invite Sent</p>
              <p className="text-xs text-medium-grey mt-1">Prospect Ghosts</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bridge Draft Demo */}
      <div id="bridge-demo">
        <BridgeDraftDemo />
      </div>

      {/* Comparison Section — Responsive Cards (no scroll) */}
      <section className="py-24 bg-white/5 border-y border-white/5" aria-label="Before and after comparison">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">See the Difference — Real Examples</h2>
            <p className="text-medium-grey">This is what your AE finds waiting for them:</p>
          </div>

          {/* Responsive comparison cards instead of scrollable table */}
          <div className="space-y-8">
            {/* Example 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-xs font-bold uppercase tracking-wider text-medium-grey mb-4">SDR Call Notes</h3>
                <div className="font-mono text-xs text-medium-grey bg-obsidian p-4 rounded border border-white/5">
                  Stack: Auth0<br />
                  Bottleneck: Manual KYC too slow<br />
                  Timeline: Q3
                </div>
              </div>
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-xs font-bold uppercase tracking-wider text-medium-grey mb-4">Standard AE Follow-Up</h3>
                <div className="bg-obsidian p-4 rounded-lg border border-white/5">
                  <p className="text-sm text-medium-grey italic">
                    "Great chatting! Looking forward to showing you our tool on Thursday."
                  </p>
                </div>
              </div>
              <div className="glass p-6 rounded-2xl border-cyber-mint/20">
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyber-mint mb-4">The Cognenta Bridge Draft</h3>
                <div className="bg-sapphire/10 border border-sapphire/20 p-4 rounded-lg text-sm">
                  "Since [SDR] mentioned your manual KYC process is bottlenecking your Q3 goals, 
                  I pulled your Auth0 setup. Here's how teams at your stage have reduced onboarding latency — 
                  we'll cover exactly how this maps to your stack on Thursday."
                </div>
              </div>
            </div>

            {/* Example 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-xs font-bold uppercase tracking-wider text-medium-grey mb-4">SDR Call Notes</h3>
                <div className="font-mono text-xs text-medium-grey bg-obsidian p-4 rounded border border-white/5">
                  Stack: Snowflake<br />
                  Bottleneck: API lag at scale<br />
                  Timeline: ASAP
                </div>
              </div>
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-xs font-bold uppercase tracking-wider text-medium-grey mb-4">Standard AE Follow-Up</h3>
                <div className="bg-obsidian p-4 rounded-lg border border-white/5">
                  <p className="text-sm text-medium-grey italic">
                    "Here's a link to our API docs before our call."
                  </p>
                </div>
              </div>
              <div className="glass p-6 rounded-2xl border-cyber-mint/20">
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyber-mint mb-4">The Cognenta Bridge Draft</h3>
                <div className="bg-sapphire/10 border border-sapphire/20 p-4 rounded-lg text-sm">
                  "Your data infrastructure runs on Snowflake. Our architecture addresses the API lag that emerges at your scale — 
                  I've put together a quick technical overview of how our architecture maps to your Snowflake setup 
                  so we can go straight to the details on our call."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thick Data Section */}
      <section className="py-24" aria-label="What is Thick Data">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">What Is Thick Data?</h2>
              <p className="text-lg text-medium-grey mb-6 leading-relaxed">
                When a prospect spends 15 minutes on the phone with your SDR, they hand you exactly what's hurting:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "We're scaling on AWS, but API latency is killing us.",
                  "We need to clear SOC2 by Q3.",
                  "If we don't fix manual KYC onboarding, we lose our enterprise deals."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-cyber-mint mt-1 shrink-0" size={20} aria-hidden="true" />
                    <span className="text-white italic">"{item}"</span>
                  </li>
                ))}
              </ul>
              <p className="text-medium-grey leading-relaxed">
                That is Thick Data — high-density, technical context your prospect volunteered because they are in pain. 
                Most sales teams acknowledge it by burying it in a messy CRM note, then sending a generic calendar invite.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-4 right-4 overflow-hidden" aria-hidden="true">
                <Zap className="text-cyber-mint opacity-20" size={80} />
              </div>
              <h3 className="text-2xl font-bold mb-6">The Cognenta Engine</h3>
              <p className="text-medium-grey mb-8">
                Cognenta extracts it, enriches it, and turns it into a follow-up that proves your AE was actually in the room.
              </p>
              <Link
                to="/revenue-audit"
                className="inline-flex items-center gap-2 text-cyber-mint font-bold hover:underline cursor-pointer transition-colors duration-200"
              >
                See If We're a Fit — Book a Free Revenue Audit <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Protocol Section */}
      <section className="py-24 bg-white/5" aria-label="How it works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Our Managed Protocol Works</h2>
            <p className="text-medium-grey max-w-2xl mx-auto">
              We sit directly in the Dead Zone — handling the research, CRM hygiene, and drafting so your Founders and AEs can focus on closing deals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "1. The Single Source of Truth",
                desc: "Your SDR finishes the call and submits a 3-bullet intake form. We instantly push this to HubSpot or Salesforce. Zero double-data entry.",
                icon: <Zap className="text-cyber-mint" aria-hidden="true" />
              },
              {
                title: "2. Deep Account Enrichment",
                desc: "If the SDR's notes are thin, our internal ops stack fills the gaps — recent funding, verified tech stack data, and industry news via Clay.com.",
                icon: <Users className="text-cyber-mint" aria-hidden="true" />
              },
              {
                title: "3. The 15-Minute Bridge Draft",
                desc: "We transform the raw data into a technical bridge email grounded in exactly two sources: your verified product documentation and the prospect's actual context.",
                icon: <Zap className="text-cyber-mint" aria-hidden="true" />
              },
              {
                title: "4. Human Control, Always",
                desc: "The draft lands in your AE's Slack or Drafts folder, marked Pending Review. One click to review. One click to send. You control 100% of what goes out.",
                icon: <Shield className="text-cyber-mint" aria-hidden="true" />
              }
            ].map((step, i) => (
              <div key={i} className="glass p-8 rounded-2xl hover:border-cyber-mint/30 transition-colors duration-200 cursor-default">
                <div className="mb-4">{step.icon}</div>
                <h4 className="text-lg font-bold mb-3">{step.title}</h4>
                <p className="text-sm text-medium-grey leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* Who This Is For Section */}
      <section className="py-24" aria-label="Who this is built for">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built for Teams Who Close High-Value Deals</h2>
            <p className="text-medium-grey max-w-2xl mx-auto">
              If your average deal size is above $5K and your SDRs book meetings your AEs close, Cognenta was built for your motion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="text-cyber-mint" size={28} aria-hidden="true" />,
                title: "B2B SaaS Founders",
                desc: "Running a setter-to-AE motion with $10K–$100K deals. You need every booked meeting to convert. Generic follow-ups are costing you pipeline."
              },
              {
                icon: <Rocket className="text-cyber-mint" size={28} aria-hidden="true" />,
                title: "High-Ticket Agencies",
                desc: "Selling $5K–$50K/month retainers. Your prospects expect a partner who understands their business from the first touchpoint — not a template."
              },
              {
                icon: <Target className="text-cyber-mint" size={28} aria-hidden="true" />,
                title: "Revenue Teams Scaling Fast",
                desc: "Adding SDRs faster than you can train AEs to handle the handoff volume. Cognenta ensures quality stays high as your pipeline grows."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-2xl hover:border-cyber-mint/30 transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-cyber-mint/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-medium-grey leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white/5 border-y border-white/5" aria-label="Pricing">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Pricing: You Only Pay When the Meeting Shows</h2>
          <p className="text-medium-grey mb-2">No monthly retainer. No flat subscription. Pure performance.</p>
          <p className="text-xl text-medium-grey mb-12">
            Cognenta is not a SaaS subscription. There is no monthly retainer to justify.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass p-8 rounded-2xl text-left">
              <h4 className="text-cyber-mint font-bold text-2xl mb-2">Setup: $350</h4>
              <p className="text-sm text-medium-grey">
                We build your custom Handoff Workflow, Intake Form, and CRM sync. Done in 48 hours for standard CRM instances.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl text-left border-cyber-mint/30">
              <h4 className="text-cyber-mint font-bold text-2xl mb-2">Performance: $200</h4>
              <p className="text-sm text-medium-grey">
                Per meeting that shows. That's it. We only win when your pipeline converts.
              </p>
            </div>
          </div>

          <Link
            to="/revenue-audit"
            className="bg-cyber-mint text-obsidian px-10 py-5 rounded-full font-bold text-xl inline-flex items-center gap-2 mint-glow-hover transition-all duration-200 cursor-pointer"
          >
            Book My Free Revenue Audit
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}
