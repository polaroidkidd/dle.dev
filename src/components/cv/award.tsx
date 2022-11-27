import classNames from "classnames";

export interface IAward {
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

export function Award({ awarder, date, summary, title }: IAward) {
  return (
    <div className={classNames("border rounded border-red-300", "mb-2 p-2")}>
      <h2>Award</h2>
      <div>title: {title} </div>
      <div>date: {date} </div>
      <div>awarder: {awarder} </div>
      <div>summary: {summary} </div>
    </div>
  );
}
