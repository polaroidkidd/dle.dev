import type { HTMLAttributes } from "react";
import type { TextFragment } from "@types";

export function DynamicText({
  text,
  ...props
}: Pick<TextFragment, "text"> & HTMLAttributes<HTMLDivElement>): JSX.Element {
  return <div className={props.className}>{text}</div>;
}
