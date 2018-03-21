import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import components
import Single from "./components/Single";
import registerServiceWorker from "./registerServiceWorker";
import WebFontLoader from "webfontloader";
import { Router, Route, IndexRoute } from "react-router";
import { Provider } from "react-redux";
import store, { history } from "./store";

WebFontLoader.load({
  google: {
    families: ["Roboto:300,400,500,700", "Material Icons"]
  }
});

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById("root"));
registerServiceWorker();
