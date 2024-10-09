import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import LaunchDetails from "./components/LaunchDetails/LaunchDetails";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/details/:slug" component={LaunchDetails} exact />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
