import type { Metadata } from "next";

import "./globals.css";

import ThemeProvider from "@/components/providers/ThemeProvider";
import { ChatProvider } from "@/context/ChatContext";

export const metadata: Metadata = {
  title: "Industrial L&D Assistant",
  description:
    "AI-Powered Learning & Development Platform for Industrial Workforce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body
        className="
          min-h-screen
          bg-slate-50
          text-slate-900
          dark:bg-slate-950
          dark:text-white
          transition-colors
          duration-300
        "
      >
        <ThemeProvider>
          <ChatProvider>
            {children}
          </ChatProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
