import { Technologies } from "@components/cv/work/technologies";

export type ISkill = {
  name: string;
  keywords: string[];
};

export function Skill(props: ISkill) {
  return (
    <div className="flex relative mb-2">
      <div className="mt-3 w-full">
        <div className="mb-2 text-lg text-center w-full my-4">
          <div className="transition-all block">{props.name}</div>

          <Technologies technologies={props.keywords} hideTitle={true} />
        </div>
      </div>
    </div>
  );
}
