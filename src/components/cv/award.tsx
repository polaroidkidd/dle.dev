import { StartEndDate } from "./work/startEndDate";

export type IAward = {
  title: string;
  date: string;
  issuer: string;
  summary: string;
};

export function Award({ issuer, date, summary, title }: IAward) {
  return (
    <div className="flex relative mb-2">
      <div className="mt-3 w-full">
        <div className="mb-2 text-lg font-extralight text-center w-full my-4">
          <div className="transition-all block">{title}</div>

          <div className="text-sm mb-4">&nbsp;awarded by &nbsp;{issuer}</div>

          <div className="text-sm font-light">{summary}</div>
        </div>
      </div>

      <StartEndDate startDate={date} showEndDate={false} />
    </div>
  );
}
