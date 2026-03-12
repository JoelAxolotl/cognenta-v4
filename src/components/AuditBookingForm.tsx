import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Loader2 } from "lucide-react";

interface AuditBookingFormProps {
  className?: string;
}

export default function AuditBookingForm({ className = "" }: AuditBookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission — replace with actual endpoint
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`glass p-8 sm:p-12 rounded-3xl text-center ${className}`}
      >
        <div className="w-16 h-16 rounded-full bg-cyber-mint/20 flex items-center justify-center mx-auto mb-6">
          <ArrowRight className="text-cyber-mint" size={28} />
        </div>
        <h3 className="text-2xl font-bold mb-4">You're In.</h3>
        <p className="text-medium-grey">
          Check your inbox — you'll receive a calendar link shortly. Calls are 15 minutes, no pitch deck.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`glass p-8 sm:p-12 rounded-3xl ${className}`}
    >
      <h3 className="text-2xl font-bold mb-8">Book Your Free Revenue Audit</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="audit-name" className="text-xs font-bold uppercase tracking-wider text-medium-grey">
            Full Name
          </label>
          <input
            id="audit-name"
            type="text"
            required
            placeholder="Jane Smith"
            className="bg-obsidian border border-white/10 rounded-xl px-5 py-3 text-sm text-white placeholder:text-medium-grey/30 focus:outline-none focus:border-cyber-mint/50 transition-colors duration-200"
          />
        </div>

        {/* Work Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="audit-email" className="text-xs font-bold uppercase tracking-wider text-medium-grey">
            Work Email
          </label>
          <input
            id="audit-email"
            type="email"
            required
            placeholder="jane@company.com"
            className="bg-obsidian border border-white/10 rounded-xl px-5 py-3 text-sm text-white placeholder:text-medium-grey/30 focus:outline-none focus:border-cyber-mint/50 transition-colors duration-200"
          />
        </div>

        {/* Company Name or URL */}
        <div className="flex flex-col gap-2">
          <label htmlFor="audit-company" className="text-xs font-bold uppercase tracking-wider text-medium-grey">
            Company Name or URL
          </label>
          <input
            id="audit-company"
            type="text"
            required
            placeholder="Acme Corp or acme.com"
            className="bg-obsidian border border-white/10 rounded-xl px-5 py-3 text-sm text-white placeholder:text-medium-grey/30 focus:outline-none focus:border-cyber-mint/50 transition-colors duration-200"
          />
        </div>

        {/* Monthly SDR Meetings */}
        <div className="flex flex-col gap-2">
          <label htmlFor="audit-meetings" className="text-xs font-bold uppercase tracking-wider text-medium-grey">
            Monthly SDR Meetings
          </label>
          <select
            id="audit-meetings"
            required
            defaultValue=""
            className="bg-obsidian border border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:outline-none focus:border-cyber-mint/50 transition-colors duration-200 appearance-none cursor-pointer"
          >
            <option value="" disabled className="text-medium-grey/30">Select range</option>
            <option value="1-10">1–10</option>
            <option value="10-30">10–30</option>
            <option value="30-60">30–60</option>
            <option value="60+">60+</option>
          </select>
        </div>

        {/* Average Deal Size (ACV) */}
        <div className="flex flex-col gap-2">
          <label htmlFor="audit-acv" className="text-xs font-bold uppercase tracking-wider text-medium-grey">
            Average Deal Size (ACV)
          </label>
          <select
            id="audit-acv"
            required
            defaultValue=""
            className="bg-obsidian border border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:outline-none focus:border-cyber-mint/50 transition-colors duration-200 appearance-none cursor-pointer"
          >
            <option value="" disabled className="text-medium-grey/30">Select range</option>
            <option value="under-10k">Under $10k</option>
            <option value="10k-25k">$10k–$25k</option>
            <option value="25k-50k">$25k–$50k</option>
            <option value="50k+">$50k+</option>
          </select>
        </div>

        {/* CRM Platform */}
        <div className="flex flex-col gap-2">
          <label htmlFor="audit-crm" className="text-xs font-bold uppercase tracking-wider text-medium-grey">
            CRM Platform
          </label>
          <select
            id="audit-crm"
            required
            defaultValue=""
            className="bg-obsidian border border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:outline-none focus:border-cyber-mint/50 transition-colors duration-200 appearance-none cursor-pointer"
          >
            <option value="" disabled className="text-medium-grey/30">Select platform</option>
            <option value="hubspot">HubSpot</option>
            <option value="salesforce">Salesforce</option>
            <option value="gohighlevel">GoHighLevel</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Biggest Friction Point */}
      <div className="flex flex-col gap-2 mt-6">
        <label htmlFor="audit-friction" className="text-xs font-bold uppercase tracking-wider text-medium-grey">
          Biggest Friction Point in Your SDR-to-AE Handoff{" "}
          <span className="text-medium-grey/40 normal-case tracking-normal">(Optional)</span>
        </label>
        <textarea
          id="audit-friction"
          placeholder="e.g. Our AEs spend 30 minutes researching every account before the demo..."
          rows={3}
          className="bg-obsidian border border-white/10 rounded-xl px-5 py-3 text-sm text-white placeholder:text-medium-grey/30 focus:outline-none focus:border-cyber-mint/50 transition-colors duration-200 resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 w-full bg-cyber-mint text-obsidian px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 mint-glow-hover transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Submitting...
          </>
        ) : (
          <>
            Book My Free Revenue Audit
            <ArrowRight size={20} />
          </>
        )}
      </button>

      <p className="mt-4 text-xs text-medium-grey/50 text-center">
        You'll receive a calendar link immediately. Calls are 15 minutes, no pitch deck.
      </p>
    </motion.form>
  );
}
