import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for CIQ Property Hub. How we collect, use and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-[var(--bg-dark)] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
          <h1 className="font-serif text-4xl font-bold text-white mt-4 mb-2">Privacy Policy</h1>
          <p className="text-white/50 text-sm">Last updated: {new Date().toLocaleDateString("en-MY", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-stone max-w-none text-[var(--text-secondary)] leading-relaxed space-y-8 text-sm">

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">1. Who We Are</h2>
              <p>
                This website (<strong>CIQ Property Hub</strong>) is operated by{" "}
                <strong>{siteConfig.consultant.name}</strong>, an independent property consultant
                registered under <strong>{siteConfig.consultant.company}</strong> (
                {siteConfig.consultant.ren}).
              </p>
              <p className="mt-3">
                Contact:{" "}
                <a href={`mailto:${siteConfig.consultant.email}`} className="text-[var(--accent)] hover:underline">
                  {siteConfig.consultant.email}
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">2. Information We May Collect</h2>
              <p>When you use this website or submit an enquiry, we may collect:</p>
              <ul className="list-disc ml-5 mt-2 space-y-1.5">
                <li><strong>Name</strong> — to identify you when responding to your enquiry</li>
                <li><strong>WhatsApp number</strong> — to contact you with property information</li>
                <li><strong>Email address</strong> — where voluntarily provided</li>
                <li><strong>Property interest and buying purpose</strong> — to provide relevant property guidance</li>
                <li><strong>Technical data</strong> — including IP address, browser type, pages visited, via analytics tools</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">3. How We Use Your Information</h2>
              <p>We use the information collected to:</p>
              <ul className="list-disc ml-5 mt-2 space-y-1.5">
                <li>Respond to your property enquiries</li>
                <li>Provide you with project information relevant to your stated interest</li>
                <li>Contact you via WhatsApp or email as consented at the point of submission</li>
                <li>Improve our website content and user experience</li>
              </ul>
              <p className="mt-3">
                We do not sell, rent or share your personal information with third parties for their
                own marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">4. WhatsApp Communication</h2>
              <p>
                When you submit an enquiry form or click a WhatsApp button, you consent to being
                contacted by our property consultant via WhatsApp regarding your property enquiry.
                Messages will be limited to responding to your enquiry and providing relevant
                property information.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">5. Analytics & Cookies</h2>
              <p>
                This website may use analytics tools including <strong>Google Analytics 4</strong>{" "}
                and <strong>Google Tag Manager</strong> to understand how visitors interact with
                our website. These tools may collect anonymous usage data including page views,
                session duration and general geographic location.
              </p>
              <p className="mt-3">
                Cookies may be placed on your device by these analytics tools. By continuing to use
                this website, you consent to the use of cookies for these purposes.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">6. Advertising</h2>
              <p>
                This website may use remarketing or tracking pixels (including Google Ads and Meta
                Pixel) to enable advertising on third-party platforms. These tools may collect
                information about your visit to this website for the purpose of showing you
                relevant advertisements on other platforms.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">7. Data Retention</h2>
              <p>
                Enquiry information is retained for the purpose of responding to your enquiry and
                for a reasonable period thereafter. You may request deletion of your personal
                information by contacting us at the details below.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">8. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc ml-5 mt-2 space-y-1.5">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, contact us at{" "}
                <a href={`mailto:${siteConfig.consultant.email}`} className="text-[var(--accent)] hover:underline">
                  {siteConfig.consultant.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-3">9. Contact</h2>
              <p>
                For any privacy-related queries, contact:
              </p>
              <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded p-4 mt-3">
                <p><strong>{siteConfig.consultant.name}</strong></p>
                <p>{siteConfig.consultant.company}</p>
                <p>{siteConfig.consultant.ren}</p>
                <p>
                  Email:{" "}
                  <a href={`mailto:${siteConfig.consultant.email}`} className="text-[var(--accent)] hover:underline">
                    {siteConfig.consultant.email}
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
