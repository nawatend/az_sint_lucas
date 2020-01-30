import React from 'react'

export default function Lucas({ type }) {

    switch (type) {
        case "HI":
            return (
                <div className={`lucas__${type}`}>
                    <img src="/svgs/lucas/lucas_hi.svg" alt="Lucas Hi Svg" />
                </div>
            )

        case "SICK":
            return (
                <div className={`lucas__${type}`}>
                    <img src="/svgs/lucas/lucas_sick.svg" alt="Lucas Hi Svg" />
                </div>
            )

        case "LOOK":
            return (
                <div className={`lucas__${type}`}>
                    <img src="/svgs/lucas/lucas_look.svg" alt="Lucas Hi Svg" />
                </div>
            )

        case "BYE":
            return (
                <div className={`lucas__${type}`}>
                    <img src="/svgs/lucas/lucas_bye.svg" alt="Lucas Hi Svg" />
                </div>
            )


        default:
            return (
                <div className={`lucas__${type}`}>
                    <img src="/svgs/lucas/lucas_bye.svg" alt="Lucas Hi Svg" />
                </div>
            )

    }
}
