import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LaunchDataGrid from "./components/LaunchDataGrid/LaunchDataGrid";
import LaunchDetails from "./components/LaunchDetails/LaunchDetails";
import HistoryDetails from "./components/HistoryDetails/HistoryDetails";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" component={LaunchDataGrid} exact />
        <Route path="/details/:slug" component={LaunchDetails} exact />
        <Route path="/history" component={HistoryDetails} exact />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
