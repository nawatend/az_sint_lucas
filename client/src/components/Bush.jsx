import React, { useEffect, useState } from 'react'

export default function Bush() {


    useEffect(() => {

    }, [])

    return (
        <div onClick={() => {
            console.log('bush onClick')
        }} className="bush_right_bottom">
            <img src="/svgs/bush_right_bottom.svg" alt="Bush" />
        </div>
    )
}
