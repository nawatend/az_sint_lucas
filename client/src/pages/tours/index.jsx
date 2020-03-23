import React, { useEffect, useState } from 'react';
import NavigationDetail from '../../components/navigation/NavigationDetail'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading'
import { checkSound } from '../../utils/SoundControl'

let ToursPage = () => {

    let audios = ["tour", "intensive_care", "kids_section", "emergency", "lab", "day_care", "operation", "radiology"]

    let audiosFileName = {
        intensievezorg: "intensive_care",
        kinderafdeling: "kids_section",
        spoed: "emergency",
        lab: "lab",
        dagziekenhuis: "day_care",
        operatie: "operation",
        radiologie: "radiology"
    }

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
        checkSound()
    }, [])

    let playSound = (e) => {

        let currentSound = document.getElementById(`audio__${e.target.dataset.audio}`)
        if (currentSound && localStorage.getItem("sound") === 'true') {
            currentSound.play()
        }
    }
    let tours = [
        {
            name: "dagziekenhuis",
            placeSvg: "top_right_place.svg",
            nameIcon: "sun.svg",
            audio: "day_care"
        },
        {
            name: "radiologie",
            placeSvg: "right_middle_place.svg",
            nameIcon: "leg.svg",
            audio: "radiology"
        },
        {
            name: "operatiekamer",
            placeSvg: "bottom_right_place.svg",
            nameIcon: "mask.svg",
            audio: "operation"
        },
        {
            name: "lab",
            placeSvg: "bottom_middle_place.svg",
            nameIcon: "lab.svg",
            audio: "lab"
        },
        {
            name: "spoed",
            placeSvg: "bottom_left_place.svg",
            nameIcon: "plus.svg",
            audio: "emergency"
        },
        {
            name: "kinderafdeling",
            placeSvg: "left_middle_place.svg",
            nameIcon: "cap.svg",
            audio: "kids_section"
        },
        {
            name: "intensievezorg",
            placeSvg: "top_left_place.svg",
            nameIcon: "heart.svg",
            audio: "intensive_care"
        },

    ]

    return (
        <div className="background__main" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/svgs/backgrounds/bg_water.svg)` }}>
            <NavigationDetail path="/rondleiding" iconName="tour" />
            <audio id={`audio__${audios[0]}`} autoPlay src={`https://firebasestorage.googleapis.com/v0/b/az-sint-lucas-gent.appspot.com/o/audios%2F${audios[0]}.mp3?alt=media&token=19366607-6109-4d6c-9582-324b20c35627`} type="audio/mpeg" ></audio>

            <main className="page">
                <div className="tours__content">
                    <div className="content__tour__menu">
                        {tours.map(tour => (
                            <Link onMouseEnter={(e) => playSound(e)} onTouchStart={(e) => playSound(e)} data-audio={tour.audio} to={`/rondleiding/${tour.name}`} className="content___tour__menu__item">
                                <audio id={`audio__${tour.audio}`}
                                    src={`https://firebasestorage.googleapis.com/v0/b/az-sint-lucas-gent.appspot.com/o/audios%2F${tour.audio}.mp3?alt=media&token=19366607-6109-4d6c-9582-324b20c35627`}
                                    type="audio/mpeg" ></audio>
                                <img data-audio={tour.audio} src={process.env.PUBLIC_URL + `/svgs/tour/${tour.placeSvg}`} alt={`${tour.placeSvg}`} />
                                <div data-audio={tour.audio} className="menu__item--icon">
                                    <div data-audio={tour.audio} className="menu__item--title">{tour.name}</div>
                                    <img data-audio={tour.audio} src={process.env.PUBLIC_URL + `/svgs/tour/icons/${tour.nameIcon}`} alt={`${tour.nameIcon}`} />
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </main>
            {!isLandscape ? (<div className="rotate__device"><img src={`${process.env.PUBLIC_URL}/svgs/rotate_device2.svg`} alt="LOADING ..." /></div>) : ""}
        </div>
    )
}

export default ToursPage;