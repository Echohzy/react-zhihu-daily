'use strict';

import configureStore from 'redux-mock-store';
import { routerMiddleware } from 'react-router-redux';

const mockStore = configureStore([routerMiddleware]);

export default function(initialState){
  return mockStore(initialState);
}