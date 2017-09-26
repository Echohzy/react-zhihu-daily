import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { combineReducers, applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { routerReducer } from "react-router-redux";
import '../stylesheets/font-awesome.min.css';
import '../stylesheets/style.scss';

import Home from "./components/Home";
import Article from "./components/Article";

let reducers = combineReducers({
  routing: routerReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

const Root = ()=>(
  <Provider store={store}>
    <Router >
      <div>
        <Route exact path="/" render={()=>(<Redirect to="/home"/>)} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/news/:id" component={Article} />
      </div>
    </Router>
  </Provider>
)

ReactDOM.render(
    <Root />,
    document.getElementById("container")
);