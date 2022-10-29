import { useEffect, useState } from "react";
import { ThemeToggleButton } from "@components/navigation/themeToggleButton";
import { ThemeConstants } from "@services/theme/themeConstants";
import styles from "./navbar.module.scss";
import type { IBlogConfig } from "@lib/blogEntries";
import { getBlogEntries, replaceWhitespaceWithDash } from "@lib/blogEntries";
import classNames from "classnames";
import Link from "next/link";

export function Navbar() {
  return (
    <nav
      className={classNames(
        "mx-5",
        "px-5",
        "mt-2",
        "min-w-max",
        "h-14",
        "transition-colors",
        "rounded",
        ThemeConstants.PRIMARY_TEXT_COLOR,
        "fixed",
        "top-0",
        "left-0",
        "right-0",
        "z-20",
        "border",
        // background
        "drop-shadow-lg",

        // background light
        "border-neutral-200",
        "border-opacity-80",
        "bg-opacity-20",
        "backdrop-blur-lg",

        // background dark
        "dark:border-gray-500",
        "dark:border-opacity-50",
        "dark:bg-opacity-20",
        "dark:backdrop-blur-lg",
      )}
    >
      <div className={classNames("container max-w-6xl", "flex", "h-full")}>
        <HomeLink />
        <BlogMenuItem />
        <ThemeToggleButton />
      </div>
    </nav>
  );
}

const navBoarder = [
  "cursor-pointer",
  "transition-colors",
  "hover:bg-neutral-100",
  "h-100",
  "flex",
  "justify-center",
  "flex-col",
  "dark:hover:bg-neutral-800",
  "px-3",
  "border-x",
  "border-transparent",
  "hover:border-neutral-200",
  "hover:border-x",
  "border-opacity-80",
  "hover:dark:border-gray-500",
  "hover:dark:border-opacity-50",
];

function HomeLink() {
  return (
    <span className={classNames(...navBoarder)}>
      <Link href="/">Home</Link>
    </span>
  );
}

function BlogMenuItem() {
  return (
    <div className={classNames("mr-auto", ...navBoarder, styles.blog)}>
      <div className={classNames("transition-colors", "z-40")}>Blog</div>

      <BlogLinks />
    </div>
  );
}

function BlogLinks() {
  const [blogs, setBlogs] = useState<IBlogConfig[]>([]);
  useEffect(() => {
    async function fetchBlogs() {
      const blogResponse: IBlogConfig[] = await getBlogEntries();
      setBlogs(() => blogResponse);
    }
    fetchBlogs();
  }, []);

  if (blogs.length > 0) {
    return (
      <div
        className={classNames(
          "absolute",
          "top-full",
          "px-3",
          styles.blogItems,
          "",
          "-translate-x-6",
        )}
      >
        {blogs.map((blog, index) => {
          return (
            <Link key={blog.url} href={`/blog/${replaceWhitespaceWithDash(blog.title)}`}>
              <div
                className={classNames(
                  "border-b",
                  { "border-b-0 rounded-b": index === blogs.length - 1 },
                  "p-2",
                  "transition-colors",
                  // light mode
                  "bg-neutral-100",
                  "bg-opacity-70",
                  "hover:bg-opacity-70",
                  "backdrop-blur-lg",
                  "hover:bg-gray-200",

                  // dark mode
                  "dark:border-gray-900",
                  "dark:border-opacity-5",
                  "dark:bg-neutral-900",
                  "dark:bg-opacity-70",
                  "dark:hover:bg-opacity-70",
                  "dark:backdrop-blur-lg",
                  "dark:hover:bg-gray-800",
                )}
              >
                {blog.title}
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
  return null;
}
