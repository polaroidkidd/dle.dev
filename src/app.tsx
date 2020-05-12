import React from "react";
import { Greeting } from "./greeting";
import "./style.scss";
import WebFont from "webfontloader";

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
    </div>
  );
};

export { App };
