import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway, Caveat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OSE · Victoria Coach PNL",
  description:
    "Un accompagnement doux et personnalisé pour aider les femmes débordées à sortir de la procrastination, retrouver confiance et passer à l'action.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  openGraph: {
    title: "Accompagnement OSE · Victoria Coach PNL",
    description:
      "Un accompagnement doux et personnalisé pour aider les femmes débordées à sortir de la procrastination, retrouver confiance et passer à l'action.",
    type: "website",
    locale: "fr_FR",
    siteName: "Victoria Coach PNL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accompagnement OSE · Victoria Coach PNL",
    description:
      "Un accompagnement doux et personnalisé pour aider les femmes débordées à sortir de la procrastination, retrouver confiance et passer à l'action.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${raleway.variable} ${caveat.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
