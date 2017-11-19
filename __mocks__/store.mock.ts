'use strict';

import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

export default function(initialState){
  return mockStore(initialState);
}