import React from "react";
import Link from "next/link";
import { Ma_Shan_Zheng } from "next/font/google";
import ModelToggle from "@/components/ModelToggle";

const maFonts = Ma_Shan_Zheng({ subsets: ["latin"], weight: "400" });

export default function Header() {
  const navLink = [
    { name: "About Me", href: "https://xiaole.site" },
    { name: "GitHub", href: "https://github.com/youngle316" },
    { name: "RSS", href: "/feed.xml" },
  ];

  return (
    <header className="mx-auto mb-6 md:w-full md:max-w-2xl lg:max-w-[62rem] 2xl:max-w-7xl">
      <div className="mt-8 flex flex-col items-center md:items-start">
        <div className="text-4xl font-bold">
          <Link href="/" className={maFonts.className}>
            心迹逐影
          </Link>
        </div>

        <div className="text-muted-foreground">
          Tracing the Footsteps of the Heart
        </div>
      </div>
      <nav className="my-3 flex items-center justify-center gap-4 md:justify-end">
        {navLink.map(({ name, href }) => {
          return (
            <Link
              key={name}
              href={href}
              target="_blank"
              className="hover:underline"
            >
              {name}
            </Link>
          );
        })}
        <ModelToggle />
      </nav>
      <div className="mx-auto w-96 items-center border-[1px] border-solid border-zinc-800 md:w-full" />
    </header>
  );
}
