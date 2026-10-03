"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

type LeadFormProps = {
  projectName?: string;
};

export default function LeadForm({ projectName }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    email: "",
    project: projectName ?? "",
    purpose: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "submit_lead_form",
        project_name: form.project,
        page_type: "lead_form",
        location: "ciq_jb",
      });
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-[var(--accent)]/15 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-2">Thank You for Your Interest</h3>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5">
          Your details have been noted. To ensure you receive a response, please send us a WhatsApp
          message — our registered marketing negotiator ({siteConfig.consultant.ren}) will follow up
          with the latest project information.
        </p>
        <a
          href={siteConfig.consultant.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded transition-colors duration-200 text-sm"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Send WhatsApp Message
        </a>
        <p className="text-xs text-[var(--text-muted)] mt-4">
          This form does not submit to a server. Please use WhatsApp for a confirmed response.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[var(--border)] rounded p-6 shadow-sm">
      <h3 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-1">Register Interest</h3>
      <p className="text-sm text-[var(--text-muted)] mb-5">
        Fill in your details and our consultant will be in touch.
      </p>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Ahmad bin Ali"
            className="w-full border border-[var(--border)] rounded px-3 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200"
          />
        </div>

        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
            WhatsApp Number <span className="text-red-500">*</span>
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            required
            value={form.whatsapp}
            onChange={handleChange}
            placeholder="e.g. +601X XXXXXXX"
            className="w-full border border-[var(--border)] rounded px-3 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
            Email <span className="text-xs text-[var(--text-muted)]">(optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full border border-[var(--border)] rounded px-3 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200"
          />
        </div>

        <div>
          <label htmlFor="project" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
            Interested Project <span className="text-red-500">*</span>
          </label>
          <select
            id="project"
            name="project"
            required
            value={form.project}
            onChange={handleChange}
            className="w-full border border-[var(--border)] rounded px-3 py-2.5 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200 bg-white"
          >
            <option value="">Select a project</option>
            <option value="Richmond JBCC">Richmond JBCC</option>
            <option value="R&F Princess Cove">R&F Princess Cove</option>
            <option value="Calia Residences">Calia Residences</option>
            <option value="Gensphere">Gensphere</option>
            <option value="CTC Skyone">CTC Skyone</option>
            <option value="The Address">The Address</option>
            <option value="Paragon Gateway">Paragon Gateway</option>
            <option value="The Iconic by PGB">The Iconic by PGB</option>
            <option value="Summer Suites">Summer Suites</option>
            <option value="Not sure yet">Not sure yet — advise me</option>
          </select>
        </div>

        <div>
          <label htmlFor="purpose" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
            Buying Purpose <span className="text-red-500">*</span>
          </label>
          <select
            id="purpose"
            name="purpose"
            required
            value={form.purpose}
            onChange={handleChange}
            className="w-full border border-[var(--border)] rounded px-3 py-2.5 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200 bg-white"
          >
            <option value="">Select purpose</option>
            <option value="Own Stay">Own Stay</option>
            <option value="Investment">Investment</option>
            <option value="First Home">First Home</option>
            <option value="Singapore Buyer">Singapore Buyer</option>
            <option value="Exploring Options">Exploring Options</option>
          </select>
        </div>

        <div className="flex items-start gap-2.5 pt-1">
          <input
            id="consent"
            type="checkbox"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[var(--accent)]"
          />
          <label htmlFor="consent" className="text-xs text-[var(--text-secondary)] leading-relaxed">
            I agree to be contacted by a registered marketing negotiator regarding my
            enquiry. I have read the{" "}
            <a href="/privacy-policy" className="underline hover:text-[var(--accent)]">Privacy Policy</a>{" "}
            and{" "}
            <a href="/terms" className="underline hover:text-[var(--accent)]">Terms of Use</a>.{" "}
            <span className="text-red-500">*</span>
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 w-full bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white font-semibold py-3 rounded transition-colors duration-200 text-sm"
      >
        Register Interest
      </button>

      <p className="mt-3 text-xs text-[var(--text-muted)] text-center leading-relaxed">
        Your information will only be used to respond to your property enquiry.
      </p>
    </form>
  );
}
