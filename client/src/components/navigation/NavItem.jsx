import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function NavItem({ title = "", path, iconName }) {


    const [audio] = useState(new Audio(`${process.env.PUBLIC_URL}/audios/test4.mp3`));

    const playSound = () => {
        let currentSound = document.getElementById(`audio__${iconName}`)

        currentSound.play()
    }

    return (
        <Link onMouseEnter={() => playSound()} onTouchStart={() => playSound()} to={path} className="nav__item">
            <audio id={`audio__${iconName}`} src={`${window.location.origin}/audios/test4.mp3`} type="audio/mpeg" >
            </audio>
            <div className="nav__item--icon">
                <img src={`${window.location.origin}/svgs/nav/${iconName}.svg`} alt={iconName} />
            </div>
            <div className="nav__item--title">{title}</div>
        </Link>
    )
}
