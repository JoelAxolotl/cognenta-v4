import { motion } from "motion/react";
import { ArrowRight, Calculator, TrendingDown, Clock } from "lucide-react";
import { useState } from "react";
import SEO from "../components/SEO";

export default function RevenueAudit() {
  const [meetings, setMeetings] = useState(40);
  const [dealSize, setDealSize] = useState(15000);
  const [ghostRate, setGhostRate] = useState(30);

  const monthlyLeak = meetings * dealSize * (ghostRate / 100);

  return (
    <div className="pt-32 pb-24">
      <SEO 
        title="Calculate Your Pipeline Leak — Free 15-Minute Revenue Audit | Cognenta" 
        description="Find out exactly how much pipeline you're losing to slow, generic SDR-to-AE follow-ups. Book a 15-minute audit and get a live ROI projection for your deal size."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Stop Estimating. Start Calculating.</h1>
            <p className="text-lg sm:text-xl text-medium-grey leading-relaxed">
              Most Founder-led sales teams know their handoff is broken. Very few know exactly how much pipeline they're losing to it every 30 days — or what a fixed version looks like in practice.
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
                  <label htmlFor="meetings-slider" className="text-sm font-bold uppercase tracking-wider text-medium-grey">Monthly SDR Meetings</label>
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
                  <label htmlFor="ghost-slider" className="text-sm font-bold uppercase tracking-wider text-medium-grey">Demo Ghost Rate (%)</label>
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
                  <p className="text-sm font-bold uppercase tracking-wider text-medium-grey mb-1">Monthly Revenue Leak</p>
                  <h3 className="text-4xl sm:text-5xl font-bold text-cyber-mint font-mono tracking-tighter" aria-live="polite">
                    ${monthlyLeak.toLocaleString()}
                  </h3>
                </div>
                <div className="w-full md:w-auto flex flex-col gap-3">
                  <label htmlFor="audit-email" className="sr-only">Work Email</label>
                  <input 
                    id="audit-email"
                    type="email" 
                    placeholder="Work Email" 
                    className="bg-obsidian border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-cyber-mint/50 transition-colors duration-200"
                    aria-label="Enter your work email address"
                  />
                  <button className="bg-cyber-mint text-obsidian px-8 py-4 rounded-full font-bold text-lg mint-glow-hover transition-all duration-200 cursor-pointer">
                    Get My Full Audit Report
                  </button>
                </div>
              </div>
              <p className="mt-4 text-[10px] text-medium-grey/50 text-center md:text-left">
                We'll send you a custom ROI projection based on your deal size and volume.
              </p>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-2xl">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <TrendingDown size={20} className="text-cyber-mint" aria-hidden="true" />
                The Real Cost
              </h4>
              <p className="text-sm text-medium-grey leading-relaxed">
                Every hour a high-intent prospect sits without a contextual, technical response after the SDR call, your demo show rate drops. Find your row and recover your pipeline.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Clock size={20} className="text-cyber-mint" aria-hidden="true" />
                What Happens in 15 Minutes
              </h4>
              <ul className="space-y-4 text-sm text-medium-grey">
                <li className="flex gap-3">
                  <span className="text-cyber-mint font-bold" aria-hidden="true">01.</span>
                  <span><strong>Your Dead Zone Dollar Report</strong> — a clear calculation of the pipeline you're leaving on the table every month.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyber-mint font-bold" aria-hidden="true">02.</span>
                  <span><strong>3 Live Bridge Draft Examples</strong> — bring us raw CRM notes from your three most recent ghosted deals. We'll build the drafts live.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyber-mint font-bold" aria-hidden="true">03.</span>
                  <span><strong>Your Custom ROI Projection</strong> — we'll map out exactly what your $200/meeting investment returns.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
