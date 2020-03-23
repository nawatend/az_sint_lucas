import React, { useEffect, useState } from 'react';
import TourLayout from '../../layouts/tourBase';
import { Pannellum } from 'pannellum-react'
import Lucas from '../../components/Lucas'
import { useParams } from "react-router-dom";
import Loading from '../../components/Loading'
//firebase
import { db, storage } from '../../utils/firebase'
import { checkSound } from '../../utils/SoundControl'

const TourDetailPage = ({ match }) => {

    let { roomName } = useParams()

    //key based on url params, value is based on filename in firebase
    let audiosFileName = {
        intensievezorg: "intensive_care",
        kinderafdeling: "kids_section",
        spoed: "emergency",
        lab: "lab",
        dagziekenhuis: "day_care",
        operatie: "operation",
        radiologie: "radiology"
    }

    let audios = [audiosFileName[roomName]]
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

    useEffect(() => {
        checkSound()
    }, [])

    let hotspot = (hotSpotDiv, args) => {
        hotSpotDiv.setAttribute('style', `background-image: url("${process.env.PUBLIC_URL}/svgs/tour/vraagteken.svg")`)
        hotSpotDiv.classList.add('custom-tooltip');
        var span = document.createElement('span');
        span.innerHTML = args;
        hotSpotDiv.appendChild(span);
        span.style.width = span.scrollWidth - 20 + 'px';
        span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
        span.style.marginTop = -span.scrollHeight - 12 + 'px';
    }

    return (
        <div className="page">
            <div className="tour__content">
                <div className="content__image">
                    <audio
                        id={`audio__${audios[0]}`}
                        autoPlay
                        src={`https://firebasestorage.googleapis.com/v0/b/az-sint-lucas-gent.appspot.com/o/audios%2F${audios[0]}.mp3?alt=media&token=19366607-6109-4d6c-9582-324b20c35627`}
                        type="audio/mpeg" >
                    </audio>
                    <Pannellum
                        width="100%"
                        height="100%"
                        image={`${process.env.PUBLIC_URL}/images/360tours/${roomName}.jpg`}
                        pitch={-0.28}
                        yaw={-0.839}
                        hfov={110}
                        autoLoad
                        onLoad={() => {
                            console.log("panorama loaded");
                        }}
                    //hotspotDebug
                    >

                        {Object.keys(infoSpots).map((key, i) => {
                            // return (
                            //     <Pannellum.Hotspot
                            //         key={i}
                            //         type="info"
                            //         pitch={infoSpots[key].pitch}
                            //         yaw={infoSpots[key].yaw}
                            //         text={infoSpots[key].description}
                            ///>)

                            return (
                                <Pannellum.Hotspot
                                    key={i}
                                    type="custom"
                                    pitch={infoSpots[key].pitch}
                                    yaw={infoSpots[key].yaw}
                                    cssClass="custom-hotspot"
                                    tooltip={hotspot}
                                    tooltipArg={infoSpots[key].description}
                                />)
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