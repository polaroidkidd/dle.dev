import React from "react";

interface IGreeting {
  message: string
}

const Greeting: React.FC<IGreeting> = ({ message }) => {
  return (
    <h1>
      {message}
    </h1>
  );
};

export { Greeting };