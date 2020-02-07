import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { PrimaryHeading } from './index';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/globalStyle';


test('render PrimaryHeading with text', () => {
  const tree = renderer.create(
    <ThemeProvider theme={theme}>
      <PrimaryHeading text="test heading"/>
    </ThemeProvider>).toJSON();
  expect(tree).toMatchSnapshot();
});
