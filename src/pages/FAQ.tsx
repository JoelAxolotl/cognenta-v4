import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import SEO from "../components/SEO";

const faqs = [
  {
    category: "Pricing & Results",
    questions: [
      {
        q: "What does it cost?",
        a: "Setup fee: $350 (covers building your custom Handoff Workflow, Intake Form, and CRM sync). Performance fee: $200 per meeting that shows. No monthly retainer. No flat subscription. We only charge when a prospect actually shows up to the demo."
      },
      {
        q: "How quickly will we see results?",
        a: "The most immediate impact comes from simply closing the response gap and raising the technical quality of the handoff — both of which take effect from day one."
      }
    ]
  },
  {
    category: "Operations & Deliverability",
    questions: [
      {
        q: "What does implementation actually look like?",
        a: "In most cases, we're fully integrated within 48 hours for standard CRM instances. We build your custom SDR Intake Form, map the HubSpot or Salesforce routing, and configure the enrichment triggers. Your AEs start seeing customized drafts in their queue within two business days."
      },
      {
        q: "Will this hurt our domain reputation?",
        a: "No. Spam filters are built to catch volume and pattern-matching. Every Cognenta draft is a unique, 1-to-1 email sent from your AE's actual outbox after human review. It reads like high-effort manual outreach because, structurally, it is."
      }
    ]
  },
  {
    category: "Security & Privacy",
    questions: [
      {
        q: "How do we know our data is safe?",
        a: "Cognenta is a managed routing and drafting protocol, not a data warehouse. We practice data minimization by design. Once a draft is staged in your review queue, we apply a zero-retention policy to the prospect's raw call notes and PII."
      },
      {
        q: "Why API keys instead of a native app?",
        a: "Native apps often require broad permissions. Connecting via specific API connections means you maintain granular control over exactly what our team can access — and you can revoke it instantly without involving IT."
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
        description="Everything you need to know about Cognenta's pricing, implementation, and security for your SDR-to-AE handoff."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-lg sm:text-xl text-medium-grey">Everything you need to know about pricing, implementation, and security.</p>
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
                          className="px-8 pb-6 text-medium-grey leading-relaxed"
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
          <p className="text-medium-grey mb-8">We're here to help you recover your pipeline.</p>
          <a
            href="/revenue-audit"
            className="bg-cyber-mint text-obsidian px-8 py-4 rounded-full font-bold text-lg mint-glow-hover transition-all duration-200 cursor-pointer inline-block"
          >
            Book Your Free Revenue Audit
          </a>
        </div>
      </div>
    </div>
  );
}
