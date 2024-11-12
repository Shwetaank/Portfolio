import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/Navbar";
import { SparklesCore } from "@/components/ui/sparkles";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sin_Greed | Full Stack Developer Portfolio",
  description: "Portfolio of Shwetank Morey, a skilled Full Stack Developer.",
  keywords:
    "Full Stack Developer, Web Development, Portfolio, JavaScript, React, Node.js, Next.js",
  authors: [{ name: "Shwetank Morey" }],
  openGraph: {
    title: "Sin_Greed | Full Stack Developer",
    description:
      "Portfolio of Shwetank Morey showcasing web development skills.",
    url: "https://shwet-tech.com/",
    images: [
      {
        url: "/path-to-your-image.jpg",
        width: 800,
        height: 600,
        alt: "Portfolio preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sin_Greed | Full Stack Developer",
    description:
      "Check out my developer portfolio showcasing my skills and projects.",
    images: [
      {
        url: "/path-to-your-image.jpg",
        alt: "Portfolio preview image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* SparklesCore as a background effect */}
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1}
          maxSize={2}
          particleDensity={4}
          className="absolute inset-0 w-full h-full z-[-10]"
          particleColor="#FFFFFF"
        />
        {/* Main content wrapper */}
        <div className="relative z-10">
          <NavBar />
          <main className="flex-grow">{children}</main>
          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
