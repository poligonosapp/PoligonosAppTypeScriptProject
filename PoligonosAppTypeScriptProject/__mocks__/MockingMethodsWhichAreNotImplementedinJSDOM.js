// jest lodash https://jestjs.io/docs/manual-mocks#mocking-node-modules
import './matchMedia.mock'; // Must be imported before the tested file
import {myMethod} from './file-to-test';

describe('myMethod()', () => {
  // Test the method here...
});