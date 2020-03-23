import React, { useEffect } from 'react'

export default function Logo() {

    let audios = ["normal_site"]

    let handleOnClick = () => {
        let currentSound = document.getElementById(`audio__${audios[0]}`)
        currentSound.play()
    }

    return (
        <div onMouseEnter={() => handleOnClick()} onClick={() => handleOnClick()} className="setting__item setting__logo">
            <audio id={`audio__${audios[0]}`} src={`https://firebasestorage.googleapis.com/v0/b/az-sint-lucas-gent.appspot.com/o/audios%2F${audios[0]}.mp3?alt=media&token=19366607-6109-4d6c-9582-324b20c35627`} type="audio/mpeg" ></audio>
            <a href="https://www.azstlucasziekenhuis.be/">
                <img src={`${process.env.PUBLIC_URL}/svgs/nav/logo.svg`} alt="logo link to main site" />
            </a>
        </div>
    )
}
