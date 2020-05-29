import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/btn.css";
import "./assets/css/container.css";
import "./assets/css/icon.css";
import "./assets/css/iconHeart.css";
import "./assets/css/novoTweet.css";
import { Provider } from "react-redux";
import store from "./store";
// CSS Global
import "./assets/css/reset.css";
// import './index.css';
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import Roteamento from "./routes";
import { NotificacaoContextProvider } from "./context/NotificacaoContext";

ReactDOM.render(
  <Provider store={store}>
    <NotificacaoContextProvider>
      <BrowserRouter>
        <Roteamento></Roteamento>
      </BrowserRouter>
    </NotificacaoContextProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
