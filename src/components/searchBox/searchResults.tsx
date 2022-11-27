import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./searchBox.module.scss";
type IGroupedResults = Record<string, string[]>;
export function SearchResults({
  results,
}: {
  results: string[];
}): JSX.Element | null {
  const [groupedResults, setGroupedResults] = useState<IGroupedResults>({});

  useEffect(() => {
    const groups = results.reduce<IGroupedResults>((acc, curr) => {
      const [title, chapter] = curr.split("#");

      if (acc[title]) {
        acc[title].push(chapter);
      } else {
        acc[title] = [chapter];
      }
      return acc;
    }, {});

    setGroupedResults(groups);

    if (results.length !== 0) {
      document.querySelector("html")?.classList.add(styles.noScroll);
    } else {
      document.querySelector("html")?.classList.remove(styles.noScroll);
    }
  }, [results]);

  if (results.length === 0) {
    return null;
  }

  return (
    <div
      className={classNames(
        "fixed top-[40px] sm:top-[55px] left-0 h-screen w-screen backdrop-blur-lg flex flex-col",
      )}
    >
      <div
        className={classNames(
          "overflow-y-auto",
          "flex flex-col w-full",
          "mx-auto",
          "sm:mt-10",
          "w-full",
          "max-w-xl",
          "min-h-0",
          "sm:max-h-[calc(100vh_-_10rem)]",
          "bg-white dark:bg-neutral-900",
          "sm:border-x sm:border rounded shadow-2xl border-red-400",
        )}
      >
        <div
          className={classNames("flex-grow h-full min-h-fit overflow-y-auto")}
        >
          {Object.keys(groupedResults).map((blog, index, array) => {
            const isLastBlog = array.length - 1 === index;
            return (
              <div key={blog}>
                <h2 className="font-black px-5 pb-0">
                  {blog
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </h2>
                {groupedResults[blog].map((chapter, i, a) => {
                  const isLastChapter = a.length - 1 === i && isLastBlog;

                  return (
                    <Link
                      key={chapter}
                      href={`/blog/${blog}#${chapter.replace(/--/g, "-")}`}
                    >
                      <div
                        className={classNames(
                          "cursor-pointer",
                          { "border-b": !isLastChapter },
                          "border-red-400",
                          "flex",
                          "p-4",
                          "hover:bg-white hover:bg-opacity-80",
                          "dark:hover:bg-neutral-700 hover:bg-opacity-80",
                          "rounded-t",
                          "pl-10 pr-5",
                          "h-full",
                          "transition-colors",
                        )}
                      >
                        <div>
                          {chapter
                            .replace(/[0-9]/g, "")
                            .split("-")
                            .map(
                              (word) =>
                                word.charAt(0).toUpperCase() + word.slice(1),
                            )
                            .join(" ")}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
