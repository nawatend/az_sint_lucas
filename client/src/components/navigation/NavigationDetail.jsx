import React from 'react'
import { Link } from 'react-router-dom'
import NavItem from './NavItem'
import Sound from '../Sound'
import Logo from '../Logo'
import BackButton from '../navigation/BackButton'
export default function NagivationDetail({ path, iconName }) {
    return (
        <nav id="nav-detail">
            <div className="nav__detail">
                <NavItem path={path} iconName={iconName} />
                <NavItem path="/" iconName="home" />
                <BackButton path="/" />
            </div>
            <div className="nav__setting">
                <Logo />
                <Sound />
            </div>
        </nav>
    )
}
