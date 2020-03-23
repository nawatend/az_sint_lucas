import React, { useEffect } from 'react'
import fitty from 'fitty'
export default function Lucas({ type, title = "" }) {


    let audios = ["lucas_hi"]
    useEffect(() => {
        let fitties = fitty('.lucas__title--title', {
            minSize: 4,
            maxSize: 100
        })

        fitties.forEach(title => {
            title.fit()
            console.log('fited')
        });
    }, [])

    let playSound = (e) => {
        document.getElementById("lucas__wave").classList.toggle("wave")
        let currentSound = document.getElementById(`audio__${audios[0]}`)

        if (currentSound && localStorage.getItem("sound") === 'true') {
            currentSound.play()
        }
    }
    switch (type) {
        case "HI":
            return (
                <div onMouseEnter={(e) => playSound(e)} onTouchStart={(e) => playSound(e)} onClick={(e) => playSound(e)} data-audio="lucas_hi" className={`lucas__${type}`}>
                    <audio id={`audio__${audios[0]}`} src={`https://firebasestorage.googleapis.com/v0/b/az-sint-lucas-gent.appspot.com/o/audios%2F${audios[0]}.mp3?alt=media&token=19366607-6109-4d6c-9582-324b20c35627`} type="audio/mpeg" ></audio>
                    <img id="lucas__wave" className={`lucas__${type}--hand`} src={`${process.env.PUBLIC_URL}/svgs/lucas/lucas_hand.svg`} alt="Lucas Hi Hand Svg" />
                    <img src={`${process.env.PUBLIC_URL}/svgs/lucas/lucas_hi2.svg`} alt="Lucas Hi Svg" />
                </div>
            )

        case "SICK":
            return (
                <div className={`lucas__${type}`}>
                    <img src={`${process.env.PUBLIC_URL}/svgs/lucas/lucas_sick.svg`} alt="Lucas Hi Svg" />
                </div>
            )

        case "LOOK":
            return (
                <div className={`lucas__${type}`}>
                    <img src={`${process.env.PUBLIC_URL}/svgs/lucas/lucas_look_0.svg`} alt="Lucas Hi Svg" />
                    <div className="lucas__title">
                        <div className="lucas__title--title">
                            {title}
                        </div>
                    </div>
                </div>
            )

        case "BYE":
            return (
                <div className={`lucas__${type}`}>
                    <img src={`${process.env.PUBLIC_URL}/svgs/lucas/lucas_bye.svg`} alt="Lucas Hi Svg" />
                </div>
            )

        default:
            return (
                <div className={`lucas__${type}`}>
                    <img src={`${process.env.PUBLIC_URL}/svgs/lucas/lucas_bye.svg`} alt="Lucas Hi Svg" />
                </div>
            )

    }
}
