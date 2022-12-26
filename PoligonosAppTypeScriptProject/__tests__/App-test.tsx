/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const sortBy = require('lodash.sortby');

it('renders correctly', () => {

  try {
  const _ = require("lodash");// downgrade to lodash@4.17.20
  _._baseFlatten();
} catch (e) {
  console.log("App-test.tsx Cannot find module './_baseFlatten'");
} finally {
  renderer.create(<App />);
}

  
});
