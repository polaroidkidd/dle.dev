import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { SecondaryHeading } from './index';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/globalStyle';


test('render SecondaryHeading with text', () => {
  const tree = renderer.create(
    <ThemeProvider theme={theme}>
      <SecondaryHeading text="test heading"/>
    </ThemeProvider>).toJSON();
  expect(tree).toMatchSnapshot();
});
