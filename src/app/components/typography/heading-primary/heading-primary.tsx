import React from "react";
import "./heading-primary.scss";

type Props = {
  text: string
}

const HeadingPrimary: React.FC<Props> = ({text}) => {
  return (
    <h1 className="heading-primary">{text}</h1>
  );
};
export default HeadingPrimary;