'use strict'; 
import * as React from 'react';
import createStore from '../__mocks__/store.mock';
import HomeContainer from '../src/javascripts/containers/home_container';
import { Route } from "react-router-dom";
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { routerReducer, ConnectedRouter, routerActions } from 'react-router-redux';
import { createBrowserHistory } from 'history';

describe("<HomeContainer />", ()=>{
  
  const store = createStore({
    routing: routerReducer,
    homeReducer: {
      latestNews: {},
      hotNews:[],
      themes:[]
    } 
  });
  
  const history = createBrowserHistory();
  const wrapper = mount(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route exact path="/home" component={HomeContainer} />
      </ConnectedRouter>
    </Provider>
  );
  store.dispatch(routerActions.push("/home?type=hot"));
  
  
  it("Root did mount", ()=>{
    expect(wrapper.find("Route").length).toBe(1);
  });
});

