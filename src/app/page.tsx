import { allBlogs } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {allBlogs.map(({ title, publishedAt, summary, cover, href }) => {
          return (
            <Link
              href={`/posts/${href}`}
              key={title}
              className="relative mx-auto flex w-96 flex-col justify-center gap-3 overflow-hidden rounded-b-md pb-3 shadow-md md:w-full"
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
              <div className="flex justify-between px-3">
                <p className="text-zinc-800/90">{title}</p>
                <p className="text-sm text-zinc-700/90">{publishedAt}</p>
              </div>
              <p className="line-clamp-2 px-3 text-sm text-zinc-600/90">
                {summary}
              </p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
