import React from "react";
import renderer from "react-test-renderer";

import { createBrowserHistory } from "history";
import { LoadingIndicator } from "./loading-indicator";

const history = createBrowserHistory();

test("Render Navigation", () => {
  const tree = renderer.create(
    <LoadingIndicator/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
