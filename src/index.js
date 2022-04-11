import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./features/store";
import { Provider } from "react-redux";

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
