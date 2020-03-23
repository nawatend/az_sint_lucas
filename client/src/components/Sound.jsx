import React, { useEffect, useState } from 'react'

export default function Sound() {

    let audios = ["sound_off"]
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

    let handleOnClick = () => {
        let currentSound = document.getElementById(`audio__${audios[0]}`)
        currentSound.play()
    }

    return (
        <div
            onClick={() => {

                localStorage.setItem('sound', !isSoundOn);
                (isSoundOn) ? muteAudio() : unmuteAudio()
                setIsSoundOn(!isSoundOn)
            }}

            onMouseEnter={() => handleOnClick()}
            className="setting__item setting__sound">

            <audio id={`audio__${audios[0]}`} src={`https://firebasestorage.googleapis.com/v0/b/az-sint-lucas-gent.appspot.com/o/audios%2F${audios[0]}.mp3?alt=media&token=19366607-6109-4d6c-9582-324b20c35627`} type="audio/mpeg" ></audio>
            <img src={(isSoundOn) ? `${process.env.PUBLIC_URL}/svgs/nav/sound_on.svg` : `${process.env.PUBLIC_URL}/svgs/nav/sound_off.svg`} alt="Sound Setting" />
        </div>
    )
}
