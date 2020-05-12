import React from "react";
import WebFont from "webfontloader";
import { RootContainer } from "./app/containers/root-container";

WebFont.load({
  google: {
    families: ["Poppins:100,200,300", "sans-serif"],
  },
});

type IApp = {
  styling: React.CSSProperties;
};

const App: React.FC<IApp> = ({ styling }) => {
  return <RootContainer style={styling} />;
};

export { App };
