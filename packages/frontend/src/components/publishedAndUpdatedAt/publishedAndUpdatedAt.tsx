import { ThemeConstants } from "@services/theme/themeConstants";
import classNames from "classnames";

export interface IPublishedAndUpdatedAt {
  publishedAt: number;
  updatedAt: number;
}

export function PublishedOrUpdatedAt({
  updatedAt,
  publishedAt,
}: IPublishedAndUpdatedAt): JSX.Element {
  const upd = new Date(updatedAt);
  const pub = new Date(publishedAt);

  if (upd.getDate() === pub.getDate()) {
    return (
      <div className={classNames("mt-auto", "mb-2", "mr-2", "flex", "flex-col", "items-end")}>
        <div className={classNames(ThemeConstants.PRIMARY_TEXT_COLOR, "text-sm")}>
          Created On {new Date(publishedAt).toDateString()}
        </div>
      </div>
    );
  }

  return (
    <div className={classNames("mt-auto", "mb-10", "mr-2", "flex", "flex-col", "items-end")}>
      <div className={ThemeConstants.PRIMARY_TEXT_COLOR}>Published On: {pub.toDateString()}</div>
      <div className={ThemeConstants.PRIMARY_TEXT_COLOR}>Updated On: {upd.toDateString()}</div>
    </div>
  );
}
