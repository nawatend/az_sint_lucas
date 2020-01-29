import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useRouteMatch, useParams
} from "react-router-dom";

import { FilmsPage, GamesPage, HomePage, PersonsPage, ToursPage } from '../pages'

export default function router() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/filmpjes" exact>
                    <FilmsPage />
                </Route>
                <Route path="/spelletjes" exact>
                    <GamesPage />
                </Route>
                <Route path="/wieiswie" exact>
                    <PersonsPage />
                </Route>
                <Route path="/rondleiding" exact>
                    <ToursPage />
                </Route>
            </Switch>
        </Router >
    )
}
