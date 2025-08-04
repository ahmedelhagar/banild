import type { Metadata } from "next";
// Poppins for English
import "@fontsource/poppins/300.css"; // Light
import "@fontsource/poppins/400.css"; // Regular
import "@fontsource/poppins/500.css"; // Medium
import "@fontsource/poppins/600.css"; // Semi Bold
import "@fontsource/poppins/700.css"; // Bold

// Cairo for Arabic
import "@fontsource/cairo/300.css"; // Light
import "@fontsource/cairo/400.css"; // Regular
import "@fontsource/cairo/500.css"; // Medium
import "@fontsource/cairo/600.css"; // Semi Bold
import "@fontsource/cairo/700.css"; // Bold

import "./globals.css";
import { LanguageProvider } from "@/lib/useLanguage";
import { DarkModeProvider } from "@/lib/useDarkMode";

export const metadata: Metadata = {
  title: "Banild AI - Multilingual Application",
  description: "AI application with English and Arabic support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DarkModeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
