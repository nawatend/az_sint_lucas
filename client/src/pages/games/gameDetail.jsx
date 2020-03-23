import React, { useEffect, useState } from 'react';
import GameLayout from '../../layouts/gameBase';
import { useParams } from "react-router-dom";
import { BodyGame, BagGame, MemoryGame, VirusGame } from '../../components/games/index'
import GameHand from '../../components/GameHand'
import Loading from '../../components/Loading'
import { checkSound } from '../../utils/SoundControl'

const GameDetailPage = ({ match }) => {

    let { gameName } = useParams()

    //key based on url params, value is based on filename in firebase
    let audiosFileName = {
        memory: "memory",
        virusspel: "virus",
        watneemikmee: "bag",
        lichaam: "body",
    }
    let audios = [audiosFileName[gameName]]

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

    return (
        <div className="page">
            <div className="game__content">
                <div className="content__game">
                    <audio
                        id={`audio__${audios[0]}`}
                        autoPlay
                        src={`https://firebasestorage.googleapis.com/v0/b/az-sint-lucas-gent.appspot.com/o/audios%2F${audios[0]}.mp3?alt=media&token=19366607-6109-4d6c-9582-324b20c35627`}
                        type="audio/mpeg" >
                    </audio>
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