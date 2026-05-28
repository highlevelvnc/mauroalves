import type { Metadata, Viewport } from "next";
import { Manrope, Work_Sans } from "next/font/google";
import "./globals.css";
import { RevealProvider } from "@/components/RevealProvider";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { CLIENT, AGENCY } from "@/lib/constants";

const display = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const body = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(AGENCY.websiteUrl),
  title: `Proposta · ${CLIENT.name} · ${AGENCY.name}`,
  description:
    "Conteúdo audiovisual e tráfego pago para a marca pessoal e os imóveis do Mauro Alves.",
  openGraph: {
    title: `Proposta · ${CLIENT.name}`,
    description:
      "Vídeo, social media e tráfego pago para captar clientes em imobiliária.",
    locale: "pt_PT",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#0b1830",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" className={`${display.variable} ${body.variable}`}>
      <body>
        <RevealProvider>{children}</RevealProvider>
        <WhatsAppFAB />
      </body>
    </html>
  );
}
