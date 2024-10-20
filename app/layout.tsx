import type { Metadata } from "next";
import "./globals.css";
import {Arima} from "next/font/google"


export const metadata: Metadata = {
  title: "Aditya 🚀",
  description: "Hii, I am Aditya Singh, A Full Stack Developer, I did GSOC 2023 at Rocket.Chat, I am a Tech Enthusiast, I love to work on Open Source Projects, I am a Blogger, I write about Tech, Programming, and Life.",
};

const arima = Arima({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${arima.className} bg-white text-black p-10`}
      >
        {children}
      </body>
    </html>
  );
}
