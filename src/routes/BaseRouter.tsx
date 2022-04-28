import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from "views/home";
import Reconciliation from "views/reconciliation"
import ScrollToTop from "./scrollToTop";

export default function baseRouter() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (<HomePage/>)}
          />
          <Route
            exact
            path="/reconciliation"
            render={() => (<Reconciliation/>)}
          />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}
