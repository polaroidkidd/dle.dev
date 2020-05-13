import {hot} from 'react-hot-loader/root';
import React from 'react';
import WebFont from 'webfontloader';
import {RootContainer} from '@containers';

WebFont.load({
  google: {
    families: ['Poppins:100,200,300', 'sans-serif'],
  },
});

type IApp = {
  styling: React.CSSProperties;
};

const App: React.FC<IApp> = ({styling}) => {
  return <RootContainer style={styling} />;
};

export default hot(App);
