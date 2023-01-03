import classNames from "classnames";

type IStartEndDate = {
  startDate: string;
  endDate?: string;
  showEndDate?: boolean;
};
function getEndDate(endDate?: string, showEndDate = true) {
  return showEndDate
    ? endDate
      ? ` - ${new Date(endDate).toLocaleDateString(undefined, {
          weekday: undefined,
          year: "numeric",
          month: "short",
        })}`
      : " - Today"
    : "";
}

export function StartEndDate({
  endDate,
  startDate,
  showEndDate = true,
}: IStartEndDate) {
  return (
    <div
      className={classNames("font-thin", "absolute -top-3 right-0", "text-sm")}
    >
      <div className="flex flex-row justify-end">
        <div className="min-w-max">
          {new Date(startDate).toLocaleDateString(undefined, {
            weekday: undefined,
            year: "numeric",
            month: "short",
          })}
          {getEndDate(endDate, showEndDate)}
        </div>
      </div>
    </div>
  );
}
