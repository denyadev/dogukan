import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adasa Moving and Transportation",
  description:
    "Adasa Moving and Transportation, a recently established family-owned and operated business, proudly presents a rich 15-year history specializing in local moving services across Toronto and the Greater Toronto Area (GTA)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <GoogleAnalytics gaId="AW-11467367917" />
      </body>
    </html>
  );
}
