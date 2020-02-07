import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ProfilePicture } from './index';


test('render ProfilePicture with text', () => {
  const tree = renderer.create(<ProfilePicture imageSrc="empty"/>).toJSON();
  expect(tree).toMatchSnapshot();
});
