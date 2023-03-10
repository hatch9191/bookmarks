import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home, Bookmarks } from "./pages";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/bookmarks" component={Bookmarks} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
