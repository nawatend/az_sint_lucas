import React, { useEffect } from 'react'
import fitty from 'fitty'
export default function Lucas({ type, title = "" }) {


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

    switch (type) {
        case "HI":
            return (
                <div className={`lucas__${type}`}>
                    <img src={`${process.env.PUBLIC_URL}/svgs/lucas/lucas_hi.svg`} alt="Lucas Hi Svg" />
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
