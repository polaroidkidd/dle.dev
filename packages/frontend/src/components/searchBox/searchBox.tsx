import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import { fetchResults } from "@pages/api/search";
import styles from "./searchBox.module.scss";
import { SvgCloseIcon } from "@icons/CloseIcon";
import { SvgSearchIcon } from "@icons/SearchIcon";
import classNames from "classnames";
import debounce from "lodash.debounce";
import Link from "next/link";
import { useRouter } from "next/router";

export function SearchBox() {
  const router = useRouter();
  const [results, setResults] = useState<string[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery("");
    setResults([]);
  }, [router.asPath]);

  useEffect(() => {
    async function getResults() {
      const results = await fetchResults(query);
      setResults(results);
    }
    const debouncedGetResults = debounce(getResults, 250);
    if (query.length > 0) {
      debouncedGetResults();
    }
  }, [query]);

  useEffect(() => {
    if (query.length === 0) {
      setResults([]);
    }
  }, [query]);

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length < 30) {
      setQuery(event.target.value);
    }
  }

  function clearQuery() {
    setQuery("");
  }

  return (
    <>
      <DesktopSearchBar onChange={onChange} query={query} results={results} />
      <MobileSearchBar
        clearQuery={clearQuery}
        onChange={onChange}
        query={query}
        results={results}
      />
    </>
  );
}

interface ISearchBarProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;

  query: string;
  results: string[];
}

function DesktopSearchBar({ query, onChange, results }: ISearchBarProps) {
  return (
    <div className={classNames("hidden", "sm:inline-flex")}>
      <div
        className={classNames(
          "relative",
          "flex justify-center items-center my-auto",
          "border h-10  rounded border-red-300 ",
          "bg-transparent",
          "ml-3",
        )}
      >
        <div className="ml-2">
          <SvgSearchIcon />
        </div>
        <input
          className={classNames("bg-transparent", "pl-3", "outline-none")}
          type={"text"}
          name={"search"}
          onChange={onChange}
          value={query}
        />
      </div>
      {results.length > 0 && (
        <ol
          className={classNames(
            "absolute",
            "top-full",
            "left-1/2",
            "-translate-x-1/2",
            "mt-5",
            "bg-white",
            "dark:bg-neutral-800",
            "rounded-b",
            "min-w-min",
            "p-3",
            "bg-opacity-70",
            "backdrop-blur-2xl",
            "border",
            "border-red-300",
          )}
        >
          {results.map((result) => {
            return (
              <Link key={result} href={`/blog/${result}`}>
                <div
                  className={classNames(
                    "rounded",
                    "hover:bg-neutral-200",
                    "dark:hover:bg-neutral-700",
                    "cursor-pointer",
                    "p-2",
                    "px-4",
                    "mb-2",
                  )}
                >
                  {result
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </div>
              </Link>
            );
          })}
        </ol>
      )}
    </div>
  );
}

interface IMobileSearchBar extends ISearchBarProps {
  clearQuery: () => void;
}

function MobileSearchBar({
  query,
  onChange,
  results,
  clearQuery,
}: IMobileSearchBar) {
  const [shouldShowInput, setShouldShowInput] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    setShouldShowInput(false);
  }, [router.asPath]);

  function showInput() {
    document.querySelector("html")?.classList.add(styles.noScroll);
    setShouldShowInput(true);
  }

  function onBlurSearchBlur() {
    document.querySelector("html")?.classList.remove(styles.noScroll);
  }

  function closeSearch() {
    document.querySelector("html")?.classList.remove(styles.noScroll);
    setShouldShowInput(false);
    clearQuery();
  }

  return (
    <>
      <div
        onClick={showInput}
        className={classNames(
          "sm:hidden",
          "h-full w-fit px-4",
          "flex justify-center items-center",
          "my-auto",
          // light
          "border-x",
          "border-transparent",
          "border-opacity-80",
          "hover:border-red-300",
          "hover:border-opacity-30",
          "hover:border-x",
          // dark
          "dark:hover:bg-neutral-800",
          "hover:cursor-pointer",
        )}
      >
        <SvgSearchIcon />
      </div>
      {shouldShowInput && (
        <div className={classNames(styles.container)}>
          <div
            className={classNames(
              "absolute",
              "mt-3",
              "mr-3",
              "top-0",
              "right-0",
              "cursor-pointer",
            )}
          >
            <SvgCloseIcon onClick={closeSearch} />
          </div>
          {results.length > 0 && (
            <div
              className={classNames(
                "w-full",
                "absolute",
                "top-1/5",
                "left-1/2",
                "-translate-x-1/2",
                "-translate-y-1/5",
                "mt-10",
              )}
            >
              {results.map((result) => {
                return (
                  <Link key={result} href={`/blog/${result}`}>
                    <div
                      className={classNames(
                        "cursor-pointer",
                        "border-b",
                        "border-red-400",
                        "m-3",
                        "flex justify-center",
                        "p-1",
                        "hover:bg-white hover:bg-opacity-80",
                        "dark:hover:bg-neutral-700 hover:bg-opacity-80",
                        "rounded-t",
                        "text-center",
                      )}
                    >
                      <div>
                        {result
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
          )}
          <input
            className={classNames(
              "text-neutral-800",
              "dark:text-neutral-50",
              styles.input,
            )}
            placeholder={"begin search"}
            autoCorrect="off"
            autoComplete="off"
            type={"text"}
            name={"search"}
            onChange={onChange}
            value={query}
            onBlur={onBlurSearchBlur}
            tabIndex={0}
          />
        </div>
      )}
    </>
  );
}
