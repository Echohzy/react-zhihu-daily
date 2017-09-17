import * as React from "react";
import * as ReactDOM from "react-dom";
import './assets/stylesheets/style.scss';

import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);