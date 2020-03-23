import React, { useEffect, useState } from 'react'

export default function Bush() {


    useEffect(() => {

    }, [])

    return (
        <div onClick={() => {
            console.log('bush onClick')
        }} id="bush" className="bush_right_bottom">
            <img src={`${process.env.PUBLIC_URL}/svgs/bush_right_bottom.svg`} alt="Bush" />
        </div>
    )
}
