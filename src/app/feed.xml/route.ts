import { NextResponse } from "next/server";
import RSS from "rss";
import { allBlogs } from "contentlayer/generated";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";
import { URL, TITLE, DESC, AVATAR } from "@/lib/seo";

export async function GET() {
  const feed = new RSS({
    title: TITLE,
    description: DESC,
    site_url: URL,
    feed_url: `${URL}/feed.xml`,
    language: "zh-CN",
    image_url: AVATAR,
  });

  await allBlogs
    .sort((a, b) => {
      if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .map(async (post) => {
      const result = await remark()
        .use(remarkGfm)
        .use(remarkHtml)
        .process(post.body.raw);
      feed.item({
        title: post.title,
        url: `${URL}/posts/${post.href}`,
        date: post.publishedAt,
        description: result.value.toString(),
        enclosure: {
          url: post.cover,
        },
      });
    });
  return new NextResponse(feed.xml({ indent: true }), {
    status: 200,
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
