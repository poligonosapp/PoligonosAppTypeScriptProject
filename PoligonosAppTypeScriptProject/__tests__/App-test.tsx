/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// https://github.com/lodash/lodash/wiki/FP-Guide
// Load the fp build.
const fp = require('lodash/fp');

// Load a method category.
const object = require('lodash/fp/object');

// Load a single method for smaller builds with browserify/rollup/webpack.
const extend = require('lodash/fp/extend');

// const sortBy = require('lodash.sortby');

it('renders correctly', () => {

  try {

    // https://lodash.com/docs/4.17.15#sortBy
const users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];
 
_.sortBy(users, [function(o) { return o.user; }]);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 
_.sortBy(users, ['user', 'age']);
// => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]

  const _ = require("lodash");// downgrade to lodash@4.17.20
  _._baseFlatten();
} catch (e) {
  console.log("App-test.tsx Cannot find module './_baseFlatten'");
} finally {
  renderer.create(<App />);
}

  
});
