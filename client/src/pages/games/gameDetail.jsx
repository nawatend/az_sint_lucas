import React, { useEffect, useState } from 'react';
import GameLayout from '../../layouts/gameBase';
import { useParams } from "react-router-dom";
import { BodyGame, BagGame, MemoryGame, VirusGame } from '../../components/games/index'
import GameHand from '../../components/GameHand'
import Loading from '../../components/Loading'

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
            <div className="game__content">
                <div className="content__game">
                    {gameName === 'lichaam' &&
                        <BodyGame />
                    }
                    {gameName === 'virusspel' &&
                        <VirusGame />
                    }
                    {gameName === 'watneemikmee' &&
                        <BagGame />
                    }
                    {gameName === 'memory' &&
                        <MemoryGame />
                    }

                </div>
            </div>

            <GameHand />
            {!isLandscape ? (<div className="rotate__device"><img src={`${process.env.PUBLIC_URL}/svgs/rotate_device2.svg`} alt="" /></div>) : ""}
        </div >
    )
}
export default GameLayout(GameDetailPage);