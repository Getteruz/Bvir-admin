import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Assuming you have an 'App' component in a separate file
import "./index.css";
import "./../src/assets/font/stylesheet.css";
import 'react-quill/dist/quill.snow.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./config/store";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      ,
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
