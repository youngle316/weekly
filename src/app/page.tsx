import { allBlogs } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/Header";

export default function Home() {
  const blogs = allBlogs.sort((a, b) => {
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });

  return (
    <main className="mx-auto mb-12 w-full max-w-xl md:max-w-2xl lg:max-w-[62rem] 2xl:max-w-7xl">
      <Header />
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {blogs.map(({ title, publishedAt, summary, cover, href }) => {
          return (
            <Link
              href={`/posts/${href}`}
              key={title}
              className="relative mx-auto flex w-96 flex-col justify-center gap-3 overflow-hidden rounded-md pb-3 shadow shadow-primary/10 md:w-full"
            >
              <Image
                alt={title}
                src={cover}
                height={0}
                width={0}
                sizes="100vw"
                className="block h-52 w-full rounded-t-md object-cover md:h-48"
                priority
              />
              <div className="flex items-center justify-between px-3">
                <p>{title}</p>
                <p className="text-sm text-secondary-foreground">
                  {publishedAt}
                </p>
              </div>
              <p className="line-clamp-2 px-3 text-sm text-muted-foreground">
                {summary}
              </p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
