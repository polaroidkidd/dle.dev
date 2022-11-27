import classNames from "classnames";

export interface ILanguage {
  language: string;
  fluency: string;
}

export function Language({ fluency, language }: ILanguage) {
  return (
    <div className={classNames("border rounded border-red-300", "mb-2 p-2")}>
      <div>language: {language}</div>
      <div>fluency: {fluency}</div>
    </div>
  );
}
