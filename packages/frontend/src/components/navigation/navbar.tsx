import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import { ThemeToggleButton } from "@components/navigation/themeToggleButton";
import { SearchBox } from "@components/searchBox/searchBox";
import styles from "./navbar.module.scss";
import type { INavbarBlogArticle } from "@lib/blogEntries";
import { stripMdFromMarkdownFilename } from "@utils/stringUtils";
import classNames from "classnames";
import Link from "next/link";

interface IArticles {
  articles: INavbarBlogArticle[];
}

export function Navbar(props: IArticles) {
  return (
    <nav
      className={classNames(
        "px-5",
        "mt-0",
        "min-w-max",
        "h-14",
        "transition-colors",
        "fixed",
        "top-0",
        "left-0",
        "right-0",
        "z-20",
        "border-b",
        "border-red-300",
        "drop-shadow-md",
        // background light
        "bg-opacity-20",
        "backdrop-blur-2xl",

        // background dark
        "dark:text-neutral-100",
        "dark:border-opacity-30",
      )}
    >
      <div
        className={classNames(
          "container",
          "max-w-6xl",
          "flex flex-row",
          "h-full",
          "justify-start",
        )}
      >
        <HomeLink />
        <BlogMenuItem articles={props.articles} />
        <SearchBox />
        <ThemeToggleButton />
      </div>
    </nav>
  );
}

const navBoarder = [
  "cursor-pointer",
  "transition-colors",
  "h-100",
  "flex",
  "flex-row",
  "items-center",
  "basis-24",
  "px-3",
  // light
  "border-x",
  "border-transparent",
  "border-opacity-80",
  "hover:border-red-300",
  "hover:border-opacity-30",
  "hover:border-x",
  // dark
  "dark:hover:bg-neutral-800",
];

function HomeLink() {
  return (
    <span className={classNames("justify-center", ...navBoarder)}>
      <Link href="/">Home</Link>
    </span>
  );
}

function BlogMenuItem(props: IArticles) {
  const [showBlogLinks, setShowBlogLinks] = useState(false);

  function onMouseLeaveOrOnClick() {
    setShowBlogLinks((ps) => !ps);
  }

  function hide() {
    setShowBlogLinks(false);
  }

  return (
    <div
      id="blog-navbar-item"
      className={classNames(
        "justify-center",
        "relative",
        ...navBoarder,
        styles.blog,
      )}
      onClick={onMouseLeaveOrOnClick}
      onMouseLeave={hide}
    >
      <div className={classNames("transition-colors", "z-40")}>Blog</div>

      <BlogLinks showBlogLinks={showBlogLinks} articles={props.articles} />
    </div>
  );
}

interface IBlogLinks extends IArticles {
  showBlogLinks: boolean;
}

const navBarBlogItemClasses = [
  "border-b",
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
];

function BlogLinks({ showBlogLinks, articles }: IBlogLinks) {
  const [animationProps] = useSpring(
    {
      config: {
        duration: 200,
      },
      maxHeight: showBlogLinks ? "100vh" : "0",
      overflow: "hidden",
    },
    [showBlogLinks],
  );

  if (articles && articles.length > 0) {
    return (
      <animated.div
        style={animationProps}
        className={classNames(
          "absolute",
          "top-full",
          "left-3",
          "px-3",
          "overflow-clip",
          "-translate-x-6",
          "transition-all",
          "min-w-max",
        )}
      >
        <Link href="/blog">
          <div className={classNames(...navBarBlogItemClasses)}>
            Article Archive
          </div>
        </Link>
        {articles.map((blog, index) => {
          return (
            <Link
              key={blog.title.replace(/\s/g, "")}
              href={`/blog/${stripMdFromMarkdownFilename(blog.title)}`}
            >
              <div
                className={classNames(
                  { "border-b-0 rounded-b": index === articles.length - 1 },
                  ...navBarBlogItemClasses,
                )}
              >
                {blog.title
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </div>
            </Link>
          );
        })}
      </animated.div>
    );
  }
  return null;
}
