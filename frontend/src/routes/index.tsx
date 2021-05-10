import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/home";
import SellerPage from "../pages/seller";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/seller/:id" component={SellerPage} />
      </Switch>
    </BrowserRouter>
  );
}
