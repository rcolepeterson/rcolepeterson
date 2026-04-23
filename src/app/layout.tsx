import "./globals.css";
import "./hamburgerMenu.css";
import { Inter } from "next/font/google";
import LenisProvider from "./components/LenisProvider";

const inter = Inter({ subsets: ["latin"] });
const title = "R. Cole Peterson — Maker & Creative Developer";
const desc =
  "Responsible for leading highly collaborative teams to create world-class digital products and experiences. I work closely with designers, product managers, strategists, and developers to concept, prototype, and execute on a range of products.";

export const metadata = {
  title: title,
  description: desc,
  metadataBase: new URL("https://rcolepeterson.com"),
  keywords: [
    "R. Cole Peterson",
    "Creative Developer",
    "Creative Technology",
    "AI",
    "Generative AI",
    "Agent Orchestration",
    "Full Stack Development",
    "VML",
    "Cannes Lions",
    "Portfolio",
  ],
  authors: [{ name: "R. Cole Peterson", url: "https://rcolepeterson.com" }],
  openGraph: {
    title: title,
    description: desc,
    url: "https://rcolepeterson.com/",
    siteName: title,
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "R. Cole Peterson — Maker & Creative Developer",
      },
    ],
  },
  twitter: {
    title: title,
    description: desc,
    card: "summary_large_image",
    creator: "@rcolepeterson",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Warmly lead tracking script */}
        <script
          id="warmly-script-loader"
          src="https://opps-widget.getwarmly.com/warmly.js?clientId=68df2b9ce770c96b150b920e4dbaed0a"
          defer
        />
      </head>
      <body className={inter.className}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
