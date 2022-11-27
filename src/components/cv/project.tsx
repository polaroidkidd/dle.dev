import classNames from "classnames";

export interface IProject {
  name: string;
  description: string;
  summary?: string;
  startDate: string;
  keywords: string[];
  highlights: string[];
  entity?: string;
  type?: string;
}

export function Project({
  description,
  entity,
  highlights,
  keywords,
  name,
  startDate,
  summary,
  type,
}: IProject) {
  return (
    <div className={classNames("border rounded border-red-300", "mb-2 p-2")}>
      <div>name: {name}</div>
      <div>description: {description}</div>
      <div>summary: {summary}</div>
      <div>startDate: {startDate}</div>
      <div>keywords: {keywords}</div>
      <div>highlights: {highlights}</div>
      <div>entity: {entity}</div>
      <div>type: {type}</div>
    </div>
  );
}
