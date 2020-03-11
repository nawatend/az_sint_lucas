import React, { useEffect, useState } from 'react'

export default function Bunny() {


    let activateNBunny = () => {
        let bunny = document.getElementById('bunny')
        let bush = document.getElementById('bush')
        if (bunny !== null && bush !== null) {
            bunny.classList.toggle('bunny__active')
            bush.classList.toggle('bush__active')
        }

    }
    useEffect(() => {

        setInterval(function () { activateNBunny() }, Math.floor((Math.random() * 13000) + 3000))
    }, [])

    return (
        <div onClick={() => {
            console.log('bunny onClick')
        }} id="bunny" className="bunny">
            <img src={`${process.env.PUBLIC_URL}/svgs/bunny_hi.svg`} alt="bunny" />
        </div>
    )
}
