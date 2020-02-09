import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useRouteMatch, useParams
} from "react-router-dom";

import { FilmsPage, FilmDetailPage, GamesPage, GameDetailPage, HomePage, PersonsPage, PersonDetailPage, ToursPage, TourDetailPage } from '../pages'


export default function router() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />

                {/* Tours */}
                <Route path="/rondleiding" exact component={ToursPage} />
                <Route path="/rondleiding/:roomName" component={TourDetailPage} />

                {/* films */}
                <Route path="/filmpjes" exact component={FilmsPage} />
                <Route path="/filmpjes/:id" component={FilmDetailPage} />

                {/* games */}
                <Route path="/spelletjes" exact component={GamesPage} />
                <Route path="/spelletjes/:gameName" component={GameDetailPage} />

                {/* persons */}
                <Route path="/wieiswie" exact component={PersonsPage} />
                <Route path="/wieiswie/:person" component={PersonDetailPage} />
            </Switch>
        </Router >
    )
}
