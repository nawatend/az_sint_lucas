import React, { useEffect, useState } from 'react';
import BaseLayout from '../../layouts/base';
import NavigationDetail from '../../components/navigation/NavigationDetail'
import Vimeo from '@u-wave/react-vimeo';
import { Link } from 'react-router-dom'
let FilmsPage = () => {


    let films = [
        { title: "Lucas en de Fotodokter", id: "90773323" }
        , { title: "Lucas en de slaapdokter", id: "90773322" }
        , { title: "Lucas gaat intensief", id: "90012701" }
        , { title: "Lucas gaat naar het", id: "90016638" }
        , { title: "De spoedafdeling", id: "90013587" }
    ]

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
        <div className="background__main" style={{ backgroundImage: `url(./svgs/backgrounds/bg_grass.svg)` }}>
            <NavigationDetail path="/filmpjes" iconName="films" />
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
                    <img src="/svgs/film/popcorn.svg" alt="Pop corn" />
                </div>
            </main>
            {!isLandscape ? (<div className="rotate__device"><img src="/svgs/rotate_device2.svg" alt="" /></div>) : ""}
        </div>
    );
}

export default FilmsPage;