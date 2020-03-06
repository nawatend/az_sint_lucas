import React from 'react'

export default function GameHand() {
    return (
        <div onClick={() => {
            console.log('game hand onClick')
        }} id="game__hand--detail" className="game__hand--detail">
            <img src={`${window.location.origin}/svgs/games/game_hand.svg`} alt="bunny" />
        </div>
    )
}
