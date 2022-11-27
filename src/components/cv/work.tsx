import classNames from "classnames";

export interface IWork {
  name: string;
  position: string;
  url?: string;
  startDate: string;
  summary?: string;
  highlights: string[];
  endDate?: string;
}

export function Work({
  endDate,
  highlights,
  name,
  position,
  startDate,
  summary,
  url,
}: IWork) {
  return (
    <div className={classNames("border rounded border-red-300", "mb-2 p-2")}>
      <div>name: {name}</div>
      <div>position: {position}</div>
      <div>url: {url}</div>
      <div>startDate: {startDate}</div>
      <div>summary: {summary}</div>
      <div>highlights: {highlights}</div>
      <div>endDate: {endDate}</div>
    </div>
  );
}
