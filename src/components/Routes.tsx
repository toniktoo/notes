import React from 'react';
import {Route, Switch} from "react-router-dom";
import {routes} from "../constants";
import {Home} from "./home/Home";
import {AuthSignIn} from "./auth/AuthSignIn";

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path={routes.home} exact component={Home}/>
            <Route path={routes.authSignIn} component={AuthSignIn}/>
        </Switch>
    );
};