import React from "react";
import renderer from "react-test-renderer";
import { WelcomeMessage } from "./welcome-message";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";


test("Render WelcomeMessage with text", () => {

  const history = createBrowserHistory();

  const tree = renderer.create(
    <Router history={history}>
      <WelcomeMessage/>
    </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});