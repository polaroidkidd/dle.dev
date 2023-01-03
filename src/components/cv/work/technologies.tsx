import { TechLogos } from "@icons/BrandIcons";
import { IconQuestionCircle } from "@icons/IconQuestionCircle";

export type ITechnologies = {
  technologies?: string[];
  hideTitle?: boolean;
};

export function Technologies({
  technologies,
  hideTitle = false,
}: ITechnologies) {
  if (!technologies) {
    return null;
  }

  return (
    <>
      {!hideTitle && <div className="pb-3">Technologies:</div>}

      <TechnologiesWithLogos technologies={technologies} />
    </>
  );
}

export function TechnologiesWithLogos({ technologies }: ITechnologies) {
  const logos = technologies?.map((tech, i) => {
    const brand = tech.replaceAll(" ", "-").toLowerCase();

    return TechLogos[brand] !== undefined ? (
      <div className="flex flex-row items-center py-2" key={i}>
        <div className="w-10 pr-2">{TechLogos[brand]}</div>
        <div className="pr-4">{tech}</div>
      </div>
    ) : (
      <div className="flex flex-row items-center py-2" key={i}>
        <IconQuestionCircle className="w-10 pr-2 stroke-red-500" />
        <div className="pr-4 text-center">{tech}</div>
      </div>
    );
  });

  return (
    <div className=" mx-auto flex flex-wrap max-w-4xl justify-center items-center">
      {logos}
    </div>
  );
}
