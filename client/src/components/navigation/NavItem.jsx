import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function NavItem({ title = "", path, iconName }) {
    console.log("window.location.origin =>" + window.location.origin)
    console.log("window.location.pathname =>" + window.location.pathname)
    console.log("process.env.PUBLIC_URL =>" + process.env.PUBLIC_URL)

    const [audio] = useState(new Audio(`${process.env.PUBLIC_URL}/audios/${iconName}.mp3`));

    const playSound = () => {
        let currentSound = document.getElementById(`audio__${iconName}`)

        currentSound.play()
    }

    return (
        <Link onMouseEnter={() => playSound()} onTouchStart={() => playSound()} to={path} className="nav__item">
            <audio id={`audio__${iconName}`} src={`${process.env.PUBLIC_URL}/audios/test0.mp3`} type="audio/mpeg" >
            </audio>
            <div className="nav__item--icon">
                <img src={`${process.env.PUBLIC_URL}/svgs/nav/${iconName}.svg`} alt={iconName} />
            </div>
            <div className="nav__item--title">{title}</div>
        </Link>
    )
}
