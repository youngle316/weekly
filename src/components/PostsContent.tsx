import React from "react";
import { Blog, allBlogs } from "contentlayer/generated";
import { Mdx } from "@/components/mdx";
import Comments from "./Comments";

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
    <div className="px-2">
      <p className="mb-6 text-3xl">{post.title}</p>
      <Mdx code={post.body.code} />
      <div className="mb-16 mt-5">
        <Comments />
      </div>
    </div>
  );
}

export default ArticleContent;
