import React from "react";
import renderer from "react-test-renderer";
import { Navigation } from "./index";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

const history = createBrowserHistory();

test("Render Navigation", () => {
  const tree = renderer.create(
    <Router history={history}>
      <Navigation/>
    </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
