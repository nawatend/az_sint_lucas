import React, { useEffect, useState } from 'react'

export default function Sound() {

    const [isSoundOn, setIsSoundOn] = useState(true)

    return (
        <div onClick={() => {
            console.log('Sound onClick')
            setIsSoundOn(!isSoundOn)
        }} className="setting__item setting__sound">
            <img src={(isSoundOn) ? "/svgs/nav/sound_on.svg" : "/svgs/nav/sound_off.svg"} alt="Sound Setting" />
        </div>
    )
}
