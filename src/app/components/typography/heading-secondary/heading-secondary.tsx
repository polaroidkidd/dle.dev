import React from "react";
import "./heading-secondary.scss";

type Props = {
  text: string
}

const HeadingSecondary: React.FC<Props> = ({text}) => {
  return (
    <h2 className="heading-secondary">{text}</h2>
  );
};
export default HeadingSecondary;