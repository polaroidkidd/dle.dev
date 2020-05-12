import React from "react";
import { render } from "react-dom";
import { App } from "./app";

const style: React.CSSProperties = {
  display: "flex",
  alignItems: "center"
};

render(<App styling={style}/>, document.getElementById("root"));