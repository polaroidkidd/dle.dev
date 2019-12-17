import { render } from '@testing-library/react';
import pretty from 'pretty';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import RootContainer from './root-container';

let container;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting

  if (container) {
    unmountComponentAtNode(container);
    container.remove();
  }
  container = null;
});

it('should render the root container', () => {
  act(() => {
    render(<RootContainer/>, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
      `""`,
  ); /* ... gets filled automatically by jest ... */
});
