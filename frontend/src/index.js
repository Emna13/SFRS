import React from "react";
import ReactDOM from "react-dom";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "mdbreact/dist/css/mdb.css";
import App from "./App";
import './index.css'
import store from "./js/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
