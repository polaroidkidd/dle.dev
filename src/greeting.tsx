import React from "react";
import "./greeting.scss";

interface IGreeting {
  message: string;
}

const Greeting: React.FC<IGreeting> = ({ message }) => {
  return <h1 className={"greetingStyles"}>{message}</h1>;
};

export { Greeting };
