// src/inversify.config.ts

import {Container, interfaces} from 'inversify';
import {createStore, Store} from 'redux';
import {AppState, AppAction} from './interfaces';
import rootReducer from './rootReducer';

// Create the inversify container
const container = new Container();

// Bind the store as a singleton
container
  .bind<Store<AppState, AppAction>>('Store')
  .toConstantValue(createStore(rootReducer));

// Bind any other dependencies that the modules may need
// For example:
// container.bind<SomeService>('SomeService').to(SomeServiceImpl);

export default container;
