import React from 'react'
import PoleItem from './PoleItem'


export default function Pole() {
    return (
        <div className="pole" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/svgs/home/pole.svg)` }}>

            <div className="pole__items">

                <PoleItem title="er" path="/rondleiding/spoed" />
                <PoleItem title="kids" path="/rondleiding/kinderafdeling" />
                <PoleItem title="lab" path="/rondleiding/lab" />
                <PoleItem title="radio" path="/rondleiding/radiologie" />
            </div>
        </div>
    )
}
