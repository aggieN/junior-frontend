import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "App";
import { Home } from "pages/Home";
import { MyProfile } from "pages/MyProfile";

const Root = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/my-profile" component={MyProfile} />
      </Switch>
    </App>
  </BrowserRouter>
);

export default Root;
