import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loot",
  description: "Best ticketing app in internet",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  );
}
