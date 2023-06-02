import React from "react";
import ReactDOM from "react-dom/client";
// import RouteConfiguration from "./pages/Home/Routes.js";
import App from "./pages/App.js";
import DarkModeProvider from "./components/DarkModeProvider.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);
