import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import { ThemeToggleButton } from "@components/navigation/themeToggleButton";
import { ThemeConstants } from "@services/theme/themeConstants";
import styles from "./navbar.module.scss";
import type { INavbarBlogArticle } from "@lib/blogEntries";
import { stripMdFromMarkdownFilename } from "@lib/blogEntries";
import classNames from "classnames";
import Link from "next/link";

interface IArticles {
  articles: INavbarBlogArticle[];
}

export function Navbar(props: IArticles) {
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
        <BlogMenuItem articles={props.articles} />
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

function BlogMenuItem(props: IArticles) {
  const [showBlogLinks, setShowBlogLinks] = useState(false);

  function onMouseEnter() {
    setShowBlogLinks(true);
  }

  function onMouseLeaveOrOnClick() {
    setShowBlogLinks(false);
  }

  return (
    <div
      className={classNames("mr-auto", ...navBoarder, styles.blog)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeaveOrOnClick}
      onClick={onMouseLeaveOrOnClick}
    >
      <div className={classNames("transition-colors", "z-40")}>Blog</div>

      <BlogLinks showBlogLinks={showBlogLinks} articles={props.articles} />
    </div>
  );
}

interface IBlogLinks extends IArticles {
  showBlogLinks: boolean;
}

function BlogLinks({ showBlogLinks, articles }: IBlogLinks) {
  // useEffect(() => {
  //   async function fetchBlogs() {
  //     const blogResponse: IBlogConfig[] = await getBlogEntries();
  //     setBlogs(() => blogResponse);
  //   }
  //   fetchBlogs();
  // }, []);

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
          "px-3",
          "overflow-clip",
          "-translate-x-6",
          "transition-all",
        )}
      >
        {articles.map((blog, index) => {
          return (
            <Link
              key={blog.title.replace(/\s/g, "")}
              href={`/blog/${stripMdFromMarkdownFilename(blog.title)}`}
            >
              <div
                className={classNames(
                  "border-b",
                  { "border-b-0 rounded-b": index === articles.length - 1 },
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
