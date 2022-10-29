import type { SectionTitleFragment } from "@types";

export function DynamicSectionTitle({
  chapterTitle,
  chapterNumber,
}: Pick<SectionTitleFragment, "chapterTitle" | "chapterNumber">): JSX.Element {
  return (
    <>
      <div>chapterTitle: {chapterTitle}</div>
      <div>chapterNumber: {chapterNumber}</div>
    </>
  );
}
