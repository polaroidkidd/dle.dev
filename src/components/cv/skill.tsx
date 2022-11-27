import classNames from "classnames";

export interface ISkill {
  name: string;
  keywords: string[];
}

export function Skill(props: ISkill) {
  return (
    <div className={classNames("border rounded border-red-300", "mb-2 p-2")}>
      {" "}
      <div>name: {props.name}</div>
      <div>keywords: {props.keywords}</div>
    </div>
  );
}
