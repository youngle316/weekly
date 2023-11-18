import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import { TITLE, DESC, OGIMAGE, URL, AUTHOR, HOME, KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  authors: { url: HOME, name: AUTHOR },
  keywords: KEYWORDS,
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    url: URL,
    siteName: TITLE,
    images: [
      {
        url: OGIMAGE,
      },
    ],
    locale: "zh-CN",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    site: URL,
    description: DESC,
    images: [OGIMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/cn-fontsource-lxgw-wen-kai-gb-screen@1.0.6/font.min.css"
        />
      </head>
      <body className="font-wenkai">
        <div className="mx-auto w-full max-w-xl md:max-w-2xl lg:max-w-[62rem] 2xl:max-w-7xl">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
