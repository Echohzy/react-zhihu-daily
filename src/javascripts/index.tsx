import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { combineReducers, applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { routerReducer } from "react-router-redux";
import '../stylesheets/font-awesome.min.css';
import '../stylesheets/style.scss';

import HomeReducer from "./reducers/home_reducer";
import HomeContainer from "./containers/home_container";

let reducers = combineReducers({
  routing: routerReducer,
  homeReducer: HomeReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

const Root = ()=>(
  <Provider store={store}>
    <Router >
      <div>
        <Route exact path="/" render={()=>(<Redirect to="/home"/>)} />
        <Route exact path="/home" component={HomeContainer} />
      </div>
    </Router>
  </Provider>
)

ReactDOM.render(
    <Root />,
    document.getElementById("container")
);