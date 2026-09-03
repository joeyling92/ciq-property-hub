import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroEntrance from "@/components/HeroEntrance";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ciq-property.com"),
  title: {
    default: "CIQ Property Hub | JB CIQ & RTS Property Consultant",
    template: "%s | CIQ Property Hub",
  },
  description:
    "Explore selected residential developments around JB CIQ, RTS and the city centre, with clear project information and guidance from an independent property consultant.",
  keywords: [
    "Johor Bahru CIQ property",
    "JB CIQ property",
    "property near CIQ",
    "property near RTS",
    "JB City Centre property",
    "Bukit Chagar property",
    "Singapore commuter property",
    "JB property consultant",
  ],
  authors: [{ name: "CIQ Property Hub" }],
  creator: "CIQ Property Hub",
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://ciq-property.com",
    siteName: "CIQ Property Hub",
    title: "CIQ Property Hub | JB CIQ & RTS Property Consultant",
    description:
      "Explore selected residential developments around JB CIQ, RTS and the city centre with an independent property consultant.",
    images: [
      {
        url: "/hero-jb-night.jpg",
        width: 1920,
        height: 1080,
        alt: "Johor Bahru cityscape at night — aerial view",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CIQ Property Hub | JB CIQ & RTS Property Consultant",
    description: "Explore selected residential developments around JB CIQ, RTS and the city centre.",
    images: ["/hero-jb-night.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <HeroEntrance />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
