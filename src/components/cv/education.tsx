import classNames from "classnames";

export interface IEducation {
  institution: string;
  url: string;
  area: string;
  startDate: string;
  endDate: string;
  thesis?: string;
}

export function Education({
  area,
  endDate,
  institution,
  startDate,
  thesis,
  url,
}: IEducation) {
  return (
    <div className={classNames("border rounded border-red-300", "mb-2 p-2")}>
      {" "}
      <div>institution: {institution}</div>
      <div>url: {url}</div>
      <div>area: {area}</div>
      <div>startDate: {startDate}</div>
      <div>endDate: {endDate}</div>
      <div>thesis: {thesis}</div>
    </div>
  );
}
