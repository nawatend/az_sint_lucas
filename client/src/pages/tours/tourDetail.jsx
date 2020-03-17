import React, { useEffect, useState } from 'react';
import TourLayout from '../../layouts/tourBase';
import { Pannellum } from 'pannellum-react'
import Lucas from '../../components/Lucas'
import { useParams } from "react-router-dom";
import Loading from '../../components/Loading'
//firebase
import { db, storage } from '../../utils/firebase'


const TourDetailPage = ({ match }) => {

    let { roomName } = useParams()

    let tourSpotsRef = db.ref(`/rooms/${roomName}`)
    const [isLandscape, setIsLandscape] = useState(true)
    const [loading, setLoading] = useState(true)
    const [infoSpots, setInfoSpots] = useState({})

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
    }, [])

    useEffect(() => {

        const getTourSpots = () => {
            tourSpotsRef.once('value', (snapshots) => {
                setInfoSpots(snapshots.val())
                setLoading(false)
            })
        }

        if (loading) {
            getTourSpots()
        }

    }, [loading, tourSpotsRef])

    return (
        <div className="page">
            Tour Detail => {roomName}
            <div className="tour__content">
                <div className="content__image">


                    <Pannellum
                        width="100%"
                        height="100%"
                        image={`${process.env.PUBLIC_URL}/images/360tours/${roomName}.jpg`}
                        pitch={10}
                        yaw={180}
                        hfov={110}
                        autoLoad
                        onLoad={() => {
                            console.log("panorama loaded");
                        }}
                    // hotspotDebug
                    >


                        {Object.keys(infoSpots).map((key, i) => {
                            return <Pannellum.Hotspot
                                key={i}
                                type="info"
                                pitch={infoSpots[key].pitch}
                                yaw={infoSpots[key].yaw}
                                text={infoSpots[key].description}

                            // URL="https://github.com/farminf"
                            />
                        })}

                    </Pannellum>
                </div>
            </div>
            {!isLandscape ? (<div className="rotate__device"><img src={`${process.env.PUBLIC_URL}/svgs/rotate_device2.svg`} alt="LOADING ..." /></div>) : ""}
            <Lucas type="LOOK" title={roomName} />
        </div >
    )
}
export default TourLayout(TourDetailPage);