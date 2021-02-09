import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllCharacters from "./AllCharacters";
import Character from "./Character";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AllCharacters />
        </Route>
        <Route path="/characters">
          <Character />
        </Route>
      </Switch>
    </Router>
  );
}
