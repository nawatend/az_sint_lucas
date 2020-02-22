import React, { Component, useEffect, useState } from 'react';
import BaseLayout from '../../layouts/base';
import Lucas from '../../components/Lucas'
import Hospital from '../../components/Hospital'

import Bunny from '../../components/Bunny'
import Bush from '../../components/Bush'
import Pole from '../../components/Pole'
import Loading from '../../components/Loading'



let HomePage = () => {

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


    if (loading) {
        return (<Loading />)
    } else {
        return (
            <div className="page">
                HOME
                <Lucas type="HI" />
                <Hospital />
                <Bunny />
                <Bush />
                <Pole />
                <div className="welcome__text">Welkom bij <span>AZ Sint-Lucas!</span></div>
                {!isLandscape ? (<div className="rotate__device"><img src="/svgs/rotate_device2.svg" alt="" /></div>) : ""}
            </div >
        )
    }

}

export default BaseLayout(HomePage);