import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import SEO from "../components/SEO";

const faqs = [
  {
    category: "Workflow & Routing",
    questions: [
      {
        q: "How does the workflow routing work?",
        a: "We build a custom Triage Checkbox directly into your CRM. If the team logs a straightforward deal, they leave it blank. If they log a complex deal, they check the box. We only fire when you need us to."
      },
      {
        q: "What if the draft doesn't sound exactly right?",
        a: "Our voice profiling gets the tone 98% perfect out of the gate. Because it lives in the draft folder, your AE retains absolute authority. If a highly complex deal requires a specific nuance, they can add that final 2% human touch in seconds before hitting send."
      },
      {
        q: "How quickly will we see results?",
        a: "You will start seeing contextual drafts in your team's queue within 48 hours of onboarding your post-call revenue recovery infrastructure."
      }
    ]
  },
  {
    category: "Operations & Voice Profiling",
    questions: [
      {
        q: "How do you actually build my AE's voice profile?",
        a: "We ask for 3 to 5 of your AE's most successful past follow-ups. Our system analyzes their sentence length, greeting style, and vocabulary to build their custom profile."
      },
      {
        q: "What happens when we hire new AEs?",
        a: "You simply drop their writing samples into your onboarding folder, and their unique voice profile is live and generating drafts in minutes."
      }
    ]
  },
  {
    category: "Security & Deliverability",
    questions: [
      {
        q: "Will this hurt our domain reputation?",
        a: "No. Spam filters are built to catch volume and pattern-matching. Every Cognenta draft is a unique, 1-to-1 email sent manually from your actual outbox like your SDR or AE normally would."
      },
      {
        q: "Is there a human reading our prospect notes?",
        a: "No. Cognenta is a 100% automated system. Your data passes securely via API from your CRM straight into your AE's drafts folder. Meaning only you have access to the data."
      },
      {
        q: "How do we know our data is safe?",
        a: "We practice strict data minimization. Most importantly, we do not use your proprietary CRM data or prospect notes to train our AI models."
      }
    ]
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  const toggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="pt-32 pb-24">
      <SEO
        title="Frequently Asked Questions | Cognenta"
        description="Everything you need to know about Cognenta's post-call revenue recovery — pricing, workflow routing, voice profiling, and data security."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-lg sm:text-xl text-medium-grey">Every question a skeptical founder asks before booking. Answered directly.</p>
        </motion.div>

        <div className="space-y-12">
          {faqs.map((category, catIdx) => (
            <div key={catIdx}>
              <h2 className="text-sm font-bold uppercase tracking-widest text-cyber-mint mb-6 border-b border-white/5 pb-2">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((item, qIdx) => {
                  const id = `${catIdx}-${qIdx}`;
                  const isOpen = openIndex === id;
                  return (
                    <div key={qIdx} className="glass rounded-2xl overflow-hidden transition-all duration-300">
                      <button
                        onClick={() => toggle(id)}
                        className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors duration-200 cursor-pointer"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${id}`}
                      >
                        <span className="text-lg font-bold">{item.q}</span>
                        {isOpen ? <Minus className="text-cyber-mint shrink-0 ml-4" aria-hidden="true" /> : <Plus className="text-medium-grey shrink-0 ml-4" aria-hidden="true" />}
                      </button>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          className="px-8 pb-6 text-medium-grey leading-relaxed whitespace-pre-line"
                          role="region"
                          aria-labelledby={`faq-question-${id}`}
                        >
                          {item.a}
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 glass p-12 rounded-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-medium-grey mb-8">The fastest way to get answers is live on the call — we'll rewrite 3 of your deadest deals and you'll see exactly how it works.</p>
          <a
            href="/revenue-audit"
            className="bg-cyber-mint text-obsidian px-8 py-4 rounded-full font-bold text-lg mint-glow-hover transition-all duration-200 cursor-pointer inline-block"
          >
            Book a Call + Recover 3 Dead Deals Live
          </a>
        </div>
      </div>
    </div>
  );
}
