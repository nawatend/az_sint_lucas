import React, { Component, useEffect, useState } from 'react';
import BaseLayout from '../../layouts/base';
import Lucas from '../../components/Lucas'
import Hospital from '../../components/Hospital'

import Bunny from '../../components/Bunny'
import Bush from '../../components/Bush'
import Pole from '../../components/Pole'
import Loading from '../../components/Loading'
import Credit from '../../components/Credit'
//firebase
import { db } from '../../utils/firebase'
import { checkSound } from '../../utils/SoundControl'

let HomePage = () => {

    const [isLandscape, setIsLandscape] = useState(true)
    const [loading, setLoading] = useState(true)

    let audios = ["welcome"]

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
            <div className="page">

                <Lucas type="HI" />
                <Hospital />
                <Bunny />
                <Bush />
                <Pole />
                <Credit />
                <audio 
                id={`audio__${audios[0]}`} 
                autoPlay={(localStorage.getItem("sound") === 'true') ? true : false}
                src={`https://firebasestorage.googleapis.com/v0/b/az-sint-lucas-gent.appspot.com/o/audios%2F${audios[0]}.mp3?alt=media&token=19366607-6109-4d6c-9582-324b20c35627`} type="audio/mpeg" ></audio>
                <div className="welcome__text">Welkom bij <span>AZ Sint-Lucas!</span></div>
                {!isLandscape ? (<div className="rotate__device"><img src={`${process.env.PUBLIC_URL}/svgs/rotate_device2.svg`} alt="" /></div>) : ""}
            </div >
        )
    }

}

export default BaseLayout(HomePage);