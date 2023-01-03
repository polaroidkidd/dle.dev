import { ThemeToggleButton } from "@components/navigation/themeToggleButton";
import { SearchBox } from "@components/searchBox/searchBox";
import classNames from "classnames";
import styles from "./navbar.module.scss";
import { StandardNavbarLink } from "@components/navigation/StandardNavbarLink";

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
        "bg-opacity-20",

        // background dark
        "dark:text-neutral-100",
        "dark:border-opacity-30",
        "print:hidden",
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
        <StandardNavbarLink text="Blog" href="/blog" />
        <StandardNavbarLink text="CV" href="/cv" />
        <SearchBox />
        <ThemeToggleButton />
      </div>
    </nav>
  );
}
