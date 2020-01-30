import React, { useEffect, useState } from 'react';
import TourLayout from '../../layouts/tourBase';
import { Pannellum, PannellumVideo } from 'pannellum-react'

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
        <div className="page">
            Tour Detail => {roomName}
            <div className="content">
                <div className="content__image">

                    <Pannellum
                        width="100%"
                        height="100%"
                        image="/images/360tours/test.jpg"
                        pitch={10}
                        yaw={180}
                        hfov={110}
                        autoLoad
                        onLoad={() => {
                            console.log("panorama loaded");
                        }}></Pannellum>
                </div>
            </div>

        </div >
    )
}
export default TourLayout(TourDetailPage);