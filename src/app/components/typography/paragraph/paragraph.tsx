import React from "react";
import "./paragraph.scss";

type Props = {
  text: string
}

const Paragraph: React.FC<Props> = ({text}) => {
  return (
    <p className="paragraph">{text}</p>
  );
};
export { Paragraph };