import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import history from "./history";

import Register from "./components/Register";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          {/* <Header /> */}
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/users/register" exact component={Register} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
