import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer for CIQ Property Hub — registered marketing negotiator website.",
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-[var(--bg-dark)] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]} />
          <h1 className="font-serif text-4xl font-bold text-white mt-4 mb-2">Disclaimer</h1>
          <p className="text-white/50 text-sm">Last updated: {new Date().toLocaleDateString("en-MY", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Primary disclaimer box */}
          <div className="bg-amber-50 border-2 border-amber-300 rounded p-6 mb-10">
            <p className="font-bold text-amber-900 text-sm mb-2 uppercase tracking-wider">
              Important — Please Read Before Using This Website
            </p>
            <p className="text-amber-800 text-sm leading-relaxed">
              This website is operated by an independent marketing negotiator registered under{" "}
              <strong>{siteConfig.consultant.company}</strong> ({siteConfig.consultant.ren}).
              This website is <strong>NOT</strong> the official website of any property developer,
              official project sales gallery, or developer-authorised portal. All project information is
              provided for general informational purposes only and must be independently verified before
              any decision is made.
            </p>
          </div>

          <div className="space-y-8 text-sm text-[var(--text-secondary)] leading-relaxed">

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">
                Independent Consultant Website
              </h2>
              <p>
                CIQ Property Hub is operated by an independent marketing negotiator. We are not employed
                by, affiliated with, or authorised as the official representative of any developer
                featured on this website, unless explicitly stated otherwise on a specific project page.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">
                Project Information
              </h2>
              <p>
                All project information, including developer names, location details, property types,
                facilities, unit types and any other specifications, is provided for general
                informational purposes only. This information:
              </p>
              <ul className="list-disc ml-5 mt-2 space-y-1.5">
                <li>May not be complete or up to date</li>
                <li>Should be verified directly with the developer before any decision is made</li>
                <li>Does not constitute a binding offer or confirmed specification</li>
                <li>May be subject to change by the developer without prior notice</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">Pricing</h2>
              <p>
                Any pricing references on this website are indicative only. Actual prices are
                determined by the developer and may differ from any information published here.
                We do not guarantee any specific price, promotional package, discount or rebate.
                Always confirm the latest pricing directly with the developer or authorised
                sales representative.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">Availability</h2>
              <p>
                Unit availability changes constantly. Availability shown or implied on this website
                may not reflect real-time developer inventory. Do not rely on this website for
                availability confirmation.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">
                RTS Link and Infrastructure
              </h2>
              <p>
                References to the Johor Bahru–Singapore RTS Link, Bukit Chagar station and related
                infrastructure are based on publicly available information. Infrastructure timelines
                and project specifications are subject to official government and transport authority
                announcements and may change. This website does not make any representations about
                infrastructure completion timelines.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">
                No Investment Returns Guaranteed
              </h2>
              <p>
                Nothing on this website constitutes a guarantee of rental returns, capital
                appreciation or investment performance. Property investment involves risk.
                Past property market performance does not guarantee future results.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">
                Foreign Buyer Information
              </h2>
              <p>
                Information relating to foreign buyer eligibility, including for Singapore citizens
                and permanent residents, is subject to current Malaysian property regulations which
                may change. Consult a licensed legal professional in Malaysia for current requirements.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">
                Developer Identity
              </h2>
              <p>
                Developer names mentioned on this website are identified for informational purposes
                to help visitors understand who is building a project. This website does not represent,
                speak for, or act as an official channel for any developer unless otherwise verified
                and stated.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">Contact</h2>
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
