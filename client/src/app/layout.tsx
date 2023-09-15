import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Loot",
  description: "Best ticketing app in internet",
};

const poppins = Poppins({ weight: ["400", "600", "900"], subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className={`mx-auto container ${poppins.className}`}>{children}</div>
      </body>
    </html>
  );
}
