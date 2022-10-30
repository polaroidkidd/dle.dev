import type { ReactNode } from "react";
import { Navbar } from "@components/navigation/navbar";
import type { INavbarBlogArticle } from "@lib/blogEntries";
import classNames from "classnames";

interface IContainer {
  children: ReactNode;
  articles: INavbarBlogArticle[];
}

export function Container({ children, articles }: IContainer) {
  return (
    <div className={classNames("container max-w-6xl mt-20 mb-32 md:mb-0")}>
      <Navbar articles={articles} />
      <div className={classNames("container", "p-2", "z-10")}>{children}</div>
    </div>
  );
}
