import * as React from "react";
import * as ReactDOM from "react-dom";
import { Route, Link, Redirect } from "react-router-dom";
import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { routerMiddleware, routerReducer, ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import '../stylesheets/font/font-awesome.scss';
import '../stylesheets/style.scss';

import HomeReducer from "./reducers/home_reducer";
import ArticleReducer from "./reducers/article_reducer";
import HomeContainer from "./containers/home_container";
import ArticleContainer from "./containers/article_container";



const history = createBrowserHistory();
let reducers = combineReducers({
  routing: routerReducer,
  homeReducer: HomeReducer,
  articleReducer: ArticleReducer
});

let store = createStore(reducers, {}, compose(applyMiddleware(thunk, routerMiddleware(history)), window.devToolsExtension ? window.devToolsExtension() : f => f));

const Root = ()=>(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" render={()=>(<Redirect to="/home"/>)} />
        <Route exact path="/home" component={HomeContainer} />
        <Route path="/articles/:id" component={ArticleContainer} />
      </div>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(
    <Root />,
    document.getElementById("container")
);