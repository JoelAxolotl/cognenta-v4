import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Zap, Shield, Users, Target, Building2, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SEO from "../components/SEO";

export default function Home() {
  const [meetings, setMeetings] = useState(50);
  const [dealSize, setDealSize] = useState(25000);
  const [ghostRate, setGhostRate] = useState(20);

  const monthlyLeak = meetings * dealSize * (ghostRate / 100);

  return (
    <div className="pt-20">
      <SEO
        title="Post-Call Revenue Recovery | Cognenta"
        description="Cognenta recovers revenue from deals that should have closed — creating context-driven follow-up assets your AE didn't have time to send, ready in their drafts within minutes."
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
                The deal didn't stall. <br />
                <span className="text-cyber-mint">The follow-up broke at scale.</span>
              </h1>
              <p className="text-lg sm:text-xl text-medium-grey mb-6 max-w-3xl mx-auto leading-relaxed">
                You're not losing deals on your funnel or call. You're losing them to the follow-up bottleneck.
              </p>
              <p className="text-base sm:text-lg text-medium-grey mb-4 max-w-3xl mx-auto leading-relaxed">
                Cognenta recovers revenue from deals that should have closed by creating the exact, context-driven follow-up assets your AE didn't have time to send. Ready in their drafts within minutes.
              </p>
              <p className="text-sm text-medium-grey/70 mb-10 max-w-2xl mx-auto leading-relaxed italic">
                Safe for high-ticket pipeline: Nothing is auto-sent. Your AE approves every follow-up asset. Grounded 100% in your verified product docs — zero hallucinations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/revenue-audit"
                  className="bg-cyber-mint text-obsidian px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 mint-glow-hover transition-all duration-200 cursor-pointer"
                >
                  Book a Call + Recover 3 Dead Leads Live
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Dead Zone Section */}
      <section className="py-20 bg-obsidian relative overflow-hidden" aria-label="The Dead Zone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl font-bold mb-4 uppercase tracking-widest text-cyber-mint">The Dead Zone</h2>
            <p className="text-medium-grey text-lg mb-6">This is where pipeline quietly dies.</p>
            <p className="text-medium-grey leading-relaxed">
              Right after the form submission or discovery call, your prospect is clear on the problem, motivated to fix it, and emotionally bought in. You think: <em>"This one is hot."</em>
            </p>
            <p className="text-medium-grey leading-relaxed mt-4">
              A few hours later, they're back in their inbox, context is gone, and your deal is just another thread. If your AE waits a couple of hours to send a generic recap, the deal is already colder.
            </p>
          </div>

          {/* Pipeline Leak Calculator */}
          <div className="glass p-8 md:p-12 rounded-3xl max-w-3xl mx-auto" aria-label="Pipeline Leak Calculator">
            <h3 className="text-xl font-bold mb-8 text-center">Pipeline Leak Calculator</h3>
            <div className="space-y-10">
              <div>
                <div className="flex justify-between mb-4">
                  <label htmlFor="home-meetings-slider" className="text-sm font-bold uppercase tracking-wider text-medium-grey">Monthly Setter Meetings</label>
                  <span className="text-cyber-mint font-mono font-bold" aria-live="polite">{meetings}</span>
                </div>
                <input
                  id="home-meetings-slider"
                  type="range" min="1" max="200" value={meetings}
                  onChange={(e) => setMeetings(parseInt(e.target.value))}
                  className="w-full"
                  aria-label="Monthly Setter Meetings"
                />
              </div>
              <div>
                <div className="flex justify-between mb-4">
                  <label htmlFor="home-dealsize-slider" className="text-sm font-bold uppercase tracking-wider text-medium-grey">Average Deal Size ($)</label>
                  <span className="text-cyber-mint font-mono font-bold" aria-live="polite">${dealSize.toLocaleString()}</span>
                </div>
                <input
                  id="home-dealsize-slider"
                  type="range" min="1000" max="200000" step="1000" value={dealSize}
                  onChange={(e) => setDealSize(parseInt(e.target.value))}
                  className="w-full"
                  aria-label="Average Deal Size in dollars"
                />
              </div>
              <div>
                <div className="flex justify-between mb-4">
                  <label htmlFor="home-ghost-slider" className="text-sm font-bold uppercase tracking-wider text-medium-grey">Actual Ghost Rate (%)</label>
                  <span className="text-cyber-mint font-mono font-bold" aria-live="polite">{ghostRate}%</span>
                </div>
                <input
                  id="home-ghost-slider"
                  type="range" min="1" max="100" value={ghostRate}
                  onChange={(e) => setGhostRate(parseInt(e.target.value))}
                  className="w-full"
                  aria-label="Ghost Rate percentage"
                />
              </div>
            </div>
            <div className="mt-10 p-8 bg-cyber-mint/5 border border-cyber-mint/20 rounded-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-medium-grey mb-2">You are bleeding roughly</p>
              <p className="text-4xl sm:text-5xl font-bold text-cyber-mint font-mono tracking-tighter" aria-live="polite">
                ${monthlyLeak.toLocaleString()}
              </p>
              <p className="text-medium-grey mt-2">in pipeline into the dead zone every month.</p>
            </div>
            <p className="mt-6 text-center text-sm text-medium-grey leading-relaxed">
              And none of that was a lead problem. You don't have a pipeline problem.{" "}
              <span className="text-white font-semibold">You have a post-funnel and call revenue recovery problem.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-white/5 border-y border-white/5" aria-label="Before and after comparison">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Same Funnel. Same Prospect. Different Result.</h2>
            <p className="text-medium-grey max-w-2xl mx-auto">This is the exact moment that decides if they show up. One gets ignored. The other gets a reply.</p>
          </div>

          <div className="space-y-8">
            {/* Example 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-4">Generic Follow-Up (what kills the deal)</h3>
                <div className="bg-obsidian p-5 rounded-lg border border-white/5 text-sm text-medium-grey italic">
                  "Just checking if Thursday still works?"
                </div>
              </div>
              <div className="glass p-8 rounded-2xl border-cyber-mint/20">
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyber-mint mb-4">Cognenta Follow-Up (what closes it)</h3>
                <div className="bg-sapphire/10 border border-sapphire/20 p-5 rounded-lg text-sm">
                  "Since manual KYC is bottlenecking your Q3 rollout, I pulled together exactly how we bypass that step using your existing Auth0 stack. See you on Thursday."
                </div>
              </div>
            </div>

            {/* Example 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-4">Generic Follow-Up (what kills the deal)</h3>
                <div className="bg-obsidian p-5 rounded-lg border border-white/5 text-sm text-medium-grey italic">
                  "Following up — let me know if you had any questions."
                </div>
              </div>
              <div className="glass p-8 rounded-2xl border-cyber-mint/20">
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyber-mint mb-4">Cognenta Follow-Up (what closes it)</h3>
                <div className="bg-sapphire/10 border border-sapphire/20 p-5 rounded-lg text-sm">
                  "Knowing you're running Snowflake, I grabbed the technical docs showing how our architecture eliminates the exact API lag you're seeing at scale."
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 glass p-10 rounded-3xl text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">FREE 360° Pipeline Leak Scan (15-Min)</h3>
            <ul className="text-medium-grey text-sm space-y-2 mb-8 text-left max-w-sm mx-auto">
              <li className="flex items-start gap-2"><CheckCircle2 className="text-cyber-mint mt-0.5 shrink-0" size={16} /><span>We pull live results on the call</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="text-cyber-mint mt-0.5 shrink-0" size={16} /><span>We estimate your lost revenue</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="text-cyber-mint mt-0.5 shrink-0" size={16} /><span>See how our software plugs the leaks</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="text-cyber-mint mt-0.5 shrink-0" size={16} /><span>Keep the report even if you don't hire us</span></li>
            </ul>
            <Link
              to="/revenue-audit"
              className="bg-cyber-mint text-obsidian px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2 mint-glow-hover transition-all duration-200 cursor-pointer"
            >
              FREE 360° Pipeline Leak Scan (15-Min)
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* RevOps & IT Approved */}
      <section className="py-24" aria-label="Security and compliance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">RevOps &amp; IT Approved</h2>
            <p className="text-medium-grey max-w-xl mx-auto">Enterprise-grade security and deliverability, built in by default.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-cyber-mint/10 flex items-center justify-center mb-6">
                <Shield className="text-cyber-mint" size={24} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-3">Zero Domain Risk</h3>
              <p className="text-medium-grey text-sm leading-relaxed">
                1-to-1 emails sent manually from your AE's actual outbox. No mass sending. No spam triggers.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-cyber-mint/10 flex items-center justify-center mb-6">
                <Shield className="text-cyber-mint" size={24} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-3">Strict Data Privacy</h3>
              <p className="text-medium-grey text-sm leading-relaxed">
                We do not and will never use your proprietary CRM data or prospect notes to train our AI models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* You Already Earned These Deals */}
      <section className="py-24 bg-white/5 border-y border-white/5" aria-label="Post-call revenue recovery benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">The Frustrating Part? You Already Earned These Deals.</h2>
              <p className="text-lg text-medium-grey mb-4 leading-relaxed">
                These aren't bad leads. They are missed follow-ups. This isn't potential pipeline — it's pipeline you already earned and lost in the follow-up.
              </p>
              <p className="text-medium-grey mb-8 leading-relaxed">
                Not because your AE isn't good, but because creating highly technical, context-specific follow-up assets — every single time — simply isn't realistic at scale.
              </p>
              <p className="text-medium-grey mb-8 leading-relaxed font-semibold text-white">
                Here is what happens when you deploy post-call revenue recovery:
              </p>
              <ul className="space-y-4">
                {[
                  { title: "No Robotic Tone", desc: "Follow-ups perfectly match your top AE's actual communication style, tone, length, and vocabulary." },
                  { title: "Context Over Templates", desc: "We use the specific, situational bottlenecks your prospect actually volunteered on the funnel or call." },
                  { title: "Reactivate Stale Pipeline", desc: "Point Cognenta at deals that ghosted you. We use the original call and funnel notes to create reactivation assets that actually get replies." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-cyber-mint mt-1 shrink-0" size={20} aria-hidden="true" />
                    <span><strong className="text-white">{item.title}:</strong> <span className="text-medium-grey">{item.desc}</span></span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-4 right-4 overflow-hidden" aria-hidden="true">
                <Rocket className="text-cyber-mint opacity-20" size={80} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Built for High-Ticket B2B Sales</h3>
              <ul className="space-y-3 text-medium-grey text-sm leading-relaxed mb-8">
                <li className="flex items-start gap-2"><CheckCircle2 className="text-cyber-mint mt-0.5 shrink-0" size={16} /><span>Engineered specifically for complex $15k–$150k+ ACV sales motions.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="text-cyber-mint mt-0.5 shrink-0" size={16} /><span>Designed to close the exact gaps where technical deals stall.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="text-cyber-mint mt-0.5 shrink-0" size={16} /><span>Built exclusively for RevOps and founder-led sales teams.</span></li>
              </ul>
              <div className="bg-cyber-mint/5 border border-cyber-mint/20 p-6 rounded-xl text-sm text-medium-grey leading-relaxed">
                <p className="text-cyber-mint font-bold mb-2">Our Early-Adopter Guarantee</p>
                Bring 3 of your deadest deals to our audit call. We will rewrite them live. If they don't meet your exact standard for technical accuracy and tone, you walk away. If they do, you send them and keep the recovered revenue.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24" aria-label="How it works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Research Your AEs Wish They Had Time To Do</h2>
            <p className="text-medium-grey max-w-2xl mx-auto">
              Cognenta automatically pulls data such as recent funding, hiring signals, and live tech-stack data to weave into the draft. Your AE gets highly researched, context-rich outreach assets without doing a single minute of manual digging.
            </p>
          </div>

          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-cyber-mint mb-2">How It Works (Behind the Scenes)</p>
            <p className="text-medium-grey text-sm">Zero new tools. Zero double data entry. Live in 48 hours.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "1. You Submit the Context",
                desc: "Your team logs their notes in your CRM — Salesforce, HubSpot, or Go High Level — just like they always do, and checks a single custom box.",
                icon: <Zap className="text-cyber-mint" aria-hidden="true" />
              },
              {
                title: "2. The Engine Fires",
                desc: "We automatically weave together the CRM notes, your product documentation, and fresh external signals to construct the exact narrative you need.",
                icon: <Users className="text-cyber-mint" aria-hidden="true" />
              },
              {
                title: "3. The 5-Minute Draft",
                desc: "Specific, technically grounded follow-up assets are ready in your AE's Drafts folder.",
                icon: <Zap className="text-cyber-mint" aria-hidden="true" />
              },
              {
                title: "4. 100% Control",
                desc: "One click to review. One click to send. If your AE doesn't want to send it, they simply delete it.",
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

      {/* Who This Is For */}
      <section className="py-24 bg-white/5 border-y border-white/5" aria-label="Who this is built for">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built for High-Ticket B2B Sales</h2>
            <p className="text-medium-grey max-w-2xl mx-auto">
              Engineered specifically for complex sales motions where context decides the deal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="glass p-8 rounded-2xl">
              <p className="text-cyber-mint font-bold text-sm uppercase tracking-wider mb-4">This is designed for:</p>
              <ul className="space-y-3 text-medium-grey text-sm leading-relaxed">
                {[
                  "Founder-led B2B SaaS and high-ticket agency teams.",
                  "RevOps and Sales Leaders scaling a SDR-to-AE motion.",
                  "Teams selling technical or high-ACV solutions where context matters.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="text-cyber-mint mt-0.5 shrink-0" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass p-8 rounded-2xl">
              <p className="text-red-400 font-bold text-sm uppercase tracking-wider mb-4">Where this doesn't fit:</p>
              <ul className="space-y-3 text-medium-grey text-sm leading-relaxed">
                {[
                  "Low-ticket, transactional sales teams.",
                  "Teams doing high-volume cold spam (we do warm reactivation only).",
                  "Teams whose SDR and Setters don't take notes (we need context to build the draft).",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0 font-bold">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="text-cyber-mint" size={28} aria-hidden="true" />,
                title: "B2B SaaS Founders",
                desc: "Running a setter-to-AE motion with $10K–$150K deals. You need every booked meeting to convert. Generic follow-ups are costing you pipeline."
              },
              {
                icon: <Rocket className="text-cyber-mint" size={28} aria-hidden="true" />,
                title: "High-Ticket Agencies",
                desc: "Selling $15K–$50K/month retainers. Your prospects expect a partner who understands their business from the first touchpoint — not a template."
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

      {/* CTA Section */}
      <section className="py-24" aria-label="Book a free audit call">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Watch Us Rewrite Your 3 Deadest Deals Live.</h2>
          <p className="text-medium-grey mb-4 leading-relaxed">
            We only work with teams where this will have a massive, measurable impact.
          </p>
          <p className="text-medium-grey mb-10 leading-relaxed">
            Bring us the raw CRM notes from your last 3 ghosted deals. Zero prep work required. You'll watch the gap in real-time as we rewrite them live on the call. You will leave with 3 rewritten follow-ups you can send immediately to wake those specific deals back up — even if we never work together.
          </p>
          <Link
            to="/revenue-audit"
            className="bg-cyber-mint text-obsidian px-10 py-5 rounded-full font-bold text-xl inline-flex items-center gap-2 mint-glow-hover transition-all duration-200 cursor-pointer"
          >
            Book a Call + Recover 3 Dead Deals Live
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}
