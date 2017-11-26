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
import ThemeReducer from "./reducers/theme_reducer";
import lazyLoader from "./lazy_loader";
declare var DEVELOPMENT: boolean;
const history = createBrowserHistory();
let reducers = combineReducers({
  routing: routerReducer,
  homeReducer: HomeReducer,
  articleReducer: ArticleReducer,
  themeReducer: ThemeReducer
});
let store = createStore(
  reducers, 
  {},
  compose(
    applyMiddleware(thunk, routerMiddleware(history)), 
    DEVELOPMENT&&(window as any).devToolsExtension ? (window as any).devToolsExtension() : (f:any):any => f
  )
);

export const Root = ()=>(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" render={()=>(<Redirect to="/home"/>)} />
        <Route exact path="/home" component={lazyLoader(()=>import(
          /* webpackChunkName: "homeContainer" */
          /* webpackMode: "lazy" */
          "./containers/home_container"))} />
        <Route path="/articles/:id" component={lazyLoader(()=>import(
          /* webpackChunkName: "articleContainer" */
          /* webpackMode: "lazy" */
          "./containers/article_container"))} />
        <Route path="/themes/:id" component={lazyLoader(()=>import(
          /* webpackChunkName: "themeContainer" */
          /* webpackMode: "lazy" */
          "./containers/theme_container"))}/>
      </div>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(
    <Root />,
    document.getElementById("container")
);