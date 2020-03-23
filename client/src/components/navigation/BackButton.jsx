import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function BackButton({ path, iconName = "back" }) {
    const [audio] = useState(new Audio(`${process.env.PUBLIC_URL}/audios/test4.mp3`));

    const playSound = () => {
        let currentSound = document.getElementById(`audio__back`)

        currentSound.play()
    }

    return (
        <Link onMouseEnter={() => playSound()} onTouchStart={() => playSound()} onClick={() => window.history.back()} className="nav__item">
            <audio id={`audio__back`} src={`${process.env.PUBLIC_URL}/audios/test4.mp3`} type="audio/mpeg" >
            </audio>
            <div className="nav__item--icon">
                <img src={`${process.env.PUBLIC_URL}/svgs/nav/${iconName}.svg`} alt={iconName} />
            </div>
        </Link>
    )
}
