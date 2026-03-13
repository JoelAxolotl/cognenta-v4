import { motion } from "motion/react";
import { Users, Sun, MessageSquare, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function ScalingTeams() {
  return (
    <div className="pt-32 pb-24">
      <SEO 
        title="Scale Founder-Led Sales Without Burning Out | Cognenta" 
        description="Built for B2B SaaS and high-ticket agency founders running a setter-to-AE motion. Eliminate the ops slog. Recover pipeline. Get your Sundays back."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Built for Founder-Led Sales — SaaS and High-Ticket Agencies</h1>
            <p className="text-lg sm:text-xl text-medium-grey leading-relaxed">
              You hired Setters to scale your calendar. You're still personally closing deals. Every time a meeting is booked, your senior team burns valuable selling time researching the account, cleaning up the CRM, and writing a follow-up that proves they understand the technical architecture.
            </p>
          </motion.div>
        </div>

        {/* Pull Quote — immediately after hero */}
        <div className="mb-16 relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-sapphire/40 to-transparent z-10" aria-hidden="true" />
          <div className="w-full h-[250px] bg-gradient-to-br from-sapphire/30 via-obsidian to-cyber-mint/10" aria-hidden="true" />
          <div className="absolute inset-0 z-20 flex items-center px-8 sm:px-12">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-bold italic leading-snug">"That's not a hiring problem. That's an ops gap. Cognenta closes it."</h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-12">
            {[
              {
                title: "Get Your Sundays Back",
                desc: "We handle the account research, the CRM data entry, and the initial drafting. You show up to the demo with a prospect who has received a relevant, technically grounded follow-up — and zero admin hanging over the weekend.",
                icon: <Sun className="text-cyber-mint" size={28} aria-hidden="true" />
              },
              {
                title: "Signal That You Were Listening",
                desc: "A prospect who tells your SDR they're running on Kubernetes and struggling with SOC2 compliance expects a peer-to-peer conversation. A generic calendar invite tells them the notes went nowhere. Cognenta ensures your AE's first touchpoint reflects exactly what was discussed.",
                icon: <MessageSquare className="text-cyber-mint" size={28} aria-hidden="true" />
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-cyber-mint/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-medium-grey leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-12">
            {[
              {
                title: "Scale Without Breaking Quality",
                desc: "As your SDR team books more meetings, your AE response quality does not degrade. Consistent, high-quality outreach as your queue gets longer — without the weekend catch-up work.",
                icon: <BarChart3 className="text-cyber-mint" size={28} aria-hidden="true" />
              },
              {
                title: "For High-Ticket Agencies",
                desc: "A prospect who mentioned their CPL is unsustainable and their current dev shop is missing deadlines doesn't want a deck. They want proof you understand their situation. That's what Cognenta builds.",
                icon: <Users className="text-cyber-mint" size={28} aria-hidden="true" />
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-cyber-mint/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-medium-grey leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <Link
            to="/revenue-audit"
            className="bg-cyber-mint text-obsidian px-8 py-4 rounded-full font-bold text-lg mint-glow-hover transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
          >
            Book Your Free Revenue Audit
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
