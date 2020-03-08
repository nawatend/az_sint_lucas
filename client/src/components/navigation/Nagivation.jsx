import React from 'react'
import { Link } from 'react-router-dom'
import NavItem from './NavItem'
import Sound from '../Sound'
import Logo from '../Logo'

export default function Nagivation() {

    return (
        <nav id="nav-main">
            <div className="nav__main">
                <NavItem path="/rondleiding" iconName="tours" title="rondleiding" />
                <NavItem path="/spelletjes" iconName="games" title="spelletjes" />
                <NavItem path="/wieiswie" iconName="persons" title="wie is wie?" />
                <NavItem path="/filmpjes" iconName="films" title="filmpjes" />
            </div>
            <div className="nav__setting">
                <Logo />
                <Sound />
            </div>

        </nav>
    )
}
