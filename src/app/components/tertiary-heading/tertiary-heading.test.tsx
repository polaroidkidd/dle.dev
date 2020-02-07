import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { TertiaryHeading } from './index';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/globalStyle';


test('render TertiaryHeading with text', () => {
  const tree = renderer.create(
    <ThemeProvider theme={theme}>
      <TertiaryHeading text="test heading"/>
    </ThemeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
