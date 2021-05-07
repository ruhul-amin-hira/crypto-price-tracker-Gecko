import React from "react";
import { Route, Switch } from "react-router";

import "../scss/Dashboard.scss";
import About from "./About";
import CoinDetails from "./coinDetails/CoinDetails";
import DashCoinLists from "./DashCoinLists";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Switch>
        <Route exact path="/">
          <DashCoinLists />
        </Route>
        <Route exact path="/coin/:id">
          <CoinDetails />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="*">
          <DashCoinLists />
        </Route>
      </Switch>
    </div>
  );
};

export default Dashboard;
