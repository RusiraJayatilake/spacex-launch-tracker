import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LaunchDataGrid from "./components/Launches/LaunchDataGrid";
import LaunchDetails from "./components/Launches/LaunchDetails";
import HistoryDetails from "./components/LaunchHistory/HistoryDetails";
import HistoryDataGrid from "./components/LaunchHistory/HistoryDataGrid";
import ThemeProvider from "./utils/context/ThemeProvider";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LaunchDataGrid />} />
          {/* <Route path="/history" element={<HistoryDataGrid />} /> */}
          <Route path="/launch-details/:slug" element={<LaunchDetails />} />
          {/* <Route path="/history-details/:slug" element={<HistoryDetails />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  </StrictMode>
);
