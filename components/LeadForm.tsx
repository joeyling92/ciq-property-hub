"use client";

import { useState } from "react";

type LeadFormProps = {
  projectName?: string;
};

export default function LeadForm({ projectName }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
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
    // GTM dataLayer event
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
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-2">Enquiry Received</h3>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
          Thank you for your enquiry. A property consultant will contact you via WhatsApp with the latest
          project information, available layouts and current package.
        </p>
        <p className="text-xs text-[var(--text-muted)] mt-3">
          Your information will only be used to respond to your property enquiry.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[var(--border)] rounded p-6 shadow-sm">
      <h3 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-1">Request Project Information</h3>
      <p className="text-sm text-[var(--text-muted)] mb-5">
        A consultant will reach out via WhatsApp with details.
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
            <option value="The Astaka @ One Bukit Senyum">The Astaka @ One Bukit Senyum</option>
            <option value="Bukit Chagar Residences">Bukit Chagar Residences</option>
            <option value="JB Cityscape @ City Centre">JB Cityscape @ City Centre</option>
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
      </div>

      <button
        type="submit"
        className="mt-5 w-full bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white font-semibold py-3 rounded transition-colors duration-200 text-sm"
      >
        Send Enquiry
      </button>

      <p className="mt-3 text-xs text-[var(--text-muted)] text-center leading-relaxed">
        By submitting, you agree to be contacted by our consultant via WhatsApp regarding your property enquiry.
        See our <a href="/privacy-policy" className="underline hover:text-[var(--accent)]">Privacy Policy</a>.
      </p>
    </form>
  );
}
