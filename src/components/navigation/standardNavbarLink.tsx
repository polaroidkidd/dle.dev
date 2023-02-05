import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import classNames from "classnames";

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
      className={classNames(
        "text-xl",
        "h-14",
        "py-2",
        "justify-center uppercase",
        "cursor-pointer",
        "transition-all",
        "h-100",
        "flex",
        "flex-row",
        "items-center",
        "px-5",
        "border-transparent",
        "border-opacity-80",
        "hover:border-red-300",
        "hover:border-opacity-50",
        "dark:hover:bg-neutral-800",
        "border-b",
        {
          "border-b-2 sm:border-b-4 border-b-red-500": isAt,
        },
      )}
      data-cy={href}
    >
      {text}
    </Link>
  );
}
