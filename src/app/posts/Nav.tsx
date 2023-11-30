import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { allBlogs } from "contentlayer/generated";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

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

      <ScrollArea className="relative mt-4 h-full overflow-hidden pl-8 pr-6">
        <div className="p-2 pb-32">
          {blogs.map(({ title, href }) => (
            <Fragment key={title}>
              <Link
                href={`/posts/${href}`}
                className={`cursor-pointer text-lg ${
                  params.slug === href
                    ? "text-yellow-700"
                    : "hover:text-yellow-600"
                }`}
              >
                {title}
              </Link>
              <Separator className="my-1" />
            </Fragment>
          ))}
        </div>
      </ScrollArea>
    </>
  );
}

export default Nav;
