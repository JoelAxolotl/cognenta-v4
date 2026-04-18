import { motion } from "motion/react";
import { ArrowRight, Calculator, TrendingDown, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SEO from "../components/SEO";
import AuditBookingForm from "../components/AuditBookingForm";

export default function RevenueAudit() {
  const [meetings, setMeetings] = useState(40);
  const [dealSize, setDealSize] = useState(15000);
  const [ghostRate, setGhostRate] = useState(0);

  const monthlyLeak = meetings * dealSize * (ghostRate / 100);

  return (
    <div className="pt-32 pb-24">
      <SEO 
        title="FREE 360° Pipeline Leak Scan — Book a Call + Recover 3 Dead Deals Live | Cognenta" 
        description="Bring us the raw CRM notes from your 3 ghosted deals. We rewrite them live on the call. Keep the follow-ups even if you don't hire us."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Watch Us Rewrite Your 3 Deadest Deals Live.</h1>
            <p className="text-lg sm:text-xl text-medium-grey leading-relaxed">
              We only work with teams where this will have a massive, measurable impact. Bring us the raw CRM notes from your last 3 ghosted deals — zero prep work required. You'll watch the gap in real-time as we rewrite them on the call.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Calculator */}
          <div className="lg:col-span-2 glass p-8 md:p-12 rounded-3xl">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Calculator className="text-cyber-mint" aria-hidden="true" />
              Pipeline Leak Calculator
            </h2>
            
            <div className="space-y-10">
              <div>
                <div className="flex justify-between mb-4">
                  <label htmlFor="meetings-slider" className="text-sm font-bold uppercase tracking-wider text-medium-grey">Monthly Setter Meetings</label>
                  <span className="text-cyber-mint font-mono font-bold" aria-live="polite">{meetings}</span>
                </div>
                <input 
                  id="meetings-slider"
                  type="range" min="1" max="200" value={meetings} 
                  onChange={(e) => setMeetings(parseInt(e.target.value))}
                  className="w-full"
                  aria-valuenow={meetings}
                  aria-valuemin={1}
                  aria-valuemax={200}
                  aria-label="Monthly SDR Meetings"
                />
              </div>

              <div>
                <div className="flex justify-between mb-4">
                  <label htmlFor="dealsize-slider" className="text-sm font-bold uppercase tracking-wider text-medium-grey">Avg Deal Size ($)</label>
                  <span className="text-cyber-mint font-mono font-bold" aria-live="polite">${dealSize.toLocaleString()}</span>
                </div>
                <input 
                  id="dealsize-slider"
                  type="range" min="1000" max="100000" step="1000" value={dealSize} 
                  onChange={(e) => setDealSize(parseInt(e.target.value))}
                  className="w-full"
                  aria-valuenow={dealSize}
                  aria-valuemin={1000}
                  aria-valuemax={100000}
                  aria-label="Average Deal Size in dollars"
                />
              </div>

              <div>
                <div className="flex justify-between mb-4">
                  <label htmlFor="ghost-slider" className="text-sm font-bold uppercase tracking-wider text-medium-grey">Actual Ghost Rate (%)</label>
                  <span className="text-cyber-mint font-mono font-bold" aria-live="polite">{ghostRate}%</span>
                </div>
                <input 
                  id="ghost-slider"
                  type="range" min="1" max="100" value={ghostRate} 
                  onChange={(e) => setGhostRate(parseInt(e.target.value))}
                  className="w-full"
                  aria-valuenow={ghostRate}
                  aria-valuemin={1}
                  aria-valuemax={100}
                  aria-label="Demo Ghost Rate percentage"
                />
              </div>
            </div>

            <div className="mt-16 p-8 bg-cyber-mint/5 border border-cyber-mint/20 rounded-2xl">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-medium-grey mb-1">You are bleeding roughly</p>
                  <h3 className="text-4xl sm:text-5xl font-bold text-cyber-mint font-mono tracking-tighter" aria-live="polite">
                    ${monthlyLeak.toLocaleString()}
                  </h3>
                  <p className="text-medium-grey mt-1 text-sm">in pipeline into the dead zone every month.</p>
                </div>
              <div className="w-full md:w-auto flex flex-col gap-3">
                  <Link
                    to="#audit-form"
                    className="bg-cyber-mint text-obsidian px-8 py-4 rounded-full font-bold text-lg mint-glow-hover transition-all duration-200 cursor-pointer text-center"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Book a Call + Recover 3 Dead Deals Live
                  </Link>
                </div>
              </div>
              <p className="mt-4 text-[10px] text-medium-grey/50 text-center md:text-left">
                We'll rewrite your 3 deadest deals live on the call. Keep the follow-ups either way.
              </p>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-2xl">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <TrendingDown size={20} className="text-cyber-mint" aria-hidden="true" />
                What You'll Walk Away With
              </h4>
              <ul className="space-y-3 text-sm text-medium-grey">
                <li className="flex gap-3">
                  <span className="text-cyber-mint font-bold shrink-0">01.</span>
                  <span>3 rewritten follow-ups you can send immediately to wake those deals back up.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyber-mint font-bold shrink-0">02.</span>
                  <span>Your exact pipeline leak estimate — what you're bleeding per month.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyber-mint font-bold shrink-0">03.</span>
                  <span>See how our software plugs the leaks in your current motion.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyber-mint font-bold shrink-0">04.</span>
                  <span>Keep the report — even if you don't hire us.</span>
                </li>
              </ul>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Clock size={20} className="text-cyber-mint" aria-hidden="true" />
                What Happens on the Call
              </h4>
              <p className="text-sm text-medium-grey leading-relaxed">
                Bring us the raw CRM notes from your last 3 ghosted deals. Zero prep work required. You'll watch the gap in real-time as we rewrite them live on the call — even if we never work together.
              </p>
            </div>
          </div>
        </div>

        {/* 7-Field Audit Booking Form */}
        <div id="audit-form" className="mt-16">
          <AuditBookingForm />
        </div>
      </div>
    </div>
  );
}
