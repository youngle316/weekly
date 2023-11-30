import React, { Fragment } from "react";
import Link from "next/link";
import { allBlogs, Blog } from "contentlayer/generated";

const Links = [
  { href: "/", title: "首页", blank: false },
  { href: "https://github.com/youngle316/weekly", title: "GitHub" },
  { href: "https://twitter.com/youngle316", title: "Twitter" },
];

function PageFooter({ post }: { post: Blog }) {
  const title = post.title.replace(/\s/g, "");
  const url = `https://github.com/youngle316/weekly/tree/main/content/${title}.md`;

  return (
    <div className="flex flex-col items-center justify-between gap-1.5 md:flex-row">
      <div>
        <span>发布日期：</span>
        <MyLink href={url} title={post.publishedAt} />
      </div>
      <div className="flex gap-2">
        {preAndNextPage(post).pre && (
          <MyLink
            href={`/posts/${preAndNextPage(post).pre.href}`}
            title="上一篇"
            blank={false}
          />
        )}
        {preAndNextPage(post).next && (
          <MyLink
            href={`/posts/${preAndNextPage(post).next.href}`}
            title="下一篇"
            blank={false}
          />
        )}
        <span className="text-yellow-700">|</span>
        {Links.map(({ href, title, blank }, index) => {
          return (
            <Fragment key={href}>
              <MyLink href={href} title={title} blank={blank} />
              {index !== Links.length - 1 && (
                <span className="text-yellow-700">|</span>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

const MyLink = ({
  href,
  title,
  blank = true,
}: {
  href: string;
  title: string;
  blank?: boolean;
}) => {
  return (
    <Link
      href={href}
      className="primary_link no-underline"
      target={blank ? "_blank" : "_self"}
    >
      {title}
    </Link>
  );
};

const preAndNextPage = (post: Blog) => {
  const index = allBlogs.findIndex((p) => p.href === post.href);
  const pre = allBlogs[index - 1];
  const next = allBlogs[index + 1];
  return { pre, next };
};

export default PageFooter;
