import React, { useEffect, useState } from 'react'

export default function Sound() {

    const [isSoundOn, setIsSoundOn] = useState(true)


    useEffect(() => {
        let sound = (localStorage.getItem("sound") === 'true');
        (sound) ? unmuteAudio() : muteAudio()
        setIsSoundOn(sound)
    }, [])

    const muteAudio = () => {
        let sounds = document.getElementsByTagName('audio');
        for (let j = 0; j < sounds.length; j++) {
            sounds[j].muted = true
            console.log('muted')
        }
    }

    const unmuteAudio = () => {
        let sounds = document.getElementsByTagName('audio');
        for (let j = 0; j < sounds.length; j++) {
            sounds[j].muted = false
            console.log('unmuted')
        }
    }

    return (
        <div onClick={() => {
            localStorage.setItem('sound', !isSoundOn);
            (isSoundOn) ? muteAudio() : unmuteAudio()
            setIsSoundOn(!isSoundOn)


        }} className="setting__item setting__sound">
            <img src={(isSoundOn) ? `${process.env.PUBLIC_URL}/svgs/nav/sound_on.svg` : `${process.env.PUBLIC_URL}/svgs/nav/sound_off.svg`} alt="Sound Setting" />
        </div>
    )
}
