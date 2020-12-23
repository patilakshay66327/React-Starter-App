import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutUsComponent from "./components/aboutUs/aboutUs";
import HomePageComponet from "./components/home/home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePageComponet} />
      <Route path="/aboutus" exact component={AboutUsComponent} />
    </Switch>
  );
};

export default Routes;

