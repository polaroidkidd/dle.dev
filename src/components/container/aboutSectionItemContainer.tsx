import classNames from "classnames";
import type { ReactNode } from "react";

export function AboutSectionItemContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className={classNames("border-b border-red-300 pb-12 pt-6")}>
      {children}
    </div>
  );
}
