import React from 'react'

export default function GameHand() {
    return (
        <div onClick={() => {
            console.log('game hand onClick')
        }} id="game__hand--detail" className="game__hand--detail">
            <img src={`${process.env.PUBLIC_URL}/svgs/games/game_hand.svg`} alt="Gaming Hand" />
        </div>
    )
}
