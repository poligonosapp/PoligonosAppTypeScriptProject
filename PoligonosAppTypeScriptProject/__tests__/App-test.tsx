/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const _ = require("lodash");

it('renders correctly', () => {

try {
  _._baseFlatten;
} catch (e) {
  console.log("App-test.tsx Cannot find module './_baseFlatten'")
} finally {
  
}

  renderer.create(<App />);
});
