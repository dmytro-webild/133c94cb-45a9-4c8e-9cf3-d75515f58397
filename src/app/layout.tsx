import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = { title: 'Lemonde Kuzu Effect | Premium Casual Dining in Çankaya, Ankara', description: 'Experience refined lamb specialties, artisanal desserts, and a warm, inviting atmosphere in the heart of Çankaya. Your premium casual dining destination.', openGraph: { title: 'Lemonde Kuzu Effect | Premium Casual Dining in Çankaya, Ankara', description: 'Experience refined lamb specialties, artisanal desserts, and a warm, inviting atmosphere in the heart of Çankaya.', type: 'website', locale: 'en_US' } };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
