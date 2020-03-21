import React from 'react'

export default function Logo() {
    return (
        <div className="setting__item setting__logo">
            <a href="https://www.azstlucasziekenhuis.be/">
                <img src={`${process.env.PUBLIC_URL}/svgs/nav/logo.svg`} alt="logo link to main site" />
            </a>
        </div>
    )
}
