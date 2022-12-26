// https://github.com/facebook/jest/blob/main/examples/manual-mocks/__mocks__/lodash.js
// Copyright 2004-present Facebook. All Rights Reserved.
// const { jest } from "jest";
const lodash = jest.createMockFromModule('lodash');

lodash.head = arr => 5;

export default lodash;