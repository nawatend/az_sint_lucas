import React, { useEffect, useState } from 'react';
import TourLayout from '../../layouts/tourBase';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useRouteMatch, useParams
} from "react-router-dom";

const TourDetailPage = ({ match }) => {

    let { roomName } = useParams()
    useEffect(() => {
        console.log(roomName)
    }, [match, roomName])

    return (
        <div className="page">Tour Detail => {roomName}</div >
    )
}
export default TourLayout(TourDetailPage);