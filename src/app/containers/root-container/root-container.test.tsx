import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { RootContainer } from '../index';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/globalStyle';


test('render tertiary heading with text', () => {
  const tree = renderer.create(
    <ThemeProvider theme={theme}>
      <RootContainer/>
    </ThemeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
  
});
