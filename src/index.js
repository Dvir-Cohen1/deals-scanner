import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./app/App";
import ThemeProvider from "./context/themeContext";
import DealsProvider from "./context/todayDealsContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* <React.StrictMode> */
  <ThemeProvider>
    <DealsProvider>
      <App />
    </DealsProvider>
  </ThemeProvider>
  /* </React.StrictMode> */
);
