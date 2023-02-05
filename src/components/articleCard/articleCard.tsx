import classNames from "classnames";
import Link from "next/link";

type IArticleCard = {
  title: string;
  date: string;
  isLast?: boolean;
};

export function ArticleCard({ date, title, isLast = false }: IArticleCard) {
  return (
    <Link href={`blog/${title}`}>
      <div
        className={classNames(
          { "mb-12": !isLast },
          " p-4",
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
          "dark:bg-neutral-800",
        )}
      >
        <div className="text-lg ">
          {title
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </div>
        <div
          className={classNames("p-1", "text-xs", "absolute -top-7 -right-0.5")}
        >
          {new Date(date).toDateString()}
        </div>
      </div>
    </Link>
  );
}
