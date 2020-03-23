import React, { useEffect, useState } from 'react'

export default function Bunny() {

    let audios = ["lap_hi"]
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

    let handleOnClick = () => {
        let currentSound = document.getElementById(`audio__${audios[0]}`)
        if (currentSound && localStorage.getItem("sound") === 'true') {
            currentSound.play()
        }
    }

    return (
        <div onClick={() => handleOnClick()} onMouseEnter={() => handleOnClick()} id="bunny" className="bunny">
            <audio id={`audio__${audios[0]}`} src={`https://firebasestorage.googleapis.com/v0/b/az-sint-lucas-gent.appspot.com/o/audios%2F${audios[0]}.mp3?alt=media&token=19366607-6109-4d6c-9582-324b20c35627`} type="audio/mpeg" ></audio>
            <img src={`${process.env.PUBLIC_URL}/svgs/bunny_hi.svg`} alt="bunny" />
        </div>
    )
}
