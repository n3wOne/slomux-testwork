import React from "react";
import ReactDOM from "react-dom";
import { Timer } from "./components/Timer";
import { AppContext } from "./utils/connect";
import store from "./store/store";

ReactDOM.render(
  <AppContext.Provider value={{ store }}>
    <Timer />
  </AppContext.Provider>,
  document.getElementById("root")
);
