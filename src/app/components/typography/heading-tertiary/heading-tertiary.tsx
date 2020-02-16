import React from "react";
import "./heading-tertiary.scss";
import classNames from "classnames";

type Props = {
  text: string
}

const HeadingTertiary: React.FC<Props> = ({text}) => {
  return (
    <h3 className={classNames("heading-tertiary")}>{text}</h3>
  );
};
export { HeadingTertiary };