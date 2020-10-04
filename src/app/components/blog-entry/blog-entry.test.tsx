import React from 'react';
import renderer from 'react-test-renderer';
import Card from './card';


test('Render Card Component', () => {
  const tree = renderer.create(
    <Card />).toJSON();
  expect(tree).toMatchSnapshot();
});
