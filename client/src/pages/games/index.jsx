import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import NavigationDetail from '../../components/navigation/NavigationDetail'
import Loading from '../../components/Loading'

let GamesPage = () => {

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
        <div className="background__main" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/svgs/backgrounds/bg_grass.svg)` }}>
            <NavigationDetail path="/spelletjes" iconName="games" />
            <main className="page">
                <div className="games__content">
                    <div className="content__game__menu">
                        <Link to="/spelletjes/memory" className="content__game__menu__item">
                            <div className="game__title">memory</div>
                            <div id="hand-memory" className="game__hand"><img src={`${process.env.PUBLIC_URL}/svgs/games/hand_memory.svg`} alt=""  /></div>
                        </Link>
                        <Link to="/spelletjes/virusspel" className="content__game__menu__item">
                            <div className="game__title">virusspel</div>
                            <div id="hand-virus" className="game__hand"><img src={`${process.env.PUBLIC_URL}/svgs/games/hand_virus.svg`} alt=""  /></div>
                        </Link>
                        <Link to="/spelletjes/watneemikmee" className="content__game__menu__item">
                            <div className="game__title">wat neem ik mee</div>
                            <div id="hand-list" className="game__hand"><img src={`${process.env.PUBLIC_URL}/svgs/games/hand_list.svg`} alt=""  /></div>
                        </Link>
                        <Link to="/spelletjes/lichaam" className="content__game__menu__item">
                            <div className="game__title">het lichaam</div>
                            <div id="hand-body" className="game__hand"><img src={`${process.env.PUBLIC_URL}/svgs/games/hand_body.svg`} alt=""  /></div>
                        </Link>
                    </div>
                </div>
            </main>
            <div className="clouds">
                <div id="background-wrap">
                    <div className="x1">
                        <div className="cloud"></div>
                    </div>

                    <div className="x2">
                        <div className="cloud"></div>
                    </div>

                    <div className="x3">
                        <div className="cloud"></div>
                    </div>

                    <div className="x4">
                        <div className="cloud"></div>
                    </div>
                </div>
            </div>
            {!isLandscape ? (<div className="rotate__device"><img src={`${process.env.PUBLIC_URL}/svgs/rotate_device2.svg`} alt="" /></div>) : ""}
        </div >
    )
}

export default GamesPage