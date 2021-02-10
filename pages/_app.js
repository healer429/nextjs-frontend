import React from "react";
import Header from "../component/Header";
import { Provider } from "react-redux";
import store from "../store/store";
import "../styles/bootstrap.min.css";
import "../styles/index.css";
import "../styles/App.css";
import "../styles/form.css";
import "../styles/home.css";
import "../styles/navbar.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <div className="content-wrapper">
        <div className="content">
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  );
}

export default MyApp;
