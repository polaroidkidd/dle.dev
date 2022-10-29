import type { ReactNode } from "react";
import { Navbar } from "@components/navigation/navbar";
import classNames from "classnames";

interface IContainer {
  children: ReactNode;
}

export function Container({ children }: IContainer) {
  return (
    <div className={classNames("container max-w-6xl mt-20 mb-32")}>
      <Navbar />
      <div className={classNames("container", "p-2", "z-10")}>{children}</div>
    </div>
  );
}
