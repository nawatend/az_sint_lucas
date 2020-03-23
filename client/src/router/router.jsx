import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useRouteMatch, useParams
} from "react-router-dom";

import { Error404Page, FilmsPage, FilmDetailPage, GamesPage, GameDetailPage, HomePage, PersonsPage, PersonDetailPage, ToursPage, TourDetailPage } from '../pages'

export default function router() {
    return (

        <Router basename={process.env.PUBLIC_URL} >
            <Switch>
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
                <Route path="/wieiswie/:id/:person" component={PersonDetailPage} />

                <Route path="/" exact component={HomePage} />

                {/* Non exist url */}
                <Error404Page path="*" />
            </Switch>
        </Router >
    )
}
