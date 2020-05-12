import React from "react";
import { render } from "react-dom";
import { App } from "./app";
import styles from "./index.scss";

render(<App styling={styles} />, document.getElementById("root"));
