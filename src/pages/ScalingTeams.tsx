import { motion } from "motion/react";
import { Users, Sun, MessageSquare, BarChart3 } from "lucide-react";
import SEO from "../components/SEO";

export default function ScalingTeams() {
  return (
    <div className="pt-32 pb-24">
      <SEO 
        title="Scale Founder-Led Sales Without Burning Out | Cognenta" 
        description="Built for B2B SaaS and high-ticket agency founders running a setter-to-AE motion. Eliminate the ops slog. Recover pipeline. Get your Sundays back."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl font-bold mb-6">Built for Founder-Led Sales — SaaS and High-Ticket Agencies</h1>
            <p className="text-xl text-medium-grey leading-relaxed">
              You hired Setters to scale your calendar. You're still personally closing deals. Every time a meeting is booked, your senior team burns valuable selling time researching the account and writing follow-ups.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-12">
            {[
              {
                title: "Get Your Sundays Back",
                desc: "We handle the account research, the CRM data entry, and the initial drafting. You show up to the demo with a prospect who has received a relevant, technically grounded follow-up — and zero admin hanging over the weekend.",
                icon: <Sun className="text-cyber-mint" size={28} />
              },
              {
                title: "Signal That You Were Listening",
                desc: "A prospect who tells your SDR they're running on Kubernetes expects a peer-to-peer conversation. A generic calendar invite tells them the notes went nowhere. Cognenta ensures your AE's first touchpoint reflects exactly what was discussed.",
                icon: <MessageSquare className="text-cyber-mint" size={28} />
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
                icon: <BarChart3 className="text-cyber-mint" size={28} />
              },
              {
                title: "For High-Ticket Agencies",
                desc: "A prospect who mentioned their CPL is unsustainable doesn't want a deck. They want proof you understand their situation. That's what Cognenta builds.",
                icon: <Users className="text-cyber-mint" size={28} />
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

        <div className="mt-24 relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-sapphire/40 to-transparent z-10" />
          <img 
            src="https://picsum.photos/seed/team/1200/600" 
            alt="Team collaboration" 
            className="w-full h-[400px] object-cover opacity-40 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 z-20 flex items-center px-12">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-6 italic">"That's not a hiring problem. That's an ops gap. Cognenta closes it."</h2>
              <button className="bg-cyber-mint text-obsidian px-8 py-4 rounded-full font-bold text-lg mint-glow-hover transition-all">
                Book Your Free Revenue Audit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
