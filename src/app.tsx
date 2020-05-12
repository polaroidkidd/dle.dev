import React from "react";
import { Greeting } from "./greeting";
import WebFont from "webfontloader";
import imgUrl from "./logo.jpeg";

WebFont.load({
  google: {
    families: ["Poppins:100,200,300", "sans-serif"],
  },
});

type IApp = {
  styling: React.CSSProperties;
};

const App: React.FC<IApp> = ({ styling }) => {
  console.log("Starting App ");
  return (
    <div style={styling}>
      <Greeting message={"Hello World"} />
      <img src={imgUrl} />
    </div>
  );
};

export { App };
