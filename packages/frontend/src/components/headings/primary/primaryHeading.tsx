import React from "react";
import { ThemeConstants } from "@services/theme/themeConstants";

export function PrimaryHeading({ text }: { text: string }): JSX.Element {
  return <h1 className={ThemeConstants.PRIMARY_TEXT_COLOR}>{text}</h1>;
}
