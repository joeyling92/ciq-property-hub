import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for CIQ Property Hub.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-[var(--bg-dark)] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]} />
          <h1 className="font-serif text-4xl font-bold text-white mt-4 mb-2">Terms of Use</h1>
          <p className="text-white/50 text-sm">Last updated: {new Date().toLocaleDateString("en-MY", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-sm text-[var(--text-secondary)] leading-relaxed">

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">1. Website Operator</h2>
              <p>
                This website is operated by an independent property consultant registered under{" "}
                <strong>{siteConfig.consultant.company}</strong> ({siteConfig.consultant.ren}).
                By using this website, you agree to these Terms of Use.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">2. Nature of Website</h2>
              <p>
                CIQ Property Hub is an independent property consultant website. It is <strong>not</strong>{" "}
                the official website of any property developer, official sales gallery, or developer-authorised
                portal. All project information is provided by an independent consultant for general
                informational purposes.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">3. Property Information</h2>
              <p>Project information published on this website:</p>
              <ul className="list-disc ml-5 mt-2 space-y-1.5">
                <li>Is provided for general informational purposes only</li>
                <li>May not reflect the latest developer updates</li>
                <li>Should be independently verified with the developer or official sales representative</li>
                <li>Does not constitute a binding offer, confirmed availability or confirmed pricing</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">4. Pricing Disclaimer</h2>
              <p>
                Any indicative pricing, price ranges or pricing references on this website are indicative
                only. Actual pricing is determined by the developer and may change at any time without
                notice. We do not guarantee any specific price, discount, rebate or special package.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">5. Availability Disclaimer</h2>
              <p>
                Unit availability, unit types and project specifications are subject to change.
                Availability at any point in time can only be confirmed by the developer or their
                authorised representatives. We do not guarantee availability of any specific unit.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">6. No Investment Advice</h2>
              <p>
                Nothing on this website constitutes investment advice, financial advice or a guarantee
                of investment returns. Property investment involves risk. Past performance does not
                guarantee future results. Users should consult independent financial and legal advisors
                before making any property investment decision.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">7. Third-Party Information</h2>
              <p>
                References to developers, project names, RTS infrastructure, government plans and
                other third-party information are based on publicly available sources. We are not
                responsible for the accuracy or completeness of such third-party information.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">8. External Links</h2>
              <p>
                This website may contain links to external websites. We are not responsible for
                the content, accuracy or privacy practices of external websites. Links are provided
                for convenience only.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">9. Changes to Information</h2>
              <p>
                We reserve the right to update, modify or remove information on this website at
                any time without notice. Users are responsible for checking for the latest information.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">10. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, {siteConfig.consultant.company}{" "}
                and its registered consultants shall not be liable for any direct, indirect, incidental,
                consequential or special damages arising from your use of this website or reliance on
                information contained herein.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">11. Governing Law</h2>
              <p>
                These Terms of Use are governed by the laws of Malaysia. Any disputes shall be
                subject to the jurisdiction of Malaysian courts.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">12. Contact</h2>
              <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded p-4">
                <p><strong>{siteConfig.consultant.company}</strong> · {siteConfig.consultant.ren}</p>
                <p>WhatsApp:{" "}
                  <a
                    href={siteConfig.consultant.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] hover:underline"
                  >
                    {siteConfig.consultant.whatsapp}
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
