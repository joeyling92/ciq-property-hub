import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/lib/projects";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import CIQConnectivity from "@/components/CIQConnectivity";
import LeadForm from "@/components/LeadForm";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQ from "@/components/FAQ";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: { absolute: project.metaTitle },
    description: project.metaDescription,
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      type: "website",
    },
    alternates: {
      canonical: `${siteConfig.url}/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const statusColors: Record<string, string> = {
    "Now Selling": "bg-green-100 text-green-800",
    "Coming Soon": "bg-blue-100 text-blue-800",
    "Under Construction": "bg-amber-100 text-amber-800",
    Completed: "bg-stone-100 text-stone-800",
  };

  return (
    <>

      {/* Hero */}
      <div className="h-1 bg-[var(--accent)]" />
      <section className="bg-[var(--bg-primary)] border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Properties", href: "/projects" },
              { label: project.name },
            ]}
          />
          <div className="mt-4 flex flex-wrap items-center gap-2 mb-4">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded ${statusColors[project.status] ?? "bg-gray-100 text-gray-800"}`}>
              {project.status}
            </span>
            <span className="text-xs text-[var(--text-muted)] uppercase tracking-widest">{project.location}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-3 max-w-3xl">
            {project.name}
          </h1>
          <p className="text-[var(--text-secondary)] text-lg mb-6 max-w-2xl">{project.tagline}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`${siteConfig.consultant.whatsappLink}?text=${encodeURIComponent(project.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Enquire on WhatsApp
            </a>
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-primary)] font-semibold px-6 py-3 rounded transition-colors duration-200"
            >
              Request Information
            </a>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-white border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-6">Project at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: "Developer", value: project.developer },
              { label: "Property Type", value: project.propertyType },
              { label: "Tenure", value: project.tenure },
              { label: "Status", value: project.status },
              { label: "Completion", value: project.completion },
              { label: "Total Units", value: `${project.totalUnits} units · ${project.floors} floors` },
              { label: "Price Range", value: project.priceRange },
              { label: "Est. Monthly", value: project.estimatedMonthly },
            ].map((fact) => (
              <div key={fact.label} className="bg-[var(--bg-secondary)] rounded p-3">
                <p className="text-xs text-[var(--text-muted)] mb-1">{fact.label}</p>
                <p className="text-xs font-semibold text-[var(--text-primary)] leading-snug">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content + sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Main content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Why This Project */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-5">
                Why This Project
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center flex-shrink-0 text-xs mt-0.5 font-bold">
                      {i + 1}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Facilities */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-5">Facilities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.facilities.map((f) => (
                  <div key={f} className="flex items-center gap-2 bg-[var(--bg-secondary)] rounded px-3 py-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
                    <span className="text-xs text-[var(--text-secondary)]">{f}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Unit Types */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-5">Unit Types</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--bg-secondary)] text-[var(--text-muted)] text-xs uppercase tracking-wider">
                      <th className="px-4 py-3 text-left font-semibold">Type</th>
                      <th className="px-4 py-3 text-left font-semibold">Size</th>
                      <th className="px-4 py-3 text-left font-semibold">Bedrooms</th>
                      <th className="px-4 py-3 text-left font-semibold">Bathrooms</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border)]">
                    {project.unitTypes.map((u, i) => (
                      <tr key={i} className="hover:bg-[var(--bg-secondary)] transition-colors duration-150">
                        <td className="px-4 py-3 font-medium text-[var(--text-primary)]">{u.type}</td>
                        <td className="px-4 py-3 text-[var(--text-secondary)]">{u.size}</td>
                        <td className="px-4 py-3 text-[var(--text-secondary)]">{u.bedrooms}</td>
                        <td className="px-4 py-3 text-[var(--text-secondary)]">{u.bathrooms}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[var(--text-muted)] mt-3">
                Unit information is subject to confirmation. Contact us for the latest available units and floor plans.
              </p>
            </section>

            {/* Location & Nearby */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-5">
                Location & Nearby
              </h2>
              <div className="space-y-3">
                {["Transport", "Attractions", "Healthcare", "Airports", "Shopping", "Education"].map((cat) => {
                  const places = project.nearbyPlaces.filter((p) => p.category === cat);
                  if (!places.length) return null;
                  return (
                    <div key={cat}>
                      <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">{cat}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {places.map((p) => (
                          <div key={p.name} className="flex items-center justify-between bg-[var(--bg-secondary)] rounded px-3 py-2">
                            <span className="text-xs text-[var(--text-secondary)]">{p.name}</span>
                            <span className="text-xs font-medium text-[var(--text-muted)] ml-2 text-right">{p.distance}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-xs text-[var(--text-muted)] mt-3">
                Distances are approximate. Please verify with mapping applications before making decisions.
              </p>
            </section>

            {/* Buyer Considerations */}
            <section className="bg-[var(--bg-secondary)] rounded p-6">
              <h2 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-4">
                Buyer Considerations
              </h2>
              <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Properties near JB CIQ are positioned in a zone of growing Singapore–JB connectivity.
                  However, every property decision should be based on individual financial circumstances,
                  intended use, and thorough due diligence.
                </p>
                <p>
                  We recommend verifying all project information directly with the developer or official
                  sales team, consulting a licensed financial advisor, and seeking independent legal advice
                  before committing to any purchase.
                </p>
                <p>
                  Foreign buyers (including Singapore citizens and PRs) should also confirm current
                  eligibility requirements and procedures with a qualified legal professional.
                </p>
              </div>
            </section>

            {/* Awards */}
            {project.awards && project.awards.length > 0 && (
              <section>
                <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-5">
                  Awards & Recognition
                </h2>
                <p className="text-xs text-[var(--text-muted)] mb-4">
                  Awards are presented to the developer by the respective bodies. This listing is for informational purposes only.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.awards.map((a, i) => (
                    <div key={i} className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded p-3">
                      <p className="text-xs font-semibold text-[var(--accent)] mb-1">{a.body}</p>
                      <p className="text-xs text-[var(--text-primary)] leading-snug">{a.award}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQ */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-5">
                Frequently Asked Questions
              </h2>
              <FAQ items={project.faq} />
            </section>

          </div>

          {/* Right: Sidebar */}
          <div className="space-y-6">
            {/* Sticky lead form wrapper */}
            <div className="sticky top-24" id="lead-form">
              <LeadForm projectName={project.name} />
            </div>
            <WhatsAppCTA message={project.whatsappMessage} projectName={project.name} />
            <p className="text-xs text-[var(--text-muted)] text-center px-2">
              Independent Marketing Negotiator · {siteConfig.consultant.name} · {siteConfig.consultant.ren}
            </p>

            {/* Other projects */}
            <div className="bg-[var(--bg-secondary)] rounded p-5">
              <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-3">
                More Properties
              </p>
              <div className="space-y-2">
                {projects
                  .filter((p) => p.slug !== project.slug)
                  .map((p) => (
                    <Link
                      key={p.slug}
                      href={`/projects/${p.slug}`}
                      className="block p-3 bg-white border border-[var(--border)] rounded hover:border-[var(--accent)] transition-colors duration-200"
                    >
                      <p className="text-xs font-semibold text-[var(--text-primary)]">{p.name}</p>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">{p.location}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CIQ Connectivity */}
      <CIQConnectivity projectName={project.name} ciqRelationship={project.ciqRelationship} />

      {/* Final CTA */}
      <section className="py-12 bg-[var(--bg-secondary)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-3">
            Interested in {project.name}?
          </h2>
          <p className="text-[var(--text-secondary)] text-sm mb-6">
            Contact our consultant for the latest unit availability, floor plans and current package.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`${siteConfig.consultant.whatsappLink}?text=${encodeURIComponent(project.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Enquire on WhatsApp
            </a>
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-primary)] font-semibold px-6 py-3 rounded transition-colors duration-200"
            >
              Send Enquiry Form
            </a>
          </div>
        </div>
      </section>

      <WhatsAppCTA
        message={project.whatsappMessage}
        variant="floating"
      />
    </>
  );
}
