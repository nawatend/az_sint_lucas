import React from 'react';

export default function Intro(props) {
  const { game: { startGame, difficulty } } = props;
  let audios = ["easy", "normal", "hard"]

  const difficultyBtns = [];

  let playSound = (e) => {

    let currentSound = document.getElementById(`audio__${e.target.dataset.audio}`)
    if (currentSound) {
      currentSound.play()
    }
  }


  for (let i = 0; i < Object.keys(difficulty).length; i += 1) {
    difficultyBtns.push(<button onMouseEnter={(e) => playSound(e)} onTouchStart={(e) => playSound(e)} data-audio={audios[i]} key={i} type="button" className="btn"
      onClick={() => { startGame(Object.keys(difficulty)[i]); }}>{difficulty[Object.keys(difficulty)[i]].buttonText}</button>);
  }

  return (
    <div className="game__overlay">
      <h1>Virusspel</h1>

      <audio id={`audio__${audios[0]}`}  src={`https://firebasestorage.googleapis.com/v0/b/az-sint-lucas-gent.appspot.com/o/audios%2F${audios[0]}.mp3?alt=media&token=19366607-6109-4d6c-9582-324b20c35627`} type="audio/mpeg" ></audio>
      <audio id={`audio__${audios[1]}`}  src={`https://firebasestorage.googleapis.com/v0/b/az-sint-lucas-gent.appspot.com/o/audios%2F${audios[1]}.mp3?alt=media&token=19366607-6109-4d6c-9582-324b20c35627`} type="audio/mpeg" ></audio>
      <audio id={`audio__${audios[2]}`} src={`https://firebasestorage.googleapis.com/v0/b/az-sint-lucas-gent.appspot.com/o/audios%2F${audios[2]}.mp3?alt=media&token=19366607-6109-4d6c-9582-324b20c35627`} type="audio/mpeg" ></audio>


      <div className="game__virus__info">
        <img src={`${process.env.PUBLIC_URL}/svgs/games/virus/game_virus_info.svg`} alt="" />
      </div>
      <div className="btn__container">
        {difficultyBtns}
      </div>
    </div>
  );
}
