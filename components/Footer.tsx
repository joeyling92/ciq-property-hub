import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-xl font-bold text-white mb-2">CIQ Property Hub</h3>
            <p className="text-xs uppercase tracking-widest text-[var(--accent)] mb-4">
              Independent Marketing Negotiator · {siteConfig.consultant.ren}
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Property listings around JB CIQ, RTS and Johor Bahru City Centre.
              Operated under {siteConfig.consultant.company} · {siteConfig.consultant.ren}.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white text-sm font-semibold px-4 py-2 rounded transition-colors duration-200"
              >
                Register Interest
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="/projects" className="hover:text-white transition-colors">All Properties</Link></li>
              <li><Link href="/locations/ciq" className="hover:text-white transition-colors">CIQ Area Guide</Link></li>
              <li><Link href="/guides" className="hover:text-white transition-colors">Buyer Guides</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} CIQ Property Hub · Independent Marketing Negotiator · {siteConfig.consultant.ren} · {siteConfig.consultant.company}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
