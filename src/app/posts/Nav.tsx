import React from "react";
import Link from "next/link";
import Image from "next/image";
import { allBlogs } from "contentlayer/generated";
import { ScrollArea } from "@/components/ui/scroll-area";

type Params = {
  slug: string;
};

function Nav({ params }: { params: Params }) {
  const blogs = allBlogs.sort((a, b) => {
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });
  return (
    <>
      <div className="mx-2 pl-6 text-3xl font-medium leading-none">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/feed.jpg"
            alt="logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span>心迹逐影</span>
        </Link>
      </div>

      <ScrollArea className="relative mt-6 h-full overflow-hidden pl-8">
        <div className="flex flex-col gap-[10px] p-2 pb-32">
          {blogs.map(({ title, href }) => (
            <div key={title}>
              <Link
                href={`/posts/${href}`}
                className={`cursor-pointer text-lg ${
                  params.slug === href
                    ? "text-link"
                    : "hover:text-link hover:underline hover:underline-offset-4"
                }`}
              >
                {title}
              </Link>
            </div>
          ))}
        </div>
      </ScrollArea>
    </>
  );
}

export default Nav;
