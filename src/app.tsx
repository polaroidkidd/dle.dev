import React from "react";
import WebFont from "webfontloader";

import CSS from "csstype";
import { Greeting } from "./greeting";

WebFont.load({
  google: {
    families: ["Poppins:100,200,300", "sans-serif"]
  }
});

const style: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  justifyContent: "center"
};

interface IApp {
  style: React.CSSProperties
}

const App: React.FC<IApp> = () => {
  console.log("Starting App ");
  return (
    <div>
      <Greeting message={"Hello World"}/>
    </div>
  );
};

export { App };