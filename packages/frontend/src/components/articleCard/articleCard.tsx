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
          "border-2 border-red-400 rounded-l rounded-br",
          "drop-shadow-sm hover:drop-shadow-md",
          "transition-all",
          "bg-white",
          "dark:bg-neutral-800 dark:text-neutral-100",
          "flex flex-col justify-center items-start",
          "relative",
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
            "border-x-2 border-t-2 border-red-400 rounded-t",
            "absolute -top-7 -right-0.5",
            "bg-white",
            "dark:bg-neutral-800 dark:text-neutral-100",
          )}
        >
          {new Date(date).toDateString()}
        </div>
      </div>
    </Link>
  );
}
