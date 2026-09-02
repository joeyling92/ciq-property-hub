import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import PropertyCard from "@/components/PropertyCard";
import Breadcrumb from "@/components/Breadcrumb";
import Disclosure from "@/components/Disclosure";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata: Metadata = {
  title: "CIQ Properties | All Projects Near JB CIQ & RTS",
  description:
    "Browse selected residential developments near JB CIQ, Bukit Chagar RTS and Johor Bahru City Centre. Independent property consultant guidance.",
  openGraph: {
    title: "CIQ Properties | All Projects Near JB CIQ & RTS",
    description: "Browse selected residential developments near JB CIQ, Bukit Chagar RTS and Johor Bahru City Centre.",
  },
};

export default function ProjectsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[var(--bg-dark)] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Properties" }]} />
          <h1 className="font-serif text-4xl font-bold text-white mt-4 mb-3">
            CIQ Area Properties
          </h1>
          <p className="text-white/60 max-w-2xl">
            Selected residential developments around JB CIQ, RTS and Johor Bahru City Centre.
            Each project is presented with verified information from an independent property consultant.
          </p>
        </div>
      </section>

      {/* Operator disclosure visible immediately */}
      <div className="bg-[var(--bg-secondary)] border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-xs text-[var(--text-muted)]">
            This page is operated by an independent property consultant. Project information is for general
            reference only and is not from the official developer. Verify all details before making decisions.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <PropertyCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-10 bg-[var(--bg-secondary)] rounded p-5 text-sm text-[var(--text-secondary)]">
            <p className="font-semibold text-[var(--text-primary)] mb-1">Looking for a specific project?</p>
            <p>
              If you are looking for a project in the JB CIQ area that is not listed here, contact us —
              we may be able to provide information or guidance based on your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 bg-[var(--bg-secondary)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <WhatsAppCTA
            message="Hi, I'm browsing your property listings near JB CIQ. Could you help me identify the most suitable project for my needs?"
          />
        </div>
      </section>

      <section className="py-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Disclosure />
        </div>
      </section>

      <WhatsAppCTA
        message="Hi, I'm looking at properties near JB CIQ. Could you advise me on the available options?"
        variant="floating"
      />
    </>
  );
}
