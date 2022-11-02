import classNames from "classnames";
import Link from "next/link";

interface IArticleCard {
  title: string;
  date: string;
}

export function ArticleCard({ date, title }: IArticleCard) {
  return (
    <Link href={`blog/${title}`}>
      <div
        className={classNames(
          "mb-12 p-4 ",
          "transition-all cursor-pointer",
          "bg-white",
          "flex flex-col justify-center items-start",
          "relative",
          "border",
          "rounded",
          "border-red-300",
          "drop-shadow-md",
          "hover:drop-shadow-lg",
          "border-x",

          // dark
          "dark:hover:border-red-200 dark:bg-neutral-800",
          "dark:border-transparent",
          "dark:hover:border-red-300",
          "dark:bg-neutral-800 dark:text-neutral-100",
        )}
      >
        <div className="font-bold text-lg ">
          {title
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </div>
        <div
          className={classNames(
            "p-1",
            "font-thin text-xs",
            "absolute -top-7 -right-0.5",
          )}
        >
          {new Date(date).toDateString()}
        </div>
      </div>
    </Link>
  );
}
