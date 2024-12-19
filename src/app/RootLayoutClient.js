"use client"; // Client Component

import { Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import Sidebar from "@/components/Sidebar/Sidebar";

const inter = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayoutClient({ children }) {
  return (
    <div className={inter.className}>
      <ThemeProvider>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
