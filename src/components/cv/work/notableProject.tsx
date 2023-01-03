import { Technologies } from "@components/cv/work/technologies";
import classNames from "classnames";

type IProject = {
  project: string;
  summary: string;
  highlights?: string[];
  technology?: string[];
  isLast: boolean;
};

export function NotableProject({
  project,
  summary,
  highlights,
  technology,
  isLast,
}: IProject) {
  return (
    <div
      className={classNames("pt-2 mb-4 pb-2", {
        "border-b border-b-red-100": !isLast,
      })}
    >
      <div className="mb-2">
        <span>Client: </span>
        <span className="font-normal">{project}</span>
      </div>

      <div className="pb-6">
        <p className="pb-6">{summary}</p>
        {highlights && (
          <>
            <div>Responsibilities</div>
            <ul>
              {highlights?.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <Technologies technologies={technology} />
    </div>
  );
}
