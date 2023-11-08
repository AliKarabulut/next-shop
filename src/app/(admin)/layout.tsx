import './global.css';
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce",
  description: "E-commerce",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
