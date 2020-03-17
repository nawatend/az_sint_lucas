import React from 'react'

function Finished (){
    const resetGame = () =>{
        console.log('tet')
    }
    return (
            <div id="start" className="game__body--labels" >
                <img className="whole__body--labels" src="/svgs/games/memory/finished.svg" alt="Reset Game" onClick={() => resetGame()}/>
            </div>
    )
}
export default Finished