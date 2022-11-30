import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./app/App";
import ThemeProvider from "./context/themeContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* <React.StrictMode> */
  <ThemeProvider>
    <App />
  </ThemeProvider>
  /* </React.StrictMode> */
);
