import type { ChangeEvent, MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { fetchResults } from "@pages/api/search";
import classNames from "classnames";
import debounce from "lodash.debounce";
import { useRouter } from "next/router";
import { IconLoading } from "@icons/IconLoading";
import { SearchResults } from "./searchResults";
import { useWindowSize } from "@hooks/useWindowSize";
import styles from "./searchBox.module.scss";
import { SearchOrCloseIcon } from "@components/searchBox/SearchOrCloseIcon";

export function SearchBox() {
  const router = useRouter();
  const [results, setResults] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const { width } = useWindowSize(250);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setQuery("");
    setResults([]);
    setShowMobileSearch(false);
  }, [router.asPath]);

  async function getResults() {
    const results = await fetchResults(query);
    setResults(results);
    setIsLoading(false);
  }

  useEffect(() => {
    const debouncedGetResults = debounce(getResults, 250);
    if (query.length > 2) {
      setIsLoading(true);
      debouncedGetResults();
    }
  }, [query]);

  useEffect(() => {
    if (query.length === 0) {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    setShowMobileSearch(
      width !== undefined && width <= 640 && results.length > 0,
    );
  }, [width]);

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setIsLoading(true);
    setQuery(event.target.value);
  }

  function onClickSearch(event: MouseEvent<SVGSVGElement>) {
    event.preventDefault();
    setQuery("");
    setResults([]);
    if (width !== undefined && width <= 640) {
      setShowMobileSearch((ps) => {
        if (ps) {
          document.querySelector("html")?.classList.remove(styles.noScroll);
        } else {
          document.querySelector("html")?.classList.add(styles.noScroll);
        }

        return !ps;
      });
    }
  }

  useEffect(() => {
    if (inputRef && inputRef.current && showMobileSearch) {
      inputRef.current.focus();
    }
  }, [showMobileSearch]);

  return (
    <div
      className={classNames("flex items-center my-auto sm:w-full", {
        [`z-10 fixed top-0 left-0 right-0 bottom-0 ${styles.mobileSearchContainer}`]:
          showMobileSearch,
      })}
      data-cy="searchOverlay"
    >
      <div
        className={classNames(
          "flex items-center w-full",
          "sm:border rounded border-red-300 ",
          "bg-transparent",
          "ml-3",
          "h-9",
        )}
      >
        <SearchOrCloseIcon
          showMobileSearch={showMobileSearch}
          showClose={results.length > 0}
          onClickSearch={onClickSearch}
        />
        <input
          className={classNames(
            "bg-transparent",
            "outline-none",
            "sm:h-full",
            "sm:w-full",
            "px-4",
            "sm:visible",
            "text-base",
            "rounded-none",
            {
              hidden: !showMobileSearch && width !== undefined && width <= 640,
            },
            {
              "visible absolute top-0 left-0 right-0 w-full text-center h-10 bg-white":
                showMobileSearch,
            },
          )}
          placeholder={"Quick Search"}
          type={"text"}
          name={"search"}
          onChange={onChange}
          value={query}
          size={1}
          ref={inputRef}
        />
        <IconLoading
          aria-label="loading"
          className={classNames(
            "fill-red-600 p-2 h-9 absolute top-0 left-0 md:static  z-100 h-10 md:h-9 ",
            {
              hidden: !isLoading,
            },
          )}
        />
      </div>
      <SearchResults results={results} />
    </div>
  );
}
