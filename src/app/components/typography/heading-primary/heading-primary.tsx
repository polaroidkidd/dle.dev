import React from "react";
import "./heading-primary.scss";
import classNames from "classnames";

type Props = {
  text: string
}

const HeadingPrimary: React.FC<Props> = ({text}) => {
  return (
    <h1 className={classNames("heading-primary")}>{text}</h1>
  );
};
export { HeadingPrimary};