import React from "react";
import renderer from "react-test-renderer";
import { Home } from "./home";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";


test("Expect to render complete Home", () => {
  const history = createBrowserHistory();
  const tree = renderer.create(
    <Router history={history}>
      <Home/>
    </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});