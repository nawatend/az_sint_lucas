import React, { useEffect, useState } from 'react'

export default function Loading() {

    const [Loading, setLoading] = useState(true)

    useEffect(() => {

    }, [])

    return (
        <div className="loading">
            <div className="loading__bunny">
                <img src={`${process.env.PUBLIC_URL}/svgs/loading.svg`} alt="Loading Bunny" />
                <img className="loading__wheel" src={`${process.env.PUBLIC_URL}/svgs/wheel.svg`} alt="Loading Wheel Bunny" />
            </div>
        </div>
    )
}
