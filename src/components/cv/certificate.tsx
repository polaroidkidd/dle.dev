import { StartEndDate } from "@components/cv/work/startEndDate";

export type ICertificate = {
  name: string;
  date: string;
  issuer: string;
};

export function Certificate({ date, issuer, name }: ICertificate) {
  return (
    <div className="flex relative mb-2">
      <div className="mt-3 w-full">
        <div className="mb-2 text-lg text-center w-full my-4">
          <div className="transition-all block">{name}</div>

          <div className="text-sm mb-4">&nbsp;awarded by &nbsp;{issuer}</div>
        </div>
      </div>

      <StartEndDate startDate={date} showEndDate={false} />
    </div>
  );
}
