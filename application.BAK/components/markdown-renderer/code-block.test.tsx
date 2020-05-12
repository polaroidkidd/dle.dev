import React from "react";
import renderer from "react-test-renderer";
import { CodeBlock } from "./code-block";

test("Render Navigation", () => {
  const tree = renderer.create(
    <CodeBlock value="import React, { Component } from 'react';" language="typescript"/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});