import { Nunito, Patrick_Hand } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
});

const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  weight: '400'
});

export const metadata = {
  title: "Pre Internado Médico UASD ─ Promoción 2025-20",
  description: "Página oficial de la promoción de pre-internos médicos del 2025-20 de la UASD",
  author: 'Omar Ureña Medina',
  openGraph: {
    title: "Pre Internado Médico UASD ─ Promoción 2025-20",
    description: "Página oficial de la promoción de pre-internos médicos del 2025-20 de la UASD",
    type: "website",
    locale: "es_DO",
    url: "https://preinternado.vercel.app/",
    site_name: "Pre Internado Médico UASD",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${nunito.variable} ${patrickHand.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
