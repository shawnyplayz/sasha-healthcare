import { Poppins } from "next/font/google";
import "./globals.css";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/navbar/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Sasha HealthCare",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
