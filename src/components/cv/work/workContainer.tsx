import { Position } from "./position";
import { PositionSummary } from "./positionSummary";
import { Technologies } from "./technologies";

import type { INotableProject } from "./notableProjectsContainer";
import { NotableProjectsContainer } from "./notableProjectsContainer";

export type IWorkContainer = {
  notableProjects: INotableProject[];
  primaryTools: string[];
  technology: string[];
  name: string;
  position: string;
  url?: string;
  startDate: string;
  summary?: string;
  highlights?: string[];
  endDate?: string;
};

export function WorkContainer({
  endDate,
  highlights,
  name,
  position,
  startDate,
  summary,
  url,
  notableProjects,
  technology,
}: IWorkContainer) {
  const location = name.slice(name.indexOf(",") + 1, name.length);
  const company = name.slice(0, name.indexOf(","));
  return (
    <>
      <Position
        company={company}
        location={location}
        position={position}
        startDate={startDate}
        endDate={endDate}
        url={url}
      />

      <PositionSummary summary={summary} highlights={highlights} />
      <NotableProjectsContainer notableProjects={notableProjects} />
      <Technologies technologies={technology} />
    </>
  );
}
