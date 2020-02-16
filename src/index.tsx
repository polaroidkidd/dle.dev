import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import { RootContainer } from "./app/containers";
import CSS from "csstype";

WebFont.load({
  google: {
    families: ["Poppins:100,200,300", "sans-serif"],
  },
});

const style: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  justifyContent: "center"
};

ReactDOM.render(<RootContainer style={style}/>, document.getElementById("root"));
