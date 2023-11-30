import { allBlogs } from "contentlayer/generated";
import type { Metadata } from "next";
import PostsContent from "@/app/posts/[slug]/PostsContent";
import { AUTHOR, HOME, KEYWORDS, TITLE, URL } from "@/lib/seo";
import Nav from "../Nav";

type Params = {
  slug: string;
};

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.href === params.slug);
  if (!post) {
    return;
  }

  const { title, summary: description, href, cover } = post;

  return {
    title: `${TITLE}${title}`,
    description,
    authors: { url: HOME, name: AUTHOR },
    keywords: KEYWORDS,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${URL}/posts/${href}`,
      siteName: TITLE,
      images: {
        url: cover,
      },
      locale: "zh-CN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${TITLE}${title}`,
      site: `${URL}/posts/${href}`,
      description,
      images: { url: cover },
    },
  };
}

export default async function Blog({ params }: { params: Params }) {
  return (
    <div className="flex-1 items-start md:grid md:grid-cols-[260px_minmax(0,1fr)] md:gap-6 2xl:mx-auto 2xl:max-w-screen-2xl">
      <aside className="top-0 hidden h-[100vh] w-full pt-6 md:sticky md:block">
        <Nav params={params} />
      </aside>

      <div className="prose prose-zinc mx-auto mb-3 flex-1 px-6 pb-16 pt-6 md:w-full md:max-w-2xl lg:max-w-[62rem] 2xl:max-w-7xl">
        <PostsContent params={params} />
      </div>
    </div>
  );
}
