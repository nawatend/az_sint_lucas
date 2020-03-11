import React from 'react';

export default function Lives(props) {
  const { lives } = props;
  const hearts = [];

  for (let i = 0; i <= lives; i += 1) {
    hearts.push(<span key={i}><img className="virus__life" src={`${process.env.PUBLIC_URL}/svgs/games/virus/life.svg`} alt="" /></span>);
  }
  return (
    <p>{hearts}</p>
  );
}
