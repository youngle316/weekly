import { allBlogs } from "contentlayer/generated";
import type { Metadata } from "next";
import PostsContent from "@/components/PostsContent";
import { AUTHOR, HOME, KEYWORDS, TITLE, URL } from "@/lib/seo";

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
      images: [
        {
          url: cover,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${TITLE}${title}`,
      site: `${URL}/posts/${href}`,
      description,
      images: [cover],
    },
  };
}

export default async function Blog({ params }: { params: Params }) {
  return <PostsContent params={params} />;
}
