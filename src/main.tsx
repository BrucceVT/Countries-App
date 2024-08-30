// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "./hooks/ThemeContext.tsx";
import { RoutesApp } from "./layouts/Routes/Routes.tsx";
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <ThemeProvider>
      <Router>
        <RoutesApp />
      </Router>
    </ThemeProvider>
  // </React.StrictMode>
);
