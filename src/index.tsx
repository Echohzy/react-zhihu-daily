import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import './assets/stylesheets/style.scss';

import { Hello } from "./components/Hello";
import { Home } from "./components/Home";

const Root = ()=>(
  <Router>
    <div>
      <ul>
        <li><Link to="/hello">Hello</Link></li>
        <li><Link to="/">home</Link></li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/hello" component={Hello} />
    </div>
  </Router>
)

ReactDOM.render(
    <Root />,
    document.getElementById("example")
);