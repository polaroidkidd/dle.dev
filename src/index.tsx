import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { RootContainer } from './app/containers';

WebFont.load({
  google: {
    families: ['Poppins:100,300', 'sans-serif'],
  },
});
ReactDOM.render(<RootContainer/>, document.getElementById('root'));
