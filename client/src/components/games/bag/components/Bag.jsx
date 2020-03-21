import React ,{ useEffect, useState } from 'react';

function Bag (props) {
    const correct = ['sweatshirt','book','brush','towel','socks','phone'];
    const [score, setScore] = useState(0)
    let finished = false;
    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';
        
        e.target.appendChild(card);
        let book = card_id
        if(correct.includes(card.id)){
            console.log('correct')
            let item = 'bag' + card.id
            console.log(item)
            let bag = document.getElementById(item);
            bag.style.display = "block"
            setScore(score + 1)
            console.log(score)
            card.setAttribute('finished', true)
            checkScore(score)
        }else{
            console.log('no match')
            const card = document.getElementById(book);
            const wrong = document.getElementById('wrong' + book)
                  console.log(card)
                  if(card.id == "dog"){
                      var div = document.getElementById('board-2');
                  }else if(card.id == "tv"){
                      var div = document.getElementById('board-3');
                  }else if(card.id == "skateboard"){
                      var div = document.getElementById('board-4');
                  }
                  card.setAttribute('draggable',false)
                  card.setAttribute('finished',true)
                  card.classList.remove("organs");
                  wrong.classList.remove('hide');
                  div.appendChild(card);
      
        }

    }
    const dragOver = e => {
        e.preventDefault();
    }

    let checkScore = (score) => {
        if(score == 5){
            setScore(0)
            var game = document.querySelector(".flexbox")
            var title = document.querySelector('.title')
            var div = document.getElementById('finishedbag')
            game.style.display = "none"
            title.classList.add('hide')
            div.classList.remove('hide')
            finished = true;
        }
    }

    return (
        <div 
        id={props.id}
        className={props.className}
        onDrop={drop}
        onDragOver={dragOver}
        >
            {props.children}
        </div>
    )
}
export default Bag