import React from "react";
import "./paragraph.scss";
import classNames from "classnames";

type Props = {
  text: string,
  additionalStyles?: string
}

const Paragraph: React.FC<Props> = ({text, additionalStyles}) => {
  return (
    <p className={classNames("paragraph", additionalStyles ? additionalStyles : "")}>{text}</p>
  );
};


export { Paragraph };