"use client";

import { useState } from "react";
import type { FAQItem } from "@/lib/projects";

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[var(--border)]">
      {items.map((item, i) => (
        <div key={i} className="py-4">
          <button
            className="w-full flex items-start justify-between gap-4 text-left group"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-medium text-[var(--text-primary)] text-sm leading-relaxed group-hover:text-[var(--accent)] transition-colors duration-200">
              {item.question}
            </span>
            <span className="flex-shrink-0 w-5 h-5 rounded-full border border-[var(--border)] flex items-center justify-center mt-0.5">
              <svg
                className={`w-3 h-3 text-[var(--text-muted)] transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          {openIndex === i && (
            <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed pr-8">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
