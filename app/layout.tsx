import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta', 
});

export const metadata: Metadata = {
  title: "Macord International School | Bilingual Excellence",
  description: "British Cambridge & French National Curriculum School in Madina, Accra.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} font-sans antialiased`}>
        {/* Everything inside LanguageProvider can access useLanguage() */}
        <LanguageProvider>
          
          <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
              {children}
            </div>
            <Footer />
          </div>
          
        </LanguageProvider>
      </body>
    </html>
  );
}