import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";

//WHERE DOES HTE STATE AND THE API STUFF GO

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  </Router>;
export default App;
