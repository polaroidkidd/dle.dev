export type IProject = {
  name: string;
  description: string;
  summary?: string;
  startDate: string;
  keywords: string[];
  highlights: string[];
  entity?: string;
  type?: string;
};

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
    <>
      <div>name: {name}</div>
      <div>description: {description}</div>
      <div>summary: {summary}</div>
      <div>startDate: {startDate}</div>
      <div>keywords: {keywords}</div>
      <div>highlights: {highlights}</div>
      <div>entity: {entity}</div>
      <div>type: {type}</div>
    </>
  );
}
