import { StartEndDate } from "./startEndDate";
import classNames from "classnames";

type IPosition = {
  company: string;
  location: string;
  position: string;
  url?: string;
  startDate: string;
  endDate?: string;
};

export function Position({
  position,
  url,
  company,
  startDate,
  endDate,
  location,
}: IPosition) {
  return (
    <div className="flex relative mb-2">
      <div className="mt-3 w-full">
        <div className="flex flex-col mb-2 text-lg text-center w-full my-4">
          {url ? (
            <a
              href={url}
              target="_blank"
              className={classNames(
                "transition-all",
                "text-red-600",
                "underline",
                "hover:text-red-400",
                "visited:text-red-600",
                "dark:hover:text-red-300",
                "dark:text-red-400",
              )}
              rel="noreferrer"
            >
              {company}
            </a>
          ) : (
            <div className="transition-all block">{company}</div>
          )}
          <span className="text-sm">&nbsp;in&nbsp;{location}</span>
          <div className="text-sm">{position}</div>
        </div>
      </div>

      <StartEndDate startDate={startDate} endDate={endDate} />
    </div>
  );
}
