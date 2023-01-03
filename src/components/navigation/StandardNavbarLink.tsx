import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import classNames from "classnames";

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

type IStandardNavbarLink = {
  text: string;
  href: string;
};

export function StandardNavbarLink({ href, text }: IStandardNavbarLink) {
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
      data-cy={href}
    >
      {text}
    </Link>
  );
}
