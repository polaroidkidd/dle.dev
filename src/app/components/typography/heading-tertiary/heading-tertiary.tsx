import React from "react";
import "./heading-tertiary.scss";

type Props = {
  text: string
}

const HeadingTertiary: React.FC<Props> = ({text}) => {
  return (
    <h3 className="heading-tertiary">{text}</h3>
  );
};
export { HeadingTertiary };