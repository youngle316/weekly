"use client";

import Giscus from "@giscus/react";
import {
  giscusRepo,
  giscusRepoId,
  giscusCategory,
  giscusCategoryId,
} from "@/lib/giscus";
import { useTheme } from "next-themes";

function Comments() {
  const { resolvedTheme } = useTheme();

  return (
    <div id="comment" className="mx-auto w-full">
      <Giscus
        repo={giscusRepo}
        repoId={giscusRepoId}
        category={giscusCategory}
        categoryId={giscusCategoryId}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={
          resolvedTheme === "dark" ? "dark_tritanopia" : "light_tritanopia"
        }
        loading="lazy"
        lang="zh-CN"
      />
    </div>
  );
}

export default Comments;
