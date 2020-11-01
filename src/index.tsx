import React from 'react';
import { render } from 'react-dom';
import App from './app';

const styles: React.CSSProperties = {
  margin: '0 auto',
};

function renderApp() {
  render(<App styling={styles} />, document.getElementById('root'));
}

if (
  'fetch' in window &&
  'Intl' in window &&
  'URL' in window &&
  'Map' in window &&
  'forEach' in NodeList.prototype &&
  'startsWith' in String.prototype &&
  'endsWith' in String.prototype &&
  'includes' in String.prototype &&
  'includes' in Array.prototype &&
  'assign' in Object &&
  'entries' in Object &&
  'keys' in Object
) {
  renderApp();
} else {
  import(/* webpackChunkName: "polyfills" */ './polyfills').then(renderApp);
}
