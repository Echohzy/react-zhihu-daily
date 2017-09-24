import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../stylesheets/font-awesome.min.css';
import '../stylesheets/style.scss';

import Home from "./components/Home";

const Root = ()=>(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </Router>
)

ReactDOM.render(
    <Root />,
    document.getElementById("container")
);