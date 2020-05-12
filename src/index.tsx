import React from "react";
import { render } from "react-dom";
import App from "./app";

const styles: React.CSSProperties = {
  margin: "0 auto",
};

render(<App styling={styles} />, document.getElementById("root"));
