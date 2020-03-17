import React, { useEffect, useState } from 'react';
import NavigationDetail from '../../components/navigation/NavigationDetail'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading'

let ToursPage = () => {


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


    return (
        <div className="background__main" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/svgs/backgrounds/bg_water.svg)` }}>
            <NavigationDetail path="/rondleiding" iconName="tours" />
            <main className="page">
                <div className="tours__content">

                    <div className="content__tour__menu">
                        <Link to="/rondleiding/dagziekenhuis" className="content___tour__menu__item">
                            <img src={process.env.PUBLIC_URL + "/svgs/tour/top_right_place.svg"} alt="bottom_middle_place" />
                            <div className="menu__item--icon">
                                <img src={process.env.PUBLIC_URL + "/svgs/tour/icons/sun.svg"} alt="bottom_middle_place" />
                            </div>
                        </Link>
                        <Link to="/rondleiding/radiologie" className="content___tour__menu__item">
                            <img src={`${process.env.PUBLIC_URL}/svgs/tour/right_middle_place.svg`} alt="bottom_middle_place" />
                            <div className="menu__item--icon">
                                <img src={`${process.env.PUBLIC_URL}/svgs/tour/icons/leg.svg`} alt="bottom_middle_place" />
                            </div>
                        </Link>
                        <Link to="/rondleiding/operatiekamer" className="content___tour__menu__item">
                            <img src={`${process.env.PUBLIC_URL}/svgs/tour/bottom_right_place.svg`} alt="bottom_middle_place" />
                            <div className="menu__item--icon">
                                <img src={`${process.env.PUBLIC_URL}/svgs/tour/icons/mask.svg`} alt="bottom_middle_place" />
                            </div>
                        </Link>
                        <Link to="/rondleiding/lab" className="content___tour__menu__item">
                            <img src={`${process.env.PUBLIC_URL}/svgs/tour/bottom_middle_place.svg`} alt="bottom_middle_place" />
                            <div className="menu__item--icon">
                                <img src={`${process.env.PUBLIC_URL}/svgs/tour/icons/lab.svg`} alt="bottom_middle_place" />
                            </div>
                        </Link>
                        <Link to="/rondleiding/spoed" className="content___tour__menu__item">
                            <img src={`${process.env.PUBLIC_URL}/svgs/tour/bottom_left_place.svg`} alt="bottom_middle_place" />
                            <div className="menu__item--icon">
                                <img src={`${process.env.PUBLIC_URL}/svgs/tour/icons/plus.svg`} alt="bottom_middle_place" />
                            </div>
                        </Link>
                        <Link to="/rondleiding/kinderafdeling" className="content___tour__menu__item">
                            <img src={`${process.env.PUBLIC_URL}/svgs/tour/left_middle_place.svg`} alt="bottom_middle_place" />
                            <div className="menu__item--icon">
                                <img src={`${process.env.PUBLIC_URL}/svgs/tour/icons/cap.svg`} alt="bottom_middle_place" />
                            </div>
                        </Link>
                        <Link to="/rondleiding/intensievezorg" className="content___tour__menu__item">
                            <img src={`${process.env.PUBLIC_URL}/svgs/tour/top_left_place.svg`} alt="bottom_middle_place" />
                            <div className="menu__item--icon">
                                <img src={`${process.env.PUBLIC_URL}/svgs/tour/icons/heart.svg`} alt="bottom_middle_place" />
                            </div>
                        </Link>
                    </div>

                </div>
            </main>
            {!isLandscape ? (<div className="rotate__device"><img src={`${process.env.PUBLIC_URL}/svgs/rotate_device2.svg`} alt="LOADING ..." /></div>) : ""}
        </div>
    )
}

export default ToursPage;