import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Consultoria de Software em ${site.baseCity} e região`,
    template: `%s · ${site.name}`,
  },
  description:
    "A Orvenz é uma consultoria de software que desenvolve sistemas e aplicativos sob medida para pequenas e médias empresas de Novo Horizonte-SP, Catanduva, Borborema, Itajobi, Itápolis, Sales e São José do Rio Preto.",
  keywords: [
    "consultoria de software",
    "desenvolvimento de sistemas",
    "software sob medida",
    "Novo Horizonte SP",
    "Catanduva",
    "São José do Rio Preto",
    "sistemas para pequenas empresas",
    "desenvolvimento de aplicativos",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Consultoria de Software em ${site.baseCity} e região`,
    description:
      "Sistemas e aplicativos sob medida para pequenas e médias empresas de Novo Horizonte-SP e região — do diagnóstico ao suporte contínuo.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Consultoria de Software`,
    description:
      "Sistemas e aplicativos sob medida para pequenas e médias empresas de Novo Horizonte-SP e região.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description:
    "Consultoria de software que cria sistemas e aplicativos sob medida para pequenas e médias empresas.",
  url: site.url,
  email: site.email,
  telephone: `+${site.whatsappNumber}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Novo Horizonte",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: site.cities.map((city) => ({
    "@type": "City",
    name: city,
  })),
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${workSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: ".reveal { opacity: 1 !important; transform: none !important; }",
            }}
          />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
