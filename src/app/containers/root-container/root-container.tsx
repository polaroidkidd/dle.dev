import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../../pages";
import CSS from "csstype";

type Props = {
  style: CSS.Properties
}

const RootContainer: React.FC<Props> = ({style}) => {
  return (
    <div style={style}>

      <Router>
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export { RootContainer };
