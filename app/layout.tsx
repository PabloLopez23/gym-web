import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://matosgym.netlify.app";
const siteName = "MATOS GYM";
const seoTitle = "MATOS GYM | Gimnasio en Saladas, Corrientes";
const seoDescription =
  "Entrenamiento grupal, personalizado y online en MATOS GYM. Gimnasio en Avenida Pujol 1741, Saladas, Corrientes.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: seoTitle,
    template: `%s | ${siteName}`
  },
  description: seoDescription,
  keywords: [
    "MATOS GYM",
    "gimnasio en Saladas",
    "gimnasio Corrientes",
    "entrenamiento grupal",
    "entrenamiento personalizado",
    "asesoramiento online",
    "Avenida Pujol 1741"
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: "/",
    siteName,
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/assets/optimized/hero-1.webp",
        alt: "MATOS GYM, gimnasio en Saladas Corrientes"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: ["/assets/optimized/hero-1.webp"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  category: "fitness",
  manifest: "/manifest.webmanifest"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05060a",
  colorScheme: "dark light"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
