import React from 'react';
import { Link } from 'react-router-dom'

export default function GameOver(props) {
  const { score } = props;
  return (
    <div className="game__overlay">
      <h1>Geen levens meer!</h1>
      <p>
        Je hebt een score van
        {' '}
        {score}
        {' '}
        punten gehaald!
      </p>
      <div className="btn__container">
        <Link to="/spelletjes/virusspel" className="btn">Speel opnieuw
        </Link>

        <Link to="/spelletjes" className="btn">Ga terug
        </Link>

      </div>
    </div>
  );
}
