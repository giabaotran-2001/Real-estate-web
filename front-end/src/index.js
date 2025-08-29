import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";

// Kommunicate.init("574a737481abffa3b730ac577ea9374", {
//   automaticChatOpenOnNavigation: true,
//   popupWidget: true,
//   displayKommunicateWidget: false,
// });

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
