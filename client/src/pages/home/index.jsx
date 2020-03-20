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


let HomePage = () => {

    const [isLandscape, setIsLandscape] = useState(true)
    const [loading, setLoading] = useState(true)

    let exitRef = db.ref('/exit')

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
                <Lucas type="HI" />
                <Hospital />
                <Bunny />
                <Bush />
                <Pole />
                <Credit />
                <div className="welcome__text">Welkom bij <span>AZ Sint-Lucas!</span></div>
                {!isLandscape ? (<div className="rotate__device"><img src={`${process.env.PUBLIC_URL}/svgs/rotate_device2.svg`} alt="" /></div>) : ""}
            </div >
        )
    }

}

export default BaseLayout(HomePage);