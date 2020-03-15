import React from "react";
import "./welcome-message.scss";

type Props = {
  heading: string
  message?: string
}

const WelcomeMessage: React.FC<Props> = ({heading, message}) => {
  return (
    <>
      <section>
        <h2 className="heading-secondary welcome-message">{heading}</h2>
        {
          message ? <p className="paragraph additional-paragraph-styles">{message} </p> : ""
        }
      </section>
    </>
  );
};
export { WelcomeMessage };