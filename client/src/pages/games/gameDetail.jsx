import React, { useEffect, useState } from 'react';
import GameLayout from '../../layouts/gameBase';
import { useParams } from "react-router-dom";


const GameDetailPage = ({ match }) => {

    let { gameName } = useParams()


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
        console.log(gameName)
    }, [gameName, match])

    return (
        <div className="page">
            Film Detail => {gameName}
            <div className="game__content">
                <div className="content__game">
                    Film Detail => {gameName}
                </div>
            </div>
            {!isLandscape ? (<div className="rotate__device"><img src="/svgs/rotate_device.svg" alt="" /></div>) : ""}
        </div >
    )
}
export default GameLayout(GameDetailPage);