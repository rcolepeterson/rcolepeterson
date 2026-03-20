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
  openGraph: {
    title: title,
    description: desc,
    url: "https://rcolepeterson.com/",
    siteName: title,
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: title,
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
