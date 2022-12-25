/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {

  try {
  const _ = require("lodash");
  _._baseFlatten();
} catch (e) {
  console.log("App-test.tsx Cannot find module './_baseFlatten'");
} finally {
  renderer.create(<App />);
}

  
});
