import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { NosotrosPage } from "../Pages/NosotrosPage";
import { CarPage } from "../Pages/CarPage";

export const RouterApp = () => {
    return (
        <Switch>
            <Route exact path="/nosotros">
                <NosotrosPage />
            </Route>
            <Route exact path="/car">
                <CarPage />
            </Route>
            <Route path="/">
                <HomePage />
            </Route>
            {/* <Redirect to="/" /> */}
        </Switch>
    );
};
