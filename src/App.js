import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Test from "./components/Test";
import history from "./history";

import Register from "./components/Register";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <div class="grid-container">
      <Router history={history}>
        <Header />

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/users/register" exact component={Register} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
