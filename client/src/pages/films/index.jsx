import React, { useEffect, useState } from 'react';
import BaseLayout from '../../layouts/base';
import NavigationDetail from '../../components/navigation/NavigationDetail'
import Vimeo from '@u-wave/react-vimeo';
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading'
import { checkSound } from '../../utils/SoundControl'

let FilmsPage = () => {

    let audios = ["films"]
    let films = [
        { title: "Lucas en de Fotodokter", id: "90773323" }
        , { title: "Lucas en de slaapdokter", id: "90773322" }
        , { title: "Lucas gaat intensief", id: "90012701" }
        , { title: "Lucas gaat naar het", id: "90016638" }
        , { title: "De spoedafdeling", id: "90013587" }
    ]

    const [isLandscape, setIsLandscape] = useState(true)
    const [loading, setLoading] = useState(true)

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

        setLoading(false)
    }, [isLandscape])

    useEffect(() => {
        checkSound()
    }, [])


    if (loading) {
        return (<Loading />)
    } else {
        return (
            <div className="background__main" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/svgs/backgrounds/bg_grass.svg)` }}>
                <NavigationDetail path="/filmpjes" iconName="films" />
                <audio
                    id={`audio__${audios[0]}`}
                    autoPlay
                    src={`https://firebasestorage.googleapis.com/v0/b/az-sint-lucas-gent.appspot.com/o/audios%2F${audios[0]}.mp3?alt=media&token=19366607-6109-4d6c-9582-324b20c35627`}
                    type="audio/mpeg" >
                </audio>

                <main className="page">
                    <div className="films__content">
                        {/* MAX 6 VIDEOS */}
                        {films.map(film => (
                            <div key={film.id} className="content__film">
                                <Vimeo
                                    video={`https://vimeo.com/${film.id}`}
                                    responsive
                                    color="ee7358"
                                    controls={false}
                                />
                                <Link to={`/filmpjes/${film.id}`} className="content__film--overlay"></Link>
                            </div>
                        ))}
                    </div>
                    <div onClick={() => {
                        console.log('popcorn onClick')
                    }} className="popcorn">
                        <img src={`${process.env.PUBLIC_URL}/svgs/film/popcorn.svg`} alt="Pop corn" />
                    </div>
                </main>
                {!isLandscape ? (<div className="rotate__device"><img src={`${process.env.PUBLIC_URL}/svgs/rotate_device2.svg`} alt="" /></div>) : ""}
            </div>
        )
    }
}

export default FilmsPage;