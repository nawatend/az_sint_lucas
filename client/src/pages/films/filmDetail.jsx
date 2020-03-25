import React, { useEffect, useState } from 'react';
import FilmLayout from '../../layouts/filmBase';
import Vimeo from '@u-wave/react-vimeo';
import { useParams } from "react-router-dom";
import Loading from '../../components/Loading'
import { checkSound } from '../../utils/SoundControl'

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
        checkSound()
    }, [])

    return (
        <div className="page">
            <div className="film__content">
                <div className="content__video">
                    <Vimeo
                        video={`https://vimeo.com/${id}`}

                        responsive
                        color="ee7358"
                    />
                </div>
            </div>


            {!isLandscape ? (<div className="rotate__device"><img src={`${process.env.PUBLIC_URL}/svgs/rotate_device2.svg`} alt="" /></div>) : ""}

        </div >
    )
}
export default FilmLayout(FilmDetailPage);