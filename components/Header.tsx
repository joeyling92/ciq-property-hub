"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/projects", label: "Properties" },
  { href: "/locations/ciq", label: "CIQ Area" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-serif text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200">
              CIQ Property Hub
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
              Independent Property Consultant
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white text-sm font-semibold px-4 py-2 rounded transition-colors duration-200"
            >
              Register Interest
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[var(--text-secondary)]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-[var(--border)] py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-2 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-[var(--border)]">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-[var(--accent)] text-white text-sm font-semibold px-4 py-3 rounded"
                onClick={() => setMenuOpen(false)}
              >
                Register Interest
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
