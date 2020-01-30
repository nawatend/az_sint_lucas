import React from 'react'
import { Link } from 'react-router-dom'
import NavItem from './NavItem'

export default function Nagivation() {
    return (
        <nav>
            <div className="nav__main">
                <NavItem path="/rondleiding" iconName="tours" title="Rondleiding" />
                <NavItem path="/spelletjes" iconName="games" title="Spelletjes" />
                <NavItem path="/wieiswie" iconName="persons" title="Wie is wie?" />
                <NavItem path="/filmpjes" iconName="films" title="Filmpjes" />
            </div>
            <div className="nav__setting">

            </div>

        </nav>
    )
}
