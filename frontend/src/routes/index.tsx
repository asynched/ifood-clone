import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/home";
import ProfilePage from "../pages/profile";
import PurchasePage from "../pages/purchase";
import SellerPage from "../pages/seller";
import SellersPage from "../pages/sellers";

export default function Routes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/seller" component={SellersPage} />
        <Route path="/seller/:id" component={SellerPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/checkout" component={PurchasePage} />
      </Switch>
    </BrowserRouter>
  );
}
