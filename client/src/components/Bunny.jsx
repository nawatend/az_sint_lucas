import React, { useEffect, useState } from 'react'

export default function Bunny() {


    useEffect(() => {

    }, [])

    return (
        <div onClick={() => {
            console.log('bunny onClick')
        }} className="bunny">
            <img src="/svgs/bunny_hi.svg" alt="bunny" />
        </div>
    )
}
