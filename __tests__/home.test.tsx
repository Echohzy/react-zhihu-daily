'use strict'; 
import * as React from 'react';
import createStore from '../__mocks__/store.mock.ts';
import HomeContainer from '../src/javascripts/containers/home_container.tsx';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

describe("<HomeContainer />", ()=>{
  const store = createStore({homeReducer: {} });
  const wrapper = mount( <Provider store={store}><HomeContainer /></Provider> );
  
  it("Root did mount", ()=>{
    //expect(wrapper.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});

