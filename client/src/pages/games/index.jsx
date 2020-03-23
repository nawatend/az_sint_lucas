import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import NavigationDetail from '../../components/navigation/NavigationDetail'
import Loading from '../../components/Loading'
import { checkSound } from '../../utils/SoundControl'

let GamesPage = () => {
    let audios = ["games", 'memory', "virus", "bag", "body"]

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

    let playSound = (e) => {
        console.log(e.target)
        let currentSound = document.getElementById(`audio__${e.target.dataset.audio}`)
        if (currentSound && localStorage.getItem("sound") === 'true') {
            currentSound.play()
        }
    }

    useEffect(() => {
        checkSound()
    }, [])

    return (
        <div className="background__main" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/svgs/backgrounds/bg_grass.svg)` }}>
            <NavigationDetail path="/spelletjes" iconName="games" />
            <audio id={`audio__${audios[0]}`} autoPlay src={`https://firebasestorage.googleapis.com/v0/b/az-sint-lucas-gent.appspot.com/o/audios%2F${audios[0]}.mp3?alt=media&token=19366607-6109-4d6c-9582-324b20c35627`} type="audio/mpeg" ></audio>

            <main className="page">
                <div className="games__content">
                    <div className="content__game__menu">
                        <Link to="/spelletjes/memory" className="content__game__menu__item" onMouseEnter={(e) => playSound(e)} onTouchStart={(e) => playSound(e)} data-audio={audios[1]}>
                            <audio id={`audio__${audios[1]}`}
                                src={`https://firebasestorage.googleapis.com/v0/b/az-sint-lucas-gent.appspot.com/o/audios%2F${audios[1]}.mp3?alt=media&token=19366607-6109-4d6c-9582-324b20c35627`}
                                type="audio/mpeg" >
                            </audio>
                            <div data-audio={audios[1]} className="game__title">memory</div>
                            <div data-audio={audios[1]} id="hand-memory" className="game__hand"><img data-audio={audios[1]} src={`${process.env.PUBLIC_URL}/svgs/games/hand_memory.svg`} alt="" /></div>
                        </Link>
                        <Link onMouseEnter={(e) => playSound(e)} onTouchStart={(e) => playSound(e)} data-audio={audios[2]} to="/spelletjes/virusspel" className="content__game__menu__item">
                            <audio id={`audio__${audios[2]}`}
                                src={`https://firebasestorage.googleapis.com/v0/b/az-sint-lucas-gent.appspot.com/o/audios%2F${audios[2]}.mp3?alt=media&token=19366607-6109-4d6c-9582-324b20c35627`}
                                type="audio/mpeg" >
                            </audio>
                            <div data-audio={audios[2]} className="game__title">virusspel</div>
                            <div data-audio={audios[2]} id="hand-virus" className="game__hand"><img data-audio={audios[2]} src={`${process.env.PUBLIC_URL}/svgs/games/hand_virus.svg`} alt="" /></div>
                        </Link>
                        <Link onMouseEnter={(e) => playSound(e)} onTouchStart={(e) => playSound(e)} data-audio={audios[3]} to="/spelletjes/watneemikmee" className="content__game__menu__item">
                            <audio id={`audio__${audios[3]}`}
                                src={`https://firebasestorage.googleapis.com/v0/b/az-sint-lucas-gent.appspot.com/o/audios%2F${audios[3]}.mp3?alt=media&token=19366607-6109-4d6c-9582-324b20c35627`}
                                type="audio/mpeg" >
                            </audio>
                            <div data-audio={audios[3]} className="game__title">wat neem ik mee</div>
                            <div data-audio={audios[3]} id="hand-list" className="game__hand"><img data-audio={audios[3]} src={`${process.env.PUBLIC_URL}/svgs/games/hand_list.svg`} alt="" /></div>
                        </Link>
                        <Link onMouseEnter={(e) => playSound(e)} onTouchStart={(e) => playSound(e)} data-audio={audios[4]} to="/spelletjes/lichaam" className="content__game__menu__item">
                            <audio id={`audio__${audios[4]}`}
                                src={`https://firebasestorage.googleapis.com/v0/b/az-sint-lucas-gent.appspot.com/o/audios%2F${audios[4]}.mp3?alt=media&token=19366607-6109-4d6c-9582-324b20c35627`}
                                type="audio/mpeg" >
                            </audio>
                            <div data-audio={audios[4]} className="game__title">het lichaam</div>
                            <div data-audio={audios[4]} id="hand-body" className="game__hand"><img data-audio={audios[4]} src={`${process.env.PUBLIC_URL}/svgs/games/hand_body.svg`} alt="" /></div>
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