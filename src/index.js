import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LaunchDataGrid from "./components/Launches/LaunchDataGrid";
import LaunchDetails from "./components/Launches/LaunchDetails";
import HistoryDetails from "./components/LaunchHistory/HistoryDetails";
import HistoryDataGrid from "./components/LaunchHistory/HistoryDataGrid";
import ThemeProvider from "./utils/context/ThemeProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Switch>
          <Route path="/" component={LaunchDataGrid} exact />
          <Route path="/history" component={HistoryDataGrid} exact />
          <Route path="/launch-details/:slug" component={LaunchDetails} exact />
          <Route
            path="/history-details/:slug"
            component={HistoryDetails}
            exact
          />
        </Switch>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
