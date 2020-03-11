import React from 'react';
import { Link } from 'react-router-dom'

export default function GameOver(props) {
  const { score } = props;
  return (
    <div className="game__overlay">
      <h1>GAME OVER!</h1>
      <div className="game__virus__end">
        <img src={`${process.env.PUBLIC_URL}/svgs/games/virus/game_virus_end.svg`} alt="" />
      </div>
      <div className="game__virus__score">
        <h2>SCORE</h2>
        <div className="score__count">{score}</div>
      </div>
      <div className="btn__container">
        <Link to="/spelletjes/virusspel" onClick={() => window.location.reload()} className="btn">Speel opnieuw
        </Link>

        <Link to="/spelletjes" className="btn">Ga terug
        </Link>
      </div>
    </div>
  );
}
