import React from "react";
import { Blog, allBlogs } from "contentlayer/generated";
import { Mdx } from "@/components/mdx";
import Comments from "@/components/Comments";
import PageFooter from "./PageFooter";
import { Separator } from "@/components/ui/separator";

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
    <>
      <p className="mb-6 text-3xl">{post.title}</p>
      <Mdx code={post.body.code} />
      <Separator className="my-8" />
      <PageFooter post={post} />
      <div className="mt-5">
        <Comments />
      </div>
    </>
  );
}

export default ArticleContent;
