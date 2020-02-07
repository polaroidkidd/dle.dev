import pretty from 'pretty';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import image from '../../assets/headshot/daniel_einars-400x500.jpg';
import { ProfilePicture } from './index';

let container: Element | null = null;
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

it('should render a greeting', () => {
  act(() => {
    render(<ProfilePicture imageSrc={image.toString()}/>, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
      `"<div class=\\"profile-picture profile-picture--container\\"><img src=\\"daniel_einars-400x500.jpg\\" class=\\"profile-picture--image\\" alt=\\"Profile Picture\\"></div>"`,
  ); /* ... gets filled automatically by jest ... */
});
