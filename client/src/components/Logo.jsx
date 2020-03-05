import React from 'react'

export default function Logo() {
    return (
        <div className="setting__item setting__logo">
            <a href="https://www.youtube.com">
                <img src={`${window.location.origin}/svgs/nav/logo.svg`} alt="logo link to main site" />
            </a>
        </div>
    )
}
