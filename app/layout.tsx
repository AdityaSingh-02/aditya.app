import type { Metadata } from "next";
import "./globals.css";
import { Arima } from "next/font/google";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Aditya 🚀",
  description:
    "Hii, I am Aditya Singh, A Full Stack Developer, I did GSOC 2023 at Rocket.Chat, I am a Tech Enthusiast, I love to work on Open Source Projects, I am a Blogger, I write about Tech, Programming, and Life.",
};

const arima = Arima({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Aditya Singh software engineer</title>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <meta name="Aditya Singh" content="Aditya Singh software engineer" />
        <meta property="og:title" content="Aditya Singh" />
        <meta
          property="og:description"
          content="Aditya Singh software engineer"
        />
        <meta property="og:image" content="/Aditya.png" />
      </Head>
      <body className={`${arima.className} bg-white text-black p-5 md:p-10`}>
        {children}
      </body>
    </html>
  );
}
