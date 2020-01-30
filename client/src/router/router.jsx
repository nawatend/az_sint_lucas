import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useRouteMatch, useParams
} from "react-router-dom";

import { FilmsPage, GamesPage, HomePage, PersonsPage, ToursPage, TourDetailPage } from '../pages'


export default function router() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />

                {/* Tours */}
                <Route path="/rondleiding" exact component={ToursPage} />
                <Route path="/rondleiding/:roomName" component={TourDetailPage} />


                <Route path="/filmpjes" exact component={FilmsPage} />
                <Route path="/spelletjes" exact component={GamesPage} />
                <Route path="/wieiswie" exact component={PersonsPage} />
            </Switch>
        </Router >
    )
}
