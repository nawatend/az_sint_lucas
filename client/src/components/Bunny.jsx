import React, { useEffect, useState } from 'react'

export default function Bunny() {


    let activateNBunny = () => {
        let bunny = document.getElementById('bunny')
        let bush = document.getElementById('bush')
        bunny.classList.toggle('bunny__active')
        bush.classList.toggle('bush__active')
    }
    useEffect(() => {

        setInterval(function () { activateNBunny() }, Math.floor((Math.random() * 10000) + 3000))
    }, [])

    return (
        <div onClick={() => {
            console.log('bunny onClick')
        }} id="bunny" className="bunny">
            <img src="/svgs/bunny_hi.svg" alt="bunny" />
        </div>
    )
}
