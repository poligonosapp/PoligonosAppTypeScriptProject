// src/rootReducer.ts

import {combineReducers} from 'redux';
import {AppState, AppAction} from './interfaces';

// Import the reducers for each module here
import mapReducer from './map/reducer';
import profileReducer from './profile/reducer';
import messagingReducer from './messaging/reducer';

const rootReducer = combineReducers<AppState, AppAction>({
  // Combine the reducers for each module here
  map: mapReducer,
  profile: profileReducer,
  messaging: messagingReducer,
});

export default rootReducer;
