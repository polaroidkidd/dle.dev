import { StartEndDate } from "./work/startEndDate";

export type IEducation = {
  institution: string;
  url: string;
  area: string;
  startDate: string;
  endDate: string;
  thesis?: string;
};

export function Education({
  area,
  endDate,
  institution,
  startDate,
  thesis,
  url,
}: IEducation) {
  return (
    <div className="flex relative mb-2">
      <div className="mt-3 w-full">
        <div className="mb-2 text-lg text-center w-full my-4">
          {url ? (
            <a
              href={url}
              target="_blank"
              className="transition-all block text-red-600 underline hover:text-red-400 visited:text-red-600 dark:hover:text-red-300 dark:text-red-400"
              rel="noreferrer"
            >
              {institution}
            </a>
          ) : (
            <div className="transition-all block">{institution}</div>
          )}
          <span className="text-sm">{area}</span>
          <Thesis thesis={thesis} />
        </div>
      </div>

      <StartEndDate startDate={startDate} endDate={endDate} />
    </div>
  );
}

function Thesis({ thesis }: { thesis?: string }) {
  if (!thesis) {
    return null;
  }

  return (
    <>
      <div className="py-2">Thesis</div>
      <div className="text-sm">{thesis}</div>
    </>
  );
}
