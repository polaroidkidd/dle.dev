import { IconSearch } from "@icons/IconSearch";
import classNames from "classnames";
import { IconClose } from "@icons/IconClose";
import type { MouseEvent } from "react";

type ISearchOrCloseIcon = {
  showMobileSearch: boolean;
  showClose: boolean;
  onClickSearch: (event: MouseEvent<SVGSVGElement>) => void;
};

export function SearchOrCloseIcon({
  showMobileSearch,
  onClickSearch,
  showClose,
}: ISearchOrCloseIcon) {
  return !showMobileSearch && !showClose ? (
    <IconSearch
      aria-label="search"
      className={classNames("ml-2 h-6 cursor-pointer", {
        "absolute top-2 right-2 z-20": showMobileSearch,
      })}
      onClick={onClickSearch}
      data-cy="search"
    />
  ) : (
    <IconClose
      aria-label="close"
      className={classNames("ml-2 h-6 cursor-pointer", {
        "absolute top-2 right-2 z-20": showMobileSearch,
      })}
      onClick={onClickSearch}
      data-cy="close"
    />
  );
}
