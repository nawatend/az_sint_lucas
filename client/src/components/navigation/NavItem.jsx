import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function NavItem({ title = "", path, iconName }) {


    const [audio] = useState(new Audio('/audios/test4.mp3'));


    return (
        <Link onMouseEnter={() => audio.play()} to={path} className="nav__item">
            <div className="nav__item--icon">
                <img src={`/svgs/nav/${iconName}.svg`} alt={iconName} />
            </div>
            <div className="nav__item--title">{title}</div>
        </Link>
    )
}
