import React from 'react';

export default function Intro(props) {
  const { game: { startGame, difficulty } } = props;

  const difficultyBtns = [];

  for (let i = 0; i < Object.keys(difficulty).length; i += 1) {
    difficultyBtns.push(<button key={i} type="button" className="btn" onClick={() => { startGame(Object.keys(difficulty)[i]); }}>{difficulty[Object.keys(difficulty)[i]].buttonText}</button>);
  }

  return (
    <div className="game__overlay">
      <h1>Virusspel</h1>

      <div className="game__virus__info">
        <img src={`${process.env.PUBLIC_URL}/svgs/games/virus/game_virus_info.svg`} alt=""/>
      </div>
      <div className="btn__container">
        {difficultyBtns}
      </div>
    </div>
  );
}
