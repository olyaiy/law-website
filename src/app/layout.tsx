import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Harrison & Mitchell LLP | Chicago Law Firm | Legal Excellence Since 1998",
  description: "Chicago's trusted law firm specializing in personal injury, family law, corporate law, and criminal defense. Free consultation available. Call (312) 555-1234.",
  keywords: "Chicago law firm, personal injury lawyer, family law attorney, corporate law, criminal defense, Harrison & Mitchell LLP, legal services Chicago",
  authors: [{ name: "Harrison & Mitchell LLP" }],
  metadataBase: new URL('https://harrisonmitchell.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Harrison & Mitchell LLP | Chicago Law Firm",
    description: "Premier Chicago law firm offering comprehensive legal services. Personal injury, family law, corporate law, and more. Free consultation available.",
    url: 'https://harrisonmitchell.com',
    siteName: 'Harrison & Mitchell LLP',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Harrison & Mitchell LLP Chicago Law Office',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Harrison & Mitchell LLP | Chicago Law Firm",
    description: "Premier Chicago law firm offering comprehensive legal services. Personal injury, family law, corporate law, and more.",
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
