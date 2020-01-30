import React from 'react'
import PoleItem from './PoleItem'


export default function Pole() {
    return (
        <div className="pole" style={{ backgroundImage: `url(/svgs/home/pole.svg)` }}>

            <div className="pole__items">

                <PoleItem title="er" path="/rondleiding/spoed" />
                <PoleItem title="kids" path="/rondleiding/kindafdeling" />
                <PoleItem title="lab" path="/rondleiding/labo" />
                <PoleItem title="radio" path="/rondleiding/radioloog" />
            </div>
        </div>
    )
}
