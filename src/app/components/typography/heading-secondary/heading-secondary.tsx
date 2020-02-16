import React from "react";
import "./heading-secondary.scss";
import classNames from "classnames";

type Props = {
  text: string
}

const HeadingSecondary: React.FC<Props> = ({text}) => {
  return (
    <h2 className={classNames("heading-secondary")}>{text}</h2>
  );
};
export default HeadingSecondary;