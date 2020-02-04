import React, { useEffect, useState } from 'react';
import FilmLayout from '../../layouts/filmBase';
import Vimeo from '@u-wave/react-vimeo';
import { useParams } from "react-router-dom";


const FilmDetailPage = ({ match }) => {

    let { id } = useParams()


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
        console.log(id)
    }, [id, match])

    return (
        <div className="page">
            Film Detail => {id}
            <div className="film__content">
                <div className="content__video">
                    <Vimeo
                        video={`https://vimeo.com/${id}`}
                        autoplay
                        responsive
                        color="ee7358"
                    />
                </div>
            </div>
            {!isLandscape ? (<div className="rotate__device"><img src="/svgs/rotate_device.svg" alt="" /></div>) : ""}
        </div >
    )
}
export default FilmLayout(FilmDetailPage);