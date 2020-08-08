import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { NosotrosPage } from "../Pages/NosotrosPage";

export const RouterApp = () => {
    return (
        <Switch>
            <Route exact path="/nosotros">
                <NosotrosPage />
            </Route>
            <Route path="/">
                <HomePage />
            </Route>
            {/* <Redirect to="/" /> */}
        </Switch>
    );
};
