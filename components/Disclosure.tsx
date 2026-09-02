import { siteConfig } from "@/lib/siteConfig";

export default function Disclosure({ developerName }: { developerName?: string }) {
  return (
    <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded p-5 text-sm">
      <div className="flex items-start gap-3">
        <div className="w-5 h-5 rounded-full bg-[var(--accent)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg className="w-3 h-3 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-[var(--text-primary)] mb-1">Independent Marketing Negotiator Disclosure</p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            This website is operated by <strong>{siteConfig.consultant.name}</strong>, an independent property
            marketing negotiator registered under <strong>{siteConfig.consultant.company}</strong> ({siteConfig.consultant.ren}).
            {developerName && (
              <> This is <strong>NOT</strong> the official website of <strong>{developerName}</strong> or their official sales gallery.</>
            )}
            {!developerName && (
              <> This website is not the official website of any developer or official project sales gallery.</>
            )}
            {" "}All project information is for general reference only and must be verified directly with the developer before any decision is made.
          </p>
        </div>
      </div>
    </div>
  );
}
