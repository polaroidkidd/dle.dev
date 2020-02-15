import React from "react";
import { HeadingSecondary } from "../typography/heading-secondary";
import { Paragraph } from "../typography/paragraph";

type Props = {
  heading: string
  message?: string
}

const WelcomeMessage: React.FC<Props> = ({heading, message}) => {
  return (
    <>
      <section>
        <HeadingSecondary text={heading}/>

        {
          message ? <Paragraph text={message}/> : ""
        }
      </section>
    </>
  );
};
export { WelcomeMessage };