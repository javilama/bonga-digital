



import type { Metadata } from "next";
import {Header} from '../components/Header/Header';
import Footer from '../components/layout/Footer';
import { ScrollBar } from "@/components/ScrollProgress/ScrollBar";
import FloatWhatsAppBtn from "@/components/UI/FloatWhatsAppBtn";
import "./globals.css";


export const metadata: Metadata = {
  title: "Bonga Digital",
  description: "Creamos software innovador que impulsa tu crecimiento",
  openGraph: {
    title: "Bonga Digital",
    description: "Creamos software innovador que impulsa tu crecimiento",
    url: "/public/og-image.png",
    siteName: "Bonga Digital"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollBar />
        <Header />       
        {children}
        <Footer />
        <FloatWhatsAppBtn />
      </body>
    </html>
  );
}
