import React, { useEffect, useState } from 'react'

export default function Hospital() {

    const [isOn, setIsOn] = useState(false)

    useEffect(() => {



    }, [])
    return (
        <div onClick={() => {
            console.log('wrapper onClick')
            setIsOn(!isOn)
        }} className="hospital">
            <img src={(isOn) ? "/svgs/hospital_on.svg" : "/svgs/hospital.svg"} alt="Hospital Building" />
        </div>
    )
}
