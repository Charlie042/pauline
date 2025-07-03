import type { Metadata } from "next";
import { Geist, Geist_Mono,Bodoni_Moda} from "next/font/google";
import Footer from "@/components/footer";
import "./globals.css";
import NavBar from "@/components/nav-bar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pauline's Art",
  description: "Art by Pauline",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bodoniModa.variable} antialiased flex flex-col min-h-screen`}
      >
        <header>
          <NavBar />
        </header>

        <main className="flex-grow">{children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
