import React from "react";
import Image from "next/image";
import { Blog, allBlogs } from "contentlayer/generated";
import { Mdx } from "@/components/mdx";

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

type Params = {
  slug: string;
};

function ArticleContent({ params }: { params: Params }) {
  const post = allBlogs.find((post) => post.href === params.slug) as Blog;
  return (
    <article className="px-2">
      <p className="mb-6 text-3xl">{post.title}</p>
      <Image
        alt={post.title}
        src={post.cover}
        height={0}
        width={0}
        sizes="100vw"
        className="mb-5 block h-auto w-full rounded-t-md object-cover"
        priority
      />
      <Mdx code={post.body.code} />
    </article>
  );
}

export default ArticleContent;
