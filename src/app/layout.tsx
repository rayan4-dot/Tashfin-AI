import type { Metadata } from "next";
import { Inter, Space_Grotesk, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tashfin AI IDE | The First Sovereign Moroccan AI Code Editor",
  description:
    "Tashfin AI IDE is the secure, 100% sovereign Moroccan AI code editor. Compliant with CNDP Law 09-08 and GDPR, runs entirely offline or on private Moroccan cloud infrastructure.",
  keywords:
    "AI IDE, Morocco tech, sovereign AI, CNDP compliance, offline AI, Cursor alternative Morocco, CMI payment API, Darija coding",
  openGraph: {
    title: "Tashfin AI IDE | The First Sovereign Moroccan AI Code Editor",
    description:
      "100% secure. 100% sovereign. Keep your IP within borders. Built for Moroccan banks, nearshore firms & developers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${firaCode.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
