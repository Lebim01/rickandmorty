"use client";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import InitAppData from "./containers/InitAppData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
          <InitAppData>{children}</InitAppData>
        </Provider>
      </body>
    </html>
  );
}
