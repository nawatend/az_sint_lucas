import React, { useEffect, useState } from 'react';
import TourLayout from '../../layouts/tourBase';
import { Pannellum } from 'pannellum-react'
import Lucas from '../../components/Lucas'
import { useParams } from "react-router-dom";


const TourDetailPage = ({ match }) => {

    let { roomName } = useParams()
    const [isLandscape, setIsLandscape] = useState(true)

    let checkScreen = (media) => {
        if (media.matches) {
            setIsLandscape(true)
        } else {
            setIsLandscape(false)
        }
    }

    useEffect(() => {
        let media = window.matchMedia("(orientation: landscape)")
        checkScreen(media)
        media.addListener(checkScreen)
    }, [isLandscape])

    useEffect(() => {
        console.log(roomName)
    }, [match, roomName])

    return (
        <div className="page">
            Tour Detail => {roomName}
            <div className="tour__content">
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

                        }}
                        hotspotDebug
                    >


                        <Pannellum.Hotspot
                            type="info"
                            pitch={-11.36}
                            yaw={123.957}
                            text="Info Hotspot Text 3"
                            // URL="https://github.com/farminf"
                        />
                    </Pannellum>
                </div>
            </div>
            {!isLandscape ? (<div className="rotate__device"><img src="/svgs/rotate_device2.svg" alt="" /></div>) : ""}
            <Lucas type="LOOK" title={roomName} />
        </div >
    )
}
export default TourLayout(TourDetailPage);