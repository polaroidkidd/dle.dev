import type { ReactNode } from "react";
import classNames from "classnames";

type IContainer = {
  children: ReactNode;
};

export function Container({ children }: IContainer) {
  return <div className={classNames("container px-5")}>{children}</div>;
}
