import { NotableProject } from "./notableProject";

export type INotableProject = {
  project: string;
  summary: string;
  highlights?: string[];
  technology?: string[];
};
type INotableProjectsContainer = {
  notableProjects: INotableProject[];
};

export function NotableProjectsContainer({
  notableProjects,
}: INotableProjectsContainer) {
  if (!notableProjects) {
    return null;
  }

  return (
    <>
      <h2 className="block border-b border-b-red-100 mb-2 pb-0">
        Notable Projects
      </h2>
      {notableProjects.map(
        ({ project, technology, highlights, summary }, index) => (
          <NotableProject
            project={project}
            summary={summary}
            highlights={highlights}
            technology={technology}
            key={index}
            isLast={index === notableProjects.length - 1}
          />
        ),
      )}
    </>
  );
}
