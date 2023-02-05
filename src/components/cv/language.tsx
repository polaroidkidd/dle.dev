export type ILanguage = {
  language: string;
  fluency: string;
};

export function Language({ fluency, language }: ILanguage) {
  return (
    <div className="flex relative mb-2">
      <div className="mt-3 w-full">
        <div className="mb-2 text-lg text-center w-full my-4">
          <div className="transition-all block">{language}</div>

          <div className="text-sm mb-4">{fluency}</div>
        </div>
      </div>
    </div>
  );
}
