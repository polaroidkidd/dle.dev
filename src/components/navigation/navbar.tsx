import { ThemeToggleButton } from "@components/navigation/themeToggleButton";
import { SearchBox } from "@components/searchBox/searchBox";
import classNames from "classnames";
import styles from "./navbar.module.scss";
import { StandardNavbarLink } from "@components/navigation/standardNavbarLink";
import { IconHamburger } from "@icons/IconHamburger";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useWindowSize } from "@hooks/useWindowSize";
import { IconClose } from "@icons/IconClose";

export function Navbar() {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  const router = useRouter();
  useEffect(() => {
    setIsMenuHidden(true);
  }, [router.asPath]);

  const toggleMenu = useCallback(() => {
    setIsMenuHidden((ps) => !ps);
  }, []);

  const { width } = useWindowSize(250);
  const [shouldShowTheme, setShouldShowTheme] = useState<boolean | undefined>(
    undefined,
  );

  useEffect(() => {
    if (width) {
      setShouldShowTheme(width >= 640);
    }
  }, [width]);
  return (
    <nav
      className={classNames(
        "px-5",
        "mt-0",
        "min-w-max",
        "h-12 sm:h-14",
        "transition-colors",
        "fixed",
        "top-0",
        "left-0",
        "right-0",
        "z-50",
        "text-base sm:text-xl",
        "bg-opacity-20",
        "border-b",
        "border-red-300",
        "dark:text-neutral-100",
        "dark:border-opacity-30",
        "print:hidden",
        styles.navbarContainer,
      )}
    >
      {/*DESKTOP NAVBAR*/}
      <div
        className={classNames(
          "hidden",
          "sm:container",
          "sm:max-w-6xl",
          "sm:flex sm:flex-row",
          "sm:h-full",
          "sm:justify-start",
        )}
      >
        <StandardNavbarLink text="Home" href="/" />
        <StandardNavbarLink text="Blog" href="/blog" />
        <StandardNavbarLink text="CV" href="/cv" />
        <SearchBox />
        {shouldShowTheme && <ThemeToggleButton />}
      </div>

      {/*MOBILE NAVBAR*/}
      <div
        className={classNames(
          "flex",
          "flex-row",
          "justify-between",
          "sm:hidden",
          "-mx-5",
          "px-2",
          "w-screen",
          "border-b",
          "border-red-300",
          "h-12",
        )}
      >
        <ThemeToggleButton />
        <SearchBox />
        <div className="flex items-center ml-auto hover:cursor-pointer">
          {isMenuHidden ? (
            <IconHamburger width={25} onClick={toggleMenu} />
          ) : (
            <IconClose width={25} onClick={toggleMenu} />
          )}
        </div>

        <div
          className={classNames(
            "transition-transform ease-in-out",
            "absolute",
            "left-0 right-0",
            "-z-10",
            styles.frostedGlassGradient,
            isMenuHidden ? "-translate-y-[10rem]" : "translate-y-[40px]",
          )}
        >
          <StandardNavbarLink text="Home" href="/" />
          <StandardNavbarLink text="Blog" href="/blog" />
          <StandardNavbarLink text="CV" href="/cv" />
        </div>
      </div>
    </nav>
  );
}
