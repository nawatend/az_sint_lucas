import React, { useEffect, useState } from 'react';
import FilmLayout from '../../layouts/filmBase';
import Vimeo from '@u-wave/react-vimeo';
import { useParams } from "react-router-dom";


const FilmDetailPage = ({ match }) => {

    let { id } = useParams()
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
        </div >
    )
}
export default FilmLayout(FilmDetailPage);