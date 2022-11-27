import { ThemeToggleButton } from "@components/navigation/themeToggleButton";
import { SearchBox } from "@components/searchBox/searchBox";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
export function Navbar() {
  return (
    <nav
      className={classNames(
        "px-5",
        "mt-0",
        "min-w-max",
        "h-10 sm:h-14",
        "transition-colors",
        "fixed",
        "top-0",
        "left-0",
        "right-0",
        "z-20",
        "border-b",
        "border-red-300",
        "text-base sm:text-xl",
        // "drop-shadow-md",
        // background light
        "bg-opacity-20",
        // "backdrop-blur-2xl",

        // background dark
        "dark:text-neutral-100",
        "dark:border-opacity-30",
        styles.navbarContainer,
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
        <StandardNavbarLink text="Home" href="/" />
        {/*<StandardNavbarLink text="About" href="/about" />*/}
        <StandardNavbarLink text="Blog" href="/blog" />
        <SearchBox />
        <ThemeToggleButton />
      </div>
    </nav>
  );
}

const navBoarder = [
  "cursor-pointer",
  "transition-all",
  "h-100",
  "flex",
  "flex-row",
  "items-center",
  // "basis-24",
  "px-5",
  // light
  // "border-x",
  "border-transparent",
  "border-opacity-80",
  "hover:border-red-300",
  "hover:border-opacity-50",
  "hover:border-b-4",
  // dark
  "dark:hover:bg-neutral-800",
  "border-b-4",
  "border-white",
];

interface IStandardNavbarLink {
  text: string;
  href: string;
}

function StandardNavbarLink({ href, text }: IStandardNavbarLink) {
  const router = useRouter();

  const [isAt, setIsAt] = useState(false);
  useEffect(() => {
    setIsAt(router.asPath === href);
  }, [href, router.asPath]);

  return (
    <Link
      href={href}
      className={classNames("justify-center", ...navBoarder, {
        "border-b-4 border-b-red-500": isAt,
      })}
    >
      {text}
    </Link>
  );
}
