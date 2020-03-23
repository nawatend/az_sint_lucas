import React, { useEffect, useState } from 'react'
import ReactDOM, { render } from 'react-dom';
import Card from './components/Card';
import Bag from './components/Bag';
import Board from './components/Board';
import { Link } from 'react-router-dom'
export default function BagGame() {

  const [labelSelected, setLabelSelected] = useState()
  const [organSelected, setOrganSelected] = useState()
  const [score, setScore] = useState(0)
  let finished = false; 
  const correct = ['sweatshirt','book','brush','towel','socks','phone'];
  const items = ['sweatshirt','book','brush','towel','socks','phone', 'tv','skateboard','dog'];
  const selectBag = (e) => {
    const bag = e.target.parentNode.dataset.organ
    setOrganSelected(bag)
    //console.log(bag)
    //console.log('select bag')
    //console.log(organSelected)
    if(labelSelected !== undefined){
      setOrganSelected(bag)
      checkMatch(labelSelected)
    }else{
      setOrganSelected(bag)
    }
  }
  const selectItem = (e) => {
    const item = e.target.parentNode.dataset.organ
    //console.log(item)
    setLabelSelected(item)
    let itemselected = document.getElementById(item)
    itemselected.classList.add('selected')
    //console.log(organSelected)
    if(organSelected == 'bag'){
      setLabelSelected(item)
      checkMatch(item)
      }else{
        setLabelSelected(item)
      }
    }

  let checkMatch = (item) => {
    //console.log('checking')
    //console.log(item)
    let book = item
    if (correct.includes(book)){
      //console.log(book)
      let itembag = 'bag' + book 
      //console.log(itembag)
      let organ = document.getElementById(itembag);
      organ.style.display = "block"
      organ.setAttribute('finished', true)
      document.getElementById(book).classList.add('hide')
      setOrganSelected(undefined)
      setLabelSelected(undefined)
      
      console.log(score)
      setScore(score + 1)
      checkFinished(score)
    } else {
      //console.log('no match')
      const card = document.getElementById(book);
      const wrong = document.getElementById('wrong' + book)
            //console.log(card)
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
            let itemselected = document.getElementById(book)
            itemselected.classList.remove('selected')
      setLabelSelected(undefined)
      setOrganSelected(undefined)
    }
  }
  const checkFinished = (score) => {
      if(score == 5){
          //console.log('finished')
          var game = document.querySelector(".flexbox")
          var title = document.querySelector('.title')
          var div = document.getElementById('finishedbag')
          game.style.display = "none"
          title.classList.add('hide')
          div.classList.remove('hide')
          finished = true;
  }
  }

  const restart = ()=> {
    
    setScore(0);

    
    for (var i = 0, len = items.length; i < len; i++) {
      someFn(items[i]);
      }

      var div = document.getElementById('finishedbag')
      div.classList.add('hide')
      var title = document.querySelector('.title')
      title.classList.remove('hide')
      var game = document.querySelector('.flexbox')
      game.style.display = "flex"
  }

  const someFn = (item) => {
    var card = document.getElementById(item)
    if(card.id== 'dog'){
      document.getElementById('wrongdog').classList.add('hide')
    }else if(card.id== 'tv'){
      document.getElementById('wrongtv').classList.add('hide')
    }
    else if(card.id== 'skateboard'){
      document.getElementById('wrongskateboard').classList.add('hide')
    }
    if(card.id == "dog" || card.id == "sweatshirt" || card.id == "book"){
        var div = document.getElementById('board-2');
    }else if(card.id == "tv" || card.id == "brush" || card.id == "towel"){
        var div = document.getElementById('board-3');
    }else if(card.id == "skateboard" || card.id == "socks" || card.id == "phone"){
        var div = document.getElementById('board-4');
    }
    
    if(card.id != "dog" && card.id != "tv" && card.id != "skateboard" ){
            card.classList.remove('hide')
            card.classList.remove('selected')
            let itembag = 'bag' + card.id
            console.log(itembag)
            let bag = document.getElementById(itembag);
            console.log(bag)
            bag.style.display = 'none'
    }


    card.setAttribute('draggable',true)
    card.setAttribute('finished',false)
    card.classList.remove("false");
    card.classList.add("card");
    div.appendChild(card);
}

const stopPlaying = () => {

}
      return (
          <div className="bagGame">
              <div className="title">
                <h2>Wat neem ik mee?</h2>
                <h5>Kies de juiste benodigdheden voor in de zak.</h5>
            </div>
          
          <main className="flexbox">
          
                <Bag id="board-1" className="board">               
                <div className="bag" onClick={(e) => selectBag(e)}>
                <svg id="bagsvg" data-organ="bag" onClick={(e) => selectBag(e)} xmlns="http://www.w3.org/2000/svg" width="285.591" height="336.687" viewBox="0 0 285.591 336.687">
  <defs>
    <clipPath id="clip-path">
      <path id="Path_32" data-name="Path 32" d="M-196.553,170.268a23.494,23.494,0,0,1-11.909,5.455c-7.379,1.1-8.645,14.634-19.268,12.734s-31.387,21.766-21.421,26.429,5.013,14.729,16.642,9.276,16.587-20.452,20.251-21.352,12.233-.153,17.591-2.426a79.817,79.817,0,0,1,13.044-3.777Z" fill="none"/>
    </clipPath>
  </defs>
  <g data-organ="bag"  id="Group_78" data-name="Group 78" transform="translate(350.281 -91.179)">
    <rect id="Rectangle_3" data-name="Rectangle 3" width="272.386" height="262.18" transform="translate(-341.575 125.677)" fill="#312411"/>
    <g id="bagbrush"className="fullbag">
      <path id="Path_1" data-name="Path 1" d="M-270.918,152.723c.014.095,1.4,9.546,1.7,15.608a13.741,13.741,0,0,1-.241,3.922c-.159.637-.3,1.272-.437,1.9.359-.188.827-.1,1.232,1.05.785,2.24.962,47.154-.285,49.2-1.146,1.879-2.093,1.893-2.471-.641l-.065,6.129A1.5,1.5,0,0,0-270,231.41l.9.01a1.641,1.641,0,0,0,1.657-1.622l.491-46.105a45.314,45.314,0,0,1,1.413-10.459,17.9,17.9,0,0,0,.357-5.1c-.184-3.742-.75-8.587-1.187-11.963a4,4,0,0,0-4.554-3.446Z" fill="#56b8c4"/>
      <path id="Path_2" data-name="Path 2" d="M-275.053,167.325s4.664.685,6.362-2.78c0,0,1.588-6.36-.347-10.293,0,0-2.631-3.1-5.379-2.323Z" fill="#d5d5d3"/>
      <ellipse id="Ellipse_1" data-name="Ellipse 1" cx="7.684" cy="1.503" rx="7.684" ry="1.503" transform="translate(-276.694 167.241) rotate(-87.378)" fill="#fcf9f4"/>
      <path id="Path_3" data-name="Path 3" d="M-269.893,174.158q-.39,1.836-.644,3.638a45.723,45.723,0,0,0-.452,5.854l-.059,5.511c.507-.511.942-.765,1.171-.625.429.262-.033,1.8-1.032,3.437-.057.093-.114.184-.172.274l-.108,10.108c.49-.484.909-.721,1.131-.585.429.262-.033,1.8-1.031,3.437-.044.072-.088.141-.132.21l-.081,7.524c.645-.748,1.226-1.154,1.5-.985.429.262-.033,1.8-1.032,3.437-.165.271-.335.526-.505.764l-.081,7.607c.378,2.534,1.325,2.52,2.471.641,1.247-2.043,1.07-46.957.285-49.2C-269.066,174.054-269.534,173.97-269.893,174.158Z" fill="#a2d7e4"/>
      <path id="Path_4" data-name="Path 4" d="M-269.8,211.956c-.277-.169-.858.237-1.5.985l-.013,1.276-.021,1.94c.17-.238.34-.493.505-.764C-269.832,213.756-269.37,212.218-269.8,211.956Z" fill="#56b8c4"/>
      <path id="Path_5" data-name="Path 5" d="M-270.058,201.77c-.222-.136-.641.1-1.131.585l-.032,3.062c.044-.069.088-.138.132-.21C-270.091,203.571-269.629,202.032-270.058,201.77Z" fill="#56b8c4"/>
      <path id="Path_6" data-name="Path 6" d="M-269.877,188.536c-.229-.14-.664.114-1.171.625l-.033,3.086c.058-.09.115-.181.172-.274C-269.91,190.336-269.448,188.8-269.877,188.536Z" fill="#56b8c4"/>
      <ellipse id="Ellipse_2" data-name="Ellipse 2" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-276.1 164.029) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_3" data-name="Ellipse 3" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.675 163.959) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_4" data-name="Ellipse 4" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.221 163.775) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_5" data-name="Ellipse 5" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-274.725 163.631) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_6" data-name="Ellipse 6" cx="0.607" cy="0.185" rx="0.607" ry="0.185" transform="matrix(0.151, -0.989, 0.989, 0.151, -274.335, 164.682)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_7" data-name="Ellipse 7" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-276.183 162.655) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_8" data-name="Ellipse 8" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.758 162.585) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_9" data-name="Ellipse 9" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.304 162.402) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_10" data-name="Ellipse 10" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-274.808 162.257) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_11" data-name="Ellipse 11" cx="0.607" cy="0.185" rx="0.607" ry="0.185" transform="matrix(0.151, -0.989, 0.989, 0.151, -274.418, 163.309)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_12" data-name="Ellipse 12" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-276.091 161.211) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_13" data-name="Ellipse 13" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.667 161.141) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_14" data-name="Ellipse 14" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.213 160.958) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_15" data-name="Ellipse 15" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-274.716 160.813) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_16" data-name="Ellipse 16" cx="0.607" cy="0.185" rx="0.607" ry="0.185" transform="matrix(0.151, -0.989, 0.989, 0.151, -274.326, 161.865)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_17" data-name="Ellipse 17" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-276.133 159.824) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_18" data-name="Ellipse 18" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.708 159.754) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_19" data-name="Ellipse 19" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.254 159.57) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_20" data-name="Ellipse 20" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-274.758 159.426) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_21" data-name="Ellipse 21" cx="0.607" cy="0.185" rx="0.607" ry="0.185" transform="matrix(0.151, -0.989, 0.989, 0.151, -274.368, 160.477)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_22" data-name="Ellipse 22" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-276.07 158.46) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_23" data-name="Ellipse 23" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.646 158.39) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_24" data-name="Ellipse 24" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.192 158.207) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_25" data-name="Ellipse 25" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-274.696 158.062) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_26" data-name="Ellipse 26" cx="0.607" cy="0.185" rx="0.607" ry="0.185" transform="matrix(0.151, -0.989, 0.989, 0.151, -274.306, 159.114)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_27" data-name="Ellipse 27" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-276.034 157.042) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_28" data-name="Ellipse 28" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.609 156.972) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_29" data-name="Ellipse 29" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.155 156.788) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_30" data-name="Ellipse 30" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-274.659 156.643) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_31" data-name="Ellipse 31" cx="0.607" cy="0.185" rx="0.607" ry="0.185" transform="matrix(0.151, -0.989, 0.989, 0.151, -274.269, 157.695)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_32" data-name="Ellipse 32" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.783 155.596) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_33" data-name="Ellipse 33" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-275.359 155.526) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_34" data-name="Ellipse 34" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-274.904 155.342) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_35" data-name="Ellipse 35" cx="0.185" cy="0.607" rx="0.185" ry="0.607" transform="translate(-274.408 155.197) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_36" data-name="Ellipse 36" cx="0.607" cy="0.185" rx="0.607" ry="0.185" transform="matrix(0.151, -0.989, 0.989, 0.151, -274.018, 156.249)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_37" data-name="Ellipse 37" cx="0.161" cy="0.526" rx="0.161" ry="0.526" transform="translate(-275.715 154.437) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_38" data-name="Ellipse 38" cx="0.161" cy="0.526" rx="0.161" ry="0.526" transform="translate(-275.347 154.377) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_39" data-name="Ellipse 39" cx="0.161" cy="0.526" rx="0.161" ry="0.526" transform="translate(-274.953 154.217) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_40" data-name="Ellipse 40" cx="0.161" cy="0.526" rx="0.161" ry="0.526" transform="translate(-274.523 154.092) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_41" data-name="Ellipse 41" cx="0.526" cy="0.161" rx="0.526" ry="0.161" transform="matrix(0.151, -0.989, 0.989, 0.151, -274.184, 155.004)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_42" data-name="Ellipse 42" cx="0.161" cy="0.526" rx="0.161" ry="0.526" transform="translate(-275.506 153.208) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_43" data-name="Ellipse 43" cx="0.161" cy="0.526" rx="0.161" ry="0.526" transform="translate(-275.138 153.147) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_44" data-name="Ellipse 44" cx="0.161" cy="0.526" rx="0.161" ry="0.526" transform="translate(-274.744 152.988) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_45" data-name="Ellipse 45" cx="0.161" cy="0.526" rx="0.161" ry="0.526" transform="translate(-274.314 152.863) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_46" data-name="Ellipse 46" cx="0.13" cy="0.426" rx="0.13" ry="0.426" transform="translate(-274.919 152.18) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_47" data-name="Ellipse 47" cx="0.13" cy="0.426" rx="0.13" ry="0.426" transform="translate(-274.571 152.078) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_48" data-name="Ellipse 48" cx="0.166" cy="0.543" rx="0.166" ry="0.543" transform="translate(-275.894 165.333) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_49" data-name="Ellipse 49" cx="0.166" cy="0.543" rx="0.166" ry="0.543" transform="translate(-275.514 165.271) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_50" data-name="Ellipse 50" cx="0.166" cy="0.543" rx="0.166" ry="0.543" transform="translate(-275.108 165.106) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_51" data-name="Ellipse 51" cx="0.166" cy="0.543" rx="0.166" ry="0.543" transform="translate(-274.664 164.977) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_52" data-name="Ellipse 52" cx="0.126" cy="0.411" rx="0.126" ry="0.411" transform="translate(-275.579 166.349) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_53" data-name="Ellipse 53" cx="0.129" cy="0.421" rx="0.129" ry="0.421" transform="translate(-275.178 166.236) rotate(-2.463)" fill="#d5d5d3"/>
      <ellipse id="Ellipse_54" data-name="Ellipse 54" cx="0.129" cy="0.421" rx="0.129" ry="0.421" transform="translate(-274.827 166.016) rotate(-2.463)" fill="#d5d5d3"/>
      <path id="Path_7" data-name="Path 7" d="M-273.709,163.351l5.249.413.006-.312Z" fill="#bebdbe"/>
      <path id="Path_8" data-name="Path 8" d="M-273.364,159.509l5.249.413.006-.312Z" fill="#bebdbe"/>
      <path id="Path_9" data-name="Path 9" d="M-273.847,155.082l5.256.326-.093-.284Z" fill="#bebdbe"/>
      <path id="Path_10" data-name="Path 10" d="M-273.707,153.38l4,.176-.233-.221Z" fill="#bebdbe"/>
      <path id="Path_11" data-name="Path 11" d="M-269.813,165.939l-4.453-.165,4.735.047Z" fill="#bebdbe"/>
      <path id="Path_12" data-name="Path 12" d="M-268.245,161.882l-5.24-.579,5.272.375Z" fill="#bebdbe"/>
      <path id="Path_13" data-name="Path 13" d="M-268.136,157.843l-5.24-.579,5.233.417Z" fill="#bebdbe"/>
    </g>
    <g id="bagbook" className="fullbag">
      <path id="Rectangle_4" data-name="Rectangle 4" d="M0,0H38.851A21.723,21.723,0,0,1,60.575,21.723V58.26A21.723,21.723,0,0,1,38.851,79.983H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(-152.992 170.42)" fill="#fcfcfd"/>
      <path id="Rectangle_5" data-name="Rectangle 5" d="M0,0H38.851A21.723,21.723,0,0,1,60.575,21.723V58.8A21.723,21.723,0,0,1,38.851,80.523H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(-155.322 169.675)" fill="#f0aa00"/>
      <ellipse id="Ellipse_55" data-name="Ellipse 55" cx="4.31" cy="1.17" rx="4.31" ry="1.17" transform="translate(-159.982 173.288)" fill="#c7c6c6"/>
      <ellipse id="Ellipse_56" data-name="Ellipse 56" cx="4.31" cy="1.17" rx="4.31" ry="1.17" transform="translate(-159.632 180.321)" fill="#c7c6c6"/>
      <ellipse id="Ellipse_57" data-name="Ellipse 57" cx="4.31" cy="1.17" rx="4.31" ry="1.17" transform="translate(-159.807 187.354)" fill="#c7c6c6"/>
      <ellipse id="Ellipse_58" data-name="Ellipse 58" cx="4.31" cy="1.17" rx="4.31" ry="1.17" transform="translate(-159.457 194.386)" fill="#c7c6c6"/>
      <ellipse id="Ellipse_59" data-name="Ellipse 59" cx="4.31" cy="1.17" rx="4.31" ry="1.17" transform="translate(-159.719 201.419)" fill="#c7c6c6"/>
      <ellipse id="Ellipse_60" data-name="Ellipse 60" cx="4.31" cy="1.17" rx="4.31" ry="1.17" transform="translate(-159.37 208.452)" fill="#c7c6c6"/>
      <ellipse id="Ellipse_61" data-name="Ellipse 61" cx="4.31" cy="1.17" rx="4.31" ry="1.17" transform="translate(-159.545 215.485)" fill="#c7c6c6"/>
      <ellipse id="Ellipse_62" data-name="Ellipse 62" cx="4.31" cy="1.17" rx="4.31" ry="1.17" transform="translate(-159.195 222.518)" fill="#c7c6c6"/>
      <ellipse id="Ellipse_63" data-name="Ellipse 63" cx="4.31" cy="1.17" rx="4.31" ry="1.17" transform="translate(-159.588 229.55)" fill="#c7c6c6"/>
      <ellipse id="Ellipse_64" data-name="Ellipse 64" cx="4.31" cy="1.17" rx="4.31" ry="1.17" transform="translate(-159.239 236.583)" fill="#c7c6c6"/>
      <ellipse id="Ellipse_65" data-name="Ellipse 65" cx="4.31" cy="1.17" rx="4.31" ry="1.17" transform="translate(-159.414 243.616)" fill="#c7c6c6"/>
    </g>
    <g id="bagtowel" className="fullbag" transform="translate(-5 -9)">
      <path id="Path_14" data-name="Path 14" d="M-271.873,194.585c-1.6-1.272-3.475-2.681-5.532-4.069l.218,15.6c1.972,1.34,3.772,2.694,5.314,3.921Z" fill="#fcd58e"/>
      <path id="Path_15" data-name="Path 15" d="M-276.756,210.264l-.193-16.835c-.649,4.194-5.342,13.248-17.846,8.727-13.728-4.963-14.681-13.363-14.747-14.507.045,1.158.387,9.922.8,20.253C-300.854,214.585-287.894,221.79-276.756,210.264Z" fill="#fbb53b"/>
      <path id="Path_16" data-name="Path 16" d="M-276.968,191.744l.019,1.685A3.783,3.783,0,0,0-276.968,191.744Z" fill="#f4d9aa"/>
      <path id="Path_17" data-name="Path 17" d="M-309.542,187.649l-.006-.131S-309.547,187.564-309.542,187.649Z" fill="#f4d9aa"/>
      <path id="Path_18" data-name="Path 18" d="M-276.593,224.558l-.163-14.294c-11.138,11.526-24.1,4.321-31.987-2.362.176,4.422.366,9.13.55,13.652C-300.44,228.165-287.675,235.4-276.593,224.558Z" fill="#f4d9aa"/>
      <path id="Path_19" data-name="Path 19" d="M-276.428,239.008l-.165-14.45c-11.082,10.839-23.847,3.607-31.6-3,.187,4.572.368,8.952.526,12.652C-300.28,240.752-287.63,248.6-276.428,239.008Z" fill="#fbb53b"/>
      <path id="Path_20" data-name="Path 20" d="M-276.412,240.4l-.016-1.391c-11.2,9.589-23.852,1.744-31.239-4.8.251,5.873.443,10.029.5,10.505.227,1.816,4.2,9.305,17.362,9.646S-276.412,240.4-276.412,240.4Z" fill="#f4d9aa"/>
      <path id="Path_21" data-name="Path 21" d="M-279.574,199.353c2.045-2.441,3.058-6.023,2.141-10.814-2.343-12.247-17.362-6.468-17.362-6.468v11.056C-284.211,190.471-280.678,195.062-279.574,199.353Z" fill="#a56903"/>
      <path id="Path_22" data-name="Path 22" d="M-279.574,199.353c-1.1-4.291-4.637-8.882-15.221-6.226v9.029C-289.7,204.383-283.1,203.562-279.574,199.353Z" fill="#d0ab6e"/>
      <path id="Path_23" data-name="Path 23" d="M-294.8,182.93v15.454c6.016.766,12.409,4.2,17.608,7.734l-.218-15.6C-282.564,187.036-288.863,183.686-294.8,182.93Z" fill="none"/>
      <path id="Path_24" data-name="Path 24" d="M-294.8,182.071v.859c5.932.756,12.231,4.106,17.39,7.586l-.028-1.977S-283.561,177.531-294.8,182.071Z" fill="none"/>
      <path id="Path_25" data-name="Path 25" d="M-294.8,182.93v-.859c11.234-4.54,17.362,6.468,17.362,6.468l.028,1.977c2.057,1.388,3.934,4.694,5.532,5.966V184.227A32.9,32.9,0,0,0-286.511,172.2c-10.1-4.312-16.455.113-18.724,1.816s-4.694,3.785-4.313,13.5a11.149,11.149,0,0,0,.3,2.142C-305.581,183.791-300.349,182.223-294.8,182.93Z" fill="#ed9900"/>
      <path id="Path_26" data-name="Path 26" d="M-301.716,198.906a31.371,31.371,0,0,0,6.921,3.25v-3.772A15.828,15.828,0,0,0-301.716,198.906Z" fill="#fcd58e"/>
      <path id="Path_27" data-name="Path 27" d="M-271.873,210.039c-1.542-1.227-3.342-2.581-5.314-3.921l.205,14.683c1.87,1.249,3.6,2.52,5.109,3.7Z" fill="#ed9900"/>
      <path id="Path_28" data-name="Path 28" d="M-309.251,189.66c1,4.184,4.326,7.217,7.535,9.246a15.828,15.828,0,0,1,6.921-.522V182.93C-300.349,182.223-305.581,183.791-309.251,189.66Z" fill="#fcd58e"/>
      <path id="Path_29" data-name="Path 29" d="M-271.873,242.668V224.5c-1.512-1.18-3.239-2.451-5.109-3.7l.23,16.42C-274.256,236.427-271.873,242.668-271.873,242.668Z" fill="#fcd58e"/>
    </g>
    <g id="bagsocks" className="fullbag bagsocks">
      <path id="Path_30" data-name="Path 30" d="M-196.428,170.193a23.5,23.5,0,0,1-11.91,5.456c-7.378,1.1-8.644,14.633-19.267,12.734s-31.388,21.766-21.421,26.429,5.013,14.729,16.642,9.275,16.587-20.451,20.251-21.351,12.232-.153,17.591-2.426a79.818,79.818,0,0,1,13.044-3.777Z" fill="#d2d2d2"/>
      <ellipse id="Ellipse_66" data-name="Ellipse 66" cx="2.511" cy="16.355" rx="2.511" ry="16.355" transform="matrix(0.86, -0.511, 0.511, 0.86, -183.748, 162.655)" fill="#efecec"/>
      <path id="Path_31" data-name="Path 31" d="M-181.59,161.371l-14.838,8.822s4.436,21.587,14.93,26.34l16.624-7.046S-182.32,173.655-181.59,161.371Z" fill="#efecec"/>
      <g id="Group_72" data-name="Group 72">
        <g id="Group_71" data-name="Group 71" clip-path="url(#clip-path)">
          <g id="Group_70" data-name="Group 70">
            <circle id="Ellipse_67" data-name="Ellipse 67" cx="3.703" cy="3.703" r="3.703" transform="translate(-204.165 173.609)" fill="#de1e28"/>
            <circle id="Ellipse_68" data-name="Ellipse 68" cx="3.806" cy="3.806" r="3.806" transform="translate(-200.694 184.499)" fill="#de1e28"/>
            <circle id="Ellipse_69" data-name="Ellipse 69" cx="2.982" cy="2.982" r="2.982" transform="translate(-193.189 192.989)" fill="#de1e28"/>
            <circle id="Ellipse_70" data-name="Ellipse 70" cx="3.703" cy="3.703" r="3.703" transform="translate(-235.985 188.346)" fill="#de1e28"/>
            <circle id="Ellipse_71" data-name="Ellipse 71" cx="3.806" cy="3.806" r="3.806" transform="translate(-231.753 197.625)" fill="#de1e28"/>
            <circle id="Ellipse_72" data-name="Ellipse 72" cx="2.982" cy="2.982" r="2.982" transform="translate(-225.009 207.726)" fill="#de1e28"/>
            <circle id="Ellipse_73" data-name="Ellipse 73" cx="3.703" cy="3.703" r="3.703" transform="translate(-212.151 181.826)" fill="#de1e28"/>
            <circle id="Ellipse_74" data-name="Ellipse 74" cx="3.806" cy="3.806" r="3.806" transform="translate(-207.813 192.2)" fill="#de1e28"/>
            <circle id="Ellipse_75" data-name="Ellipse 75" cx="3.703" cy="3.703" r="3.703" transform="translate(-241.208 197.705)" fill="#de1e28"/>
            <circle id="Ellipse_76" data-name="Ellipse 76" cx="3.806" cy="3.806" r="3.806" transform="translate(-234.427 208.024)" fill="#de1e28"/>
            <circle id="Ellipse_77" data-name="Ellipse 77" cx="2.982" cy="2.982" r="2.982" transform="translate(-217.631 191.455)" fill="#de1e28"/>
            <circle id="Ellipse_78" data-name="Ellipse 78" cx="2.982" cy="2.982" r="2.982" transform="translate(-222.061 181.931)" fill="#de1e28"/>
            <circle id="Ellipse_79" data-name="Ellipse 79" cx="2.982" cy="2.982" r="2.982" transform="translate(-213.38 200.293)" fill="#de1e28"/>
            <circle id="Ellipse_80" data-name="Ellipse 80" cx="2.982" cy="2.982" r="2.982" transform="translate(-226.943 189.575)" fill="#de1e28"/>
            <circle id="Ellipse_81" data-name="Ellipse 81" cx="2.982" cy="2.982" r="2.982" transform="translate(-221.628 199.45)" fill="#de1e28"/>
            <circle id="Ellipse_82" data-name="Ellipse 82" cx="2.982" cy="2.982" r="2.982" transform="translate(-243.019 208.699)" fill="#de1e28"/>
            <circle id="Ellipse_83" data-name="Ellipse 83" cx="2.982" cy="2.982" r="2.982" transform="translate(-249.157 199.313)" fill="#de1e28"/>
            <circle id="Ellipse_84" data-name="Ellipse 84" cx="2.982" cy="2.982" r="2.982" transform="translate(-237.705 218.574)" fill="#de1e28"/>
          </g>
        </g>
      </g>
    </g>
    <g id="bagphone" className="fullbag">
      <rect id="Rectangle_6" data-name="Rectangle 6" width="34.561" height="69.031" rx="12" transform="translate(-199.075 188.571)" fill="#b0afaf"/>
      <rect id="Rectangle_7" data-name="Rectangle 7" width="29.848" height="53.216" rx="12" transform="translate(-196.828 195.034)" fill="#464544"/>
      <circle id="Ellipse_85" data-name="Ellipse 85" cx="2.994" cy="2.994" r="2.994" transform="translate(-184.897 249.834)" fill="#464544"/>
    </g>
    <g id="bagsweatshirt" className="fullbag">
      <path id="Path_33" data-name="Path 33" d="M-240.589,201.443c6.641,0,12.189-2.9,13.556-6.776l-2.4-2.018c0,2.151-5.378,5.259-11.833,5.618s-11.356-5.26-11.356-5.26l-1.52,1.66C-252.778,198.542-247.229,201.443-240.589,201.443Z" fill="#ed9900"/>
      <path id="Path_34" data-name="Path 34" d="M-208.853,202.891a13.2,13.2,0,0,0-.75-1.557l-.053-.109h-.01a13.108,13.108,0,0,0-11.357-6.558h-6.01l-1.326,4.556-11.475,3.466-13.865-3.944-.445-4.078h-6.884a13.118,13.118,0,0,0-12.607,9.5l-.843,1.826h67.117Z" fill="#f4c200"/>
      <path id="Path_35" data-name="Path 35" d="M-239.834,202.689l11.475-3.466,1.326-4.556c-1.367,3.875-6.915,6.776-13.556,6.776s-12.189-2.9-13.555-6.776l.445,4.078Z" fill="#f4c200"/>
      <path id="Path_36" data-name="Path 36" d="M-274.478,205.991s-12.438,22.525,0,30.951Z" fill="#f4c200"/>
      <path id="Path_37" data-name="Path 37" d="M-207.361,205.991s12.438,22.525,0,30.951Z" fill="#f4c200"/>
      <path id="Path_38" data-name="Path 38" d="M-207.361,205.991h-67.117v29.246a10.13,10.13,0,0,0,10.131,10.13h5.282V219.873h12.959V243.03h23.157v2.337h5.457a10.13,10.13,0,0,0,10.131-10.13Z" fill="#f4c200"/>
      <path id="Path_39" data-name="Path 39" d="M-246.106,243.03V219.873h-12.959v25.494h36.116V243.03Z" fill="#ed9900"/>
    </g>
    <g id="Group_77" data-organ="bag" data-name="Group 77" >
      <path id="Path_40" data-name="Path 40" d="M-105.85,102.4H-309.121a41.16,41.16,0,0,0-41.16,41.16V401.622h285.59V143.565A41.159,41.159,0,0,0-105.85,102.4Zm-55.79,138.049c-74.008.583-128.786-48.367-152.934-50.116-11.849-.858-19.133,1.57-23.486,4.265a75.243,75.243,0,0,1,68.687-44.5h126.046a75.26,75.26,0,0,1,71.735,52.512C-78.508,213.081-102.054,239.985-161.64,240.454Z" fill="#f7b956"/>
      <path id="Path_41" data-name="Path 41" d="M-71.592,203.178c-6.916,10.469-30.462,37.373-90.048,37.842-74.008.583-128.786-48.368-152.934-50.116-11.849-.858-19.133,1.57-23.486,4.265A74.968,74.968,0,0,0-344.6,225.9V401.622H-68.1V225.9A75.183,75.183,0,0,0-71.592,203.178Z" fill="#fcb01b"/>
      <path id="Path_42" data-name="Path 42" d="M-102.543,266.728l13.659-7.7s-3.236,67.65-2.668,98.026.457,40.3.457,40.3l-13.55,3.624Z" fill="#ab7008"/>
      <path id="Path_43" data-name="Path 43" d="M-327.683,259.026h238.8l-13.658,7.7H-314.024Z" fill="#f7b956"/>
      <path id="Path_44" data-name="Path 44" d="M-262.276,109.585v11.356s55.926-38.129,111.852,0l-4.543-12.113S-204.826,68.618-262.276,109.585Z" fill="#fcb01b"/>
      <path id="Path_45" data-name="Path 45" d="M-262.276,120.941h5.678s49.4-31.618,102.01,0h4.164S-197.361,80.806-262.276,120.941Z" fill="#ab7008"/>
      <g id="Group_76"data-organ="bag"  data-name="Group 76">
        <path id="Path_46" data-name="Path 46" d="M-336.8,192.711a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-336.8,192.711Z" fill="#d3d3d3"/>
        <path id="Path_47" data-name="Path 47" d="M-334.1,191.717a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-334.1,191.717Z" fill="#d3d3d3"/>
        <path id="Path_48" data-name="Path 48" d="M-328.706,189.872a1.273,1.273,0,0,0-1.294,1.02,1.257,1.257,0,0,0-1.119-.594,1.39,1.39,0,0,0,0,2.779,1.272,1.272,0,0,0,1.294-1.02,1.258,1.258,0,0,0,1.119.595A1.391,1.391,0,0,0-328.706,189.872Z" fill="#d3d3d3"/>
        <path id="Path_49" data-name="Path 49" d="M-323.454,189.162a1.267,1.267,0,0,0-1.268.916,1.26,1.26,0,0,0-1.145-.632,1.391,1.391,0,0,0,0,2.78,1.267,1.267,0,0,0,1.268-.916,1.26,1.26,0,0,0,1.145.632A1.391,1.391,0,0,0-323.454,189.162Z" fill="#d3d3d3"/>
        <path id="Path_50" data-name="Path 50" d="M-317.918,189.02a1.255,1.255,0,0,0-1.206.763,1.255,1.255,0,0,0-1.207-.763,1.391,1.391,0,0,0,0,2.78,1.255,1.255,0,0,0,1.206-.763,1.255,1.255,0,0,0,1.207.763A1.391,1.391,0,0,0-317.918,189.02Z" fill="#d3d3d3"/>
        <path id="Path_51" data-name="Path 51" d="M-315.221,189.162a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-315.221,189.162Z" fill="#d3d3d3"/>
        <path id="Path_52" data-name="Path 52" d="M-309.685,190.014a1.259,1.259,0,0,0-1.216.783,1.307,1.307,0,0,0-1.339-1.351,1.391,1.391,0,0,0,0,2.78,1.256,1.256,0,0,0,1.215-.784,1.307,1.307,0,0,0,1.34,1.351A1.39,1.39,0,0,0-309.685,190.014Z" fill="#d3d3d3"/>
        <path id="Path_53" data-name="Path 53" d="M-306.846,190.581a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-306.846,190.581Z" fill="#d3d3d3"/>
        <path id="Path_54" data-name="Path 54" d="M-304.15,191.575a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-304.15,191.575Z" fill="#d3d3d3"/>
        <path id="Path_55" data-name="Path 55" d="M-301.6,192.853a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-301.6,192.853Z" fill="#d3d3d3"/>
        <path id="Path_56" data-name="Path 56" d="M-299.04,193.988a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-299.04,193.988Z" fill="#d3d3d3"/>
        <path id="Path_57" data-name="Path 57" d="M-291.942,197.821a1.28,1.28,0,0,0-.953.383,1.345,1.345,0,0,0-1.319-1.661,1.258,1.258,0,0,0-1.108.58,1.349,1.349,0,0,0-1.305-1.715,1.39,1.39,0,0,0,0,2.779,1.258,1.258,0,0,0,1.109-.58,1.349,1.349,0,0,0,1.3,1.716,1.279,1.279,0,0,0,.953-.384,1.345,1.345,0,0,0,1.319,1.661A1.39,1.39,0,0,0-291.942,197.821Z" fill="#d3d3d3"/>
        <path id="Path_58" data-name="Path 58" d="M-289.387,198.956a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-289.387,198.956Z" fill="#d3d3d3"/>
        <path id="Path_59" data-name="Path 59" d="M-286.407,200.234a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-286.407,200.234Z" fill="#d3d3d3"/>
        <path id="Path_60" data-name="Path 60" d="M-283.852,201.795a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-283.852,201.795Z" fill="#d3d3d3"/>
        <path id="Path_61" data-name="Path 61" d="M-280.871,203.356a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-280.871,203.356Z" fill="#d3d3d3"/>
        <path id="Path_62" data-name="Path 62" d="M-277.89,204.492a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-277.89,204.492Z" fill="#d3d3d3"/>
        <path id="Path_63" data-name="Path 63" d="M-275.335,206.2a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-275.335,206.2Z" fill="#d3d3d3"/>
        <path id="Path_64" data-name="Path 64" d="M-272.638,207.757a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-272.638,207.757Z" fill="#d3d3d3"/>
        <path id="Path_65" data-name="Path 65" d="M-269.8,209.176a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-269.8,209.176Z" fill="#d3d3d3"/>
        <path id="Path_66" data-name="Path 66" d="M-266.818,210.6a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-266.818,210.6Z" fill="#d3d3d3"/>
        <path id="Path_67" data-name="Path 67" d="M-264.121,212.015a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-264.121,212.015Z" fill="#d3d3d3"/>
        <path id="Path_68" data-name="Path 68" d="M-261.141,213.434a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-261.141,213.434Z" fill="#d3d3d3"/>
        <path id="Path_69" data-name="Path 69" d="M-258.3,215a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-258.3,215Z" fill="#d3d3d3"/>
        <path id="Path_70" data-name="Path 70" d="M-255.6,215.989a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-255.6,215.989Z" fill="#d3d3d3"/>
        <path id="Path_71" data-name="Path 71" d="M-252.908,216.841a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-252.908,216.841Z" fill="#d3d3d3"/>
        <path id="Path_72" data-name="Path 72" d="M-250.353,218.4a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-250.353,218.4Z" fill="#d3d3d3"/>
        <path id="Path_73" data-name="Path 73" d="M-247.8,219.822a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-247.8,219.822Z" fill="#d3d3d3"/>
        <path id="Path_74" data-name="Path 74" d="M-244.817,220.816a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-244.817,220.816Z" fill="#d3d3d3"/>
        <path id="Path_75" data-name="Path 75" d="M-242.262,221.951a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-242.262,221.951Z" fill="#d3d3d3"/>
        <path id="Path_76" data-name="Path 76" d="M-237.01,223.938a1.264,1.264,0,0,0-1.249.858,1.348,1.348,0,0,0-1.306-1.709,1.39,1.39,0,0,0,0,2.779,1.265,1.265,0,0,0,1.249-.857,1.348,1.348,0,0,0,1.306,1.709A1.391,1.391,0,0,0-237.01,223.938Z" fill="#d3d3d3"/>
        <path id="Path_77" data-name="Path 77" d="M-234.171,225.358a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-234.171,225.358Z" fill="#d3d3d3"/>
        <path id="Path_78" data-name="Path 78" d="M-228.919,226.777a1.257,1.257,0,0,0-1.222.8,1.324,1.324,0,0,0-1.333-1.508,1.391,1.391,0,0,0,0,2.78,1.258,1.258,0,0,0,1.222-.8,1.323,1.323,0,0,0,1.333,1.508A1.391,1.391,0,0,0-228.919,226.777Z" fill="#d3d3d3"/>
        <path id="Path_79" data-name="Path 79" d="M-226.081,228.2a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-226.081,228.2Z" fill="#d3d3d3"/>
        <path id="Path_80" data-name="Path 80" d="M-223.242,229.332a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-223.242,229.332Z" fill="#d3d3d3"/>
        <path id="Path_81" data-name="Path 81" d="M-220.119,230.468a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-220.119,230.468Z" fill="#d3d3d3"/>
        <path id="Path_82" data-name="Path 82" d="M-214.725,231.887a1.258,1.258,0,0,0-1.222.8,1.324,1.324,0,0,0-1.333-1.508,1.391,1.391,0,0,0,0,2.78,1.258,1.258,0,0,0,1.222-.8,1.324,1.324,0,0,0,1.333,1.508A1.391,1.391,0,0,0-214.725,231.887Z" fill="#d3d3d3"/>
        <path id="Path_83" data-name="Path 83" d="M-212.028,232.881a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-212.028,232.881Z" fill="#d3d3d3"/>
        <path id="Path_84" data-name="Path 84" d="M-209.189,233.732a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-209.189,233.732Z" fill="#d3d3d3"/>
        <path id="Path_85" data-name="Path 85" d="M-206.492,234.3a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-206.492,234.3Z" fill="#d3d3d3"/>
        <path id="Path_86" data-name="Path 86" d="M-203.511,234.868a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-203.511,234.868Z" fill="#d3d3d3"/>
        <path id="Path_87" data-name="Path 87" d="M-200.389,235.436a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-200.389,235.436Z" fill="#d3d3d3"/>
        <path id="Path_88" data-name="Path 88" d="M-197.55,236.145a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-197.55,236.145Z" fill="#d3d3d3"/>
        <path id="Path_89" data-name="Path 89" d="M-194.285,236.855a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-194.285,236.855Z" fill="#d3d3d3"/>
        <path id="Path_90" data-name="Path 90" d="M-191.3,237.281a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-191.3,237.281Z" fill="#d3d3d3"/>
        <path id="Path_91" data-name="Path 91" d="M-188.323,238.813c-1.789,0-1.792,1.816,0,1.816S-186.532,238.813-188.323,238.813Z" fill="#d3d3d3"/>
        <path id="Path_92" data-name="Path 92" d="M-185.059,238.275a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-185.059,238.275Z" fill="#d3d3d3"/>
        <path id="Path_93" data-name="Path 93" d="M-181.794,238.7a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-181.794,238.7Z" fill="#d3d3d3"/>
        <path id="Path_94" data-name="Path 94" d="M-178.955,238.984a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-178.955,238.984Z" fill="#d3d3d3"/>
        <path id="Path_95" data-name="Path 95" d="M-175.832,239.41a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-175.832,239.41Z" fill="#d3d3d3"/>
        <path id="Path_96" data-name="Path 96" d="M-172.568,239.41a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-172.568,239.41Z" fill="#d3d3d3"/>
        <path id="Path_97" data-name="Path 97" d="M-169.445,239.41a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-169.445,239.41Z" fill="#d3d3d3"/>
        <path id="Path_98" data-name="Path 98" d="M-166.464,239.694a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-166.464,239.694Z" fill="#d3d3d3"/>
        <path id="Path_99" data-name="Path 99" d="M-163.2,239.552a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-163.2,239.552Z" fill="#d3d3d3"/>
        <path id="Path_100" data-name="Path 100" d="M-160.219,239.694a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-160.219,239.694Z" fill="#d3d3d3"/>
        <path id="Path_101" data-name="Path 101" d="M-156.954,239.552a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-156.954,239.552Z" fill="#d3d3d3"/>
        <path id="Path_102" data-name="Path 102" d="M-153.831,239.41a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-153.831,239.41Z" fill="#d3d3d3"/>
        <path id="Path_103" data-name="Path 103" d="M-150.425,239.41a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-150.425,239.41Z" fill="#d3d3d3"/>
        <path id="Path_104" data-name="Path 104" d="M-147.3,239.268a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-147.3,239.268Z" fill="#d3d3d3"/>
        <path id="Path_105" data-name="Path 105" d="M-143.9,238.842a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-143.9,238.842Z" fill="#d3d3d3"/>
        <path id="Path_106" data-name="Path 106" d="M-140.914,238.7a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-140.914,238.7Z" fill="#d3d3d3"/>
        <path id="Path_107" data-name="Path 107" d="M-137.933,238.038a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-137.933,238.038Z" fill="#d3d3d3"/>
        <path id="Path_108" data-name="Path 108" d="M-135.1,237.47a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-135.1,237.47Z" fill="#d3d3d3"/>
        <path id="Path_109" data-name="Path 109" d="M-132.256,236.9a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-132.256,236.9Z" fill="#d3d3d3"/>
        <path id="Path_110" data-name="Path 110" d="M-129.228,236.335a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-129.228,236.335Z" fill="#d3d3d3"/>
        <path id="Path_111" data-name="Path 111" d="M-126.2,235.578a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-126.2,235.578Z" fill="#d3d3d3"/>
        <path id="Path_112" data-name="Path 112" d="M-123.171,234.821a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-123.171,234.821Z" fill="#d3d3d3"/>
        <path id="Path_113" data-name="Path 113" d="M-120.143,233.874a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-120.143,233.874Z" fill="#d3d3d3"/>
        <path id="Path_114" data-name="Path 114" d="M-116.926,232.928a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-116.926,232.928Z" fill="#d3d3d3"/>
        <path id="Path_115" data-name="Path 115" d="M-113.708,231.982a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-113.708,231.982Z" fill="#d3d3d3"/>
        <path id="Path_116" data-name="Path 116" d="M-110.491,230.468a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-110.491,230.468Z" fill="#d3d3d3"/>
        <path id="Path_117" data-name="Path 117" d="M-107.084,229.332a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-107.084,229.332Z" fill="#d3d3d3"/>
        <path id="Path_118" data-name="Path 118" d="M-104.056,228.2a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-104.056,228.2Z" fill="#d3d3d3"/>
        <path id="Path_119" data-name="Path 119" d="M-100.65,226.493a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-100.65,226.493Z" fill="#d3d3d3"/>
        <path id="Path_120" data-name="Path 120" d="M-97.621,224.79a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-97.621,224.79Z" fill="#d3d3d3"/>
        <path id="Path_121" data-name="Path 121" d="M-95.161,223.087a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-95.161,223.087Z" fill="#d3d3d3"/>
        <path id="Path_122" data-name="Path 122" d="M-92.511,221.194a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-92.511,221.194Z" fill="#d3d3d3"/>
        <path id="Path_123" data-name="Path 123" d="M-89.294,219.3a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-89.294,219.3Z" fill="#d3d3d3"/>
        <path id="Path_124" data-name="Path 124" d="M-86.644,217.409a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-86.644,217.409Z" fill="#d3d3d3"/>
        <path id="Path_125" data-name="Path 125" d="M-84.373,215.327a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-84.373,215.327Z" fill="#d3d3d3"/>
        <path id="Path_126" data-name="Path 126" d="M-81.913,213.434a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-81.913,213.434Z" fill="#d3d3d3"/>
        <path id="Path_127" data-name="Path 127" d="M-79.263,210.974a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-79.263,210.974Z" fill="#d3d3d3"/>
        <path id="Path_128" data-name="Path 128" d="M-76.992,209.081a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-76.992,209.081Z" fill="#d3d3d3"/>
        <path id="Path_129" data-name="Path 129" d="M-74.721,206.243a1.39,1.39,0,0,0,0,2.779A1.39,1.39,0,0,0-74.721,206.243Z" fill="#d3d3d3"/>
        <path id="Path_130" data-name="Path 130" d="M-72.45,203.4a1.391,1.391,0,0,0,0,2.78A1.391,1.391,0,0,0-72.45,203.4Z" fill="#d3d3d3"/>
      </g>
      <path id="Path_131" data-name="Path 131" d="M-350.281,401.622s121.5,59.049,285.591,0" fill="#6f2c0d"/>
      <path id="Path_132" data-name="Path 132" d="M-101.239,271.176a6.691,6.691,0,0,0-6.671-6.671H-309.073a6.691,6.691,0,0,0-6.671,6.671v31.653h214.5Z" fill="#cd8c19"/>
      <path id="Path_133" data-name="Path 133" d="M-315.744,302.829v92.122a6.691,6.691,0,0,0,6.671,6.671H-107.91a6.691,6.691,0,0,0,6.671-6.671V302.829Z" fill="#fcb01b"/>
    </g>
  </g>
</svg>
                </div>
                </Bag>
                <div className="cards">
                <Board id="board-2" className="board ">
                {/* dog */}
                <Card id="dog" className="card" draggable="true" data-organ="dog" onClick={(e) => selectItem(e)} >  
                <svg xmlns="http://www.w3.org/2000/svg" data-organ="dog" onClick={(e) => selectItem(e)} data-name="dog" width="96.459" height="96.459" viewBox="0 0 96.459 96.459">
  <g id="dog" transform="translate(-140 -358)" data-organ="dog">
    <g id="dog-2" data-name="dog" data-organ="dog" transform="translate(-429.084 248.319)">
      <circle id="Ellipse_1" data-name="Ellipse 1" cx="48.23" cy="48.23" r="48.23" transform="translate(569.084 109.681)" fill="#cce7e6"/>
      <g id="Group_4" data-name="Group 4" data-organ="dog" >
        <path id="Path_1" data-name="Path 1" d="M608.894,189.672s-2.708.123-3.077,1.846,3.262,1.6,3.262,1.6,2.031-.247,2.185-1.416-2.37-2.031-2.37-2.031" fill="#f9f2c3"/>
        <path id="Path_2" data-name="Path 2" d="M602.071,189.1s-2.708.123-3.078,1.847,3.263,1.6,3.263,1.6,2.031-.246,2.185-1.416-2.37-2.031-2.37-2.031" fill="#e7dfb6"/>
        <path id="Path_3" data-name="Path 3" d="M635.549,176.44c.568-6.141-13.874-8.529-17.854-10.349-2.562-1.171-3.286-6.817-3.477-10.693l-7.44.686-1.851,23.442a7.6,7.6,0,0,0,6.329,8.1c8.781,1.467,23.383,3.236,27.818-.266a2.876,2.876,0,0,0,.959-1.421l.064.4a25.941,25.941,0,0,0,.972-3.744C638.4,181.785,635.213,180.062,635.549,176.44Z" fill="#e7dfb6"/>
        <path id="Path_4" data-name="Path 4" d="M617.7,166.091c3.98,1.82,18.422,4.208,17.854,10.349-.336,3.622,2.85,5.345,5.52,6.149,2.374-12.612-1.464-31.539-.744-23.207.8,9.211-1.365,19.9-1.365,19.9v.008c-4.016-9.943-16.149-24.684-16.149-24.684l-8.594.792C614.409,159.274,615.133,164.92,617.7,166.091Z" fill="#b47209"/>
        <g data-organ="dog"  id="Group_1" data-name="Group 1">
          <path id="Path_5" data-name="Path 5" d="M620.135,125.3a16.486,16.486,0,0,0-2.471-.76c-.587,2.3-1.58,6.091-2.509,9.221-1.214,4.091,5.709,13.355,8.229,20.8a16.743,16.743,0,0,0,5.173-5.661,3.065,3.065,0,0,0,2.443-.276C636.016,145.932,636.42,130.675,620.135,125.3Z" fill="#d08400"/>
          <path id="Path_6" data-name="Path 6" d="M611.668,137.32c1.926-3.246.577-10.007-.308-13.47-16.2.6-20.907,22.145-17.584,25.676,1.693,1.8,4.043,1.743,6.079.069a16.755,16.755,0,0,0,5.748,5.583C605.49,150.639,609.534,140.917,611.668,137.32Z" fill="#d08400"/>
          <path id="Path_7" data-name="Path 7" d="M615.155,133.757c.929-3.13,1.922-6.923,2.509-9.221-.424-.1-.854-.176-1.29-.238l-.082-.017a20.831,20.831,0,0,0-4.932-.431c.885,3.463,2.234,10.224.308,13.47-2.134,3.6-6.178,13.319-6.065,17.858a16.655,16.655,0,0,0,17.781-.625C620.864,147.112,613.941,137.848,615.155,133.757Z" fill="#f9f2c3"/>
          <ellipse id="Ellipse_2" data-name="Ellipse 2" cx="1.061" cy="2.426" rx="1.061" ry="2.426" transform="translate(606.961 133.378)" fill="#402f11"/>
          <ellipse id="Ellipse_3" data-name="Ellipse 3" cx="1.061" cy="2.426" rx="1.061" ry="2.426" transform="translate(618.03 133.378)" fill="#402f11"/>
          <circle id="Ellipse_4" data-name="Ellipse 4" cx="1.744" cy="1.744" r="1.744" transform="translate(610.985 141.187)" fill="#402f11"/>
          <path id="Path_8" data-name="Path 8" d="M607.41,147.953a5.5,5.5,0,0,0,.661.819,1.348,1.348,0,0,0,.785.429c.51.031.983-.475,1.342-1.014a11.81,11.81,0,0,0,.968-1.775c.282-.621.546-1.275.768-1.9l.673-1.907.591,1.972a14.1,14.1,0,0,0,1.119,2.771,4,4,0,0,0,.807,1.057,1.093,1.093,0,0,0,.429.234.774.774,0,0,0,.439-.019,1.97,1.97,0,0,0,.518-.3,3.269,3.269,0,0,0,.275-.238l.284-.254a10.1,10.1,0,0,0,1.02-1.119,6.55,6.55,0,0,0,.788-1.3,3.85,3.85,0,0,0,.382-1.5,3.345,3.345,0,0,1,.044,1.635,5.859,5.859,0,0,1-.567,1.572,8.465,8.465,0,0,1-.923,1.4l-.273.316a4.149,4.149,0,0,1-.294.316,2.843,2.843,0,0,1-.8.572,1.99,1.99,0,0,1-1.119.153,2.348,2.348,0,0,1-1-.437,4.87,4.87,0,0,1-1.185-1.4,10.257,10.257,0,0,1-.726-1.532,13.136,13.136,0,0,1-.5-1.6l1.264.065a16.346,16.346,0,0,1-.958,1.99,9.951,9.951,0,0,1-1.293,1.828,4.191,4.191,0,0,1-.912.757c-.094.05-.187.1-.284.142a1.993,1.993,0,0,1-.316.1,1.332,1.332,0,0,1-.34.027l-.171-.012c-.056-.012-.111-.029-.166-.044a1.645,1.645,0,0,1-.91-.782A3.953,3.953,0,0,1,607.41,147.953Z" fill="#402f11"/>
          <path id="Path_9" data-name="Path 9" d="M599.855,149.6s-.583-9.7,1.919-15.118c0,0-2.653,13.495.417,18.082C602.191,152.559,599.87,150.308,599.855,149.6Z" fill="#2f2d15"/>
          <path id="Path_10" data-name="Path 10" d="M628.557,148.892s-3.9-.705-2.839-8.59c0,0-2.072,8.693,1.971,10.008Z" fill="#2f2d15"/>
        </g>
        <ellipse id="Ellipse_5" data-name="Ellipse 5" cx="5.042" cy="3.032" rx="5.042" ry="3.032" transform="translate(606.778 184.703)" fill="#e7dfb6"/>
        <g id="Group_3" data-name="Group 3">
          <path id="Path_11" data-name="Path 11" d="M635.549,188.986s-17.058,2.957-17.172,1.138-3.411-18.082,11.713-12.168S635.549,188.986,635.549,188.986Z" fill="#f9f2c3"/>
          <g id="Group_2" data-name="Group 2">
            <ellipse id="Ellipse_6" data-name="Ellipse 6" cx="6.425" cy="2.9" rx="6.425" ry="2.9" transform="translate(612.944 186.889)" fill="#f9f2c3"/>
            <path id="Path_12" data-name="Path 12" d="M625.777,190.092a5.619,5.619,0,0,0-3.9-2.963s3.986,0,4.5,2.982Z" fill="#e7dfb6"/>
          </g>
        </g>
        <path id="Path_13" data-name="Path 13" d="M612.125,169.915l-3.57,21.173,2.709.615,6.893-22.773S615.08,164.252,612.125,169.915Z" fill="#f9f2c3"/>
        <path id="Path_14" data-name="Path 14" d="M605.708,167.1l-3.976,23.359,3.016.679,7.678-25.125S609,160.848,605.708,167.1Z" fill="#e7dfb6"/>
        <path id="Path_15" data-name="Path 15" d="M611.92,171.84s3.437,4.549,1.466,6.621-3.336,2.224-3.437,3.589S611.92,171.84,611.92,171.84Z" fill="#b47209"/>
        <path id="Path_16" data-name="Path 16" d="M629.307,189.985s.758-4.246,3.437-3.892,3.083-.253,3.032-.809,2.628-.455,2.527,1.112-3.791,2.982-3.791,2.982Z" fill="#b47209"/>
      </g>
    </g>
    <g id="wrongdog" className="hide">
      <g id="Group_6" data-name="Group 6" transform="translate(-359.084 318.319)">
        <circle id="Ellipse_1-2" data-name="Ellipse 1" cx="48.23" cy="48.23" r="48.23" transform="translate(499.084 39.681)" fill="#ff0505" opacity="0.549"/>
      </g>
      <line id="Line_1" data-name="Line 1" x2="68" y2="68" transform="translate(154.5 372.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"/>
      <line id="Line_2" data-name="Line 2" x1="68" y2="68" transform="translate(154.5 372.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"/>
    </g>
  </g>
</svg>

    </Card>
                 {/* sweatshirt */}
                <Card id="sweatshirt" data-organ="sweatshirt" className="card" onClick={(e) => selectItem(e)} draggable="true"> 
                <svg id="sweatshirt" data-organ="sweatshirt"  onClick={(e) => selectItem(e)} xmlns="http://www.w3.org/2000/svg" width="96.459" height="96.459" viewBox="0 0 96.459 96.459"><g  data-organ="sweatshirt" transform="translate(-139.764 -241)"><circle cx="48.23" cy="48.23" r="48.23" transform="translate(139.764 241)" fill="#cce7e6"/><g data-organ="sweatshirt" transform="translate(-541.084 131.319)"><path d="M720.771,133.141l.876-.955s2.821,3.234,6.536,3.028,6.812-2,6.812-3.234l1.383,1.161-.764,2.623-6.605,1.995-7.982-2.27Z" fill="#ed9900"/><path d="M754.95,173.333l1.875,3.6,7.55-2.643-1.761-3.657Z" fill="#ed9900"/><path d="M693.78,172.78l6.04,4.153,1.862-3.193-6.281-4.473Z" fill="#ed9900"/><path d="M746.842,137.876a7.457,7.457,0,0,0-.431-.9l-.031-.064h-.005a7.546,7.546,0,0,0-6.538-3.776h-3.459c-.787,2.231-3.981,3.9-7.8,3.9s-7.016-1.67-7.8-3.9h-3.962a7.551,7.551,0,0,0-7.257,5.468L695.4,169.267l6.281,4.473,7.575-12.986v14.669a7.551,7.551,0,0,0,7.551,7.55h23.028a7.55,7.55,0,0,0,7.55-7.55V158.812l7.563,14.521,7.664-2.7Z" fill="#f4c200"/><path d="M720.772,146.92v21.518h16.8V159h-8.494V146.847Z" fill="#ed9900"/></g></g></svg></Card>
                 {/* book */}
                <Card id="book" className="card"  onClick={(e) => selectItem(e)}  draggable="true"><svg  onClick={(e) => selectItem(e)}  id="book"  xmlns="http://www.w3.org/2000/svg" width="96.459" height="96.459" viewBox="0 0 96.459 96.459"><g data-organ="book"  transform="translate(-251.528 -241)"><circle cx="48.23" cy="48.23" r="48.23" transform="translate(251.528 241)" fill="#cce7e6"/><g data-organ="book" transform="translate(-541.084 131.319)"><path d="M809.083,141.824l-3.756.334a1.819,1.819,0,0,0-1.6,2.254l8.115,32.462a3.042,3.042,0,0,0,3.268,2.288l29.762-3.121,27.405.9a3.213,3.213,0,0,0,3.184-4.131l-8.971-30.05a2.722,2.722,0,0,0-2.657-1.942Z" fill="#f0aa00"/><path d="M844.189,175.809l-29.026.464L805.357,139.5h28.6Z" fill="#c2bcb3"/><path d="M873.789,175.693H844.015l-9.806-36.772h28.6Z" fill="#c2bcb3"/><path d="M844.48,175.519h-28.6l-10.23-36.307h28.6Z" fill="#dcd6cc"/><path d="M873.339,175.258l-29.1.2-9.594-36.62,28.378.157Z" fill="#dcd6cc"/><path d="M844.476,175.229l-27.945-.885L806.3,138.037l27.909.885Z" fill="#f6f1e2"/><path d="M872.294,174.344l-27.818.885-10.267-36.307,28.21-.885Z" fill="#f6f1e2"/><line x2="10.035" y2="36.539" transform="translate(834.209 138.922)" fill="none" stroke="#c4baa2" stroke-miterlimit="10" stroke-width="1"/><path d="M832.983,155.755l-19.329.784L810,141.3l18.894-.174Z" fill="#bcb6a7"/><path d="M866.069,160.718l-19.329.784-3.657-15.237,18.894-.174Z" fill="#bcb6a7"/><path d="M833.418,158.715l-18.981.522-.261-1.132,18.72-.958Z" fill="#bcb6a7"/><path d="M833.854,161.153l-18.981.522-.261-1.132,18.719-.958Z" fill="#bcb6a7"/><path d="M834.463,163.939l-18.981.522-.261-1.132,18.72-.958Z" fill="#bcb6a7"/><path d="M860.583,141.911l-18.981.522-.261-1.132,18.719-.958Z" fill="#bcb6a7"/><path d="M861.367,144.436l-18.981.522-.261-1.132,18.72-.958Z" fill="#bcb6a7"/><path d="M866.678,163.33l-18.981.522-.261-1.132,18.719-.958Z" fill="#bcb6a7"/><path d="M867.375,165.855l-18.981.522-.261-1.132,18.719-.958Z" fill="#bcb6a7"/><path d="M868.333,168.815l-18.981.522-.261-1.132,18.72-.958Z" fill="#bcb6a7"/><path d="M869.029,171.34l-18.981.522-.261-1.132,18.719-.958Z" fill="#bcb6a7"/></g></g></svg></Card>
                </Board>
                <Board id="board-3" className="board">
                     {/* Tv */}
                <Card id="tv" onClick={(e) => selectItem(e)} data-organ="tv"  className="card" draggable="true">
                <svg xmlns="http://www.w3.org/2000/svg"  onClick={(e) => selectItem(e)} data-organ="tv" width="96.459" height="96.459" viewBox="0 0 96.459 96.459">
                  <g id="tv" data-organ="tv" transform="translate(-207 -358)">
                    <g  data-organ="tv" id="Group_9" data-name="Group 9" transform="translate(-362.084 131.867)">
                      <circle id="Ellipse_7" data-name="Ellipse 7" cx="48.23" cy="48.23" r="48.23" transform="translate(569.084 226.133)" fill="#cce7e6"/>
                      <g data-organ="tv" id="Group_8" data-name="Group 8">
                        <g  data-organ="tv" id="Group_7" data-name="Group 7">
                          <path id="Path_17" data-name="Path 17" d="M601.052,246.643c.083.416,13.816,13.816,13.816,13.816l13.691-13.691" fill="none" stroke="#636061" stroke-miterlimit="10" stroke-width="4"/>
                          <rect id="Rectangle_1" data-name="Rectangle 1" width="60.009" height="40.117" transform="translate(586.237 260.292)" fill="#4a4142"/>
                          <rect id="Rectangle_2" data-name="Rectangle 2" width="46.271" height="30.337" transform="translate(592.921 263.705)" fill="#636061"/>
                        </g>
                        <circle id="Ellipse_8" data-name="Ellipse 8" cx="2.433" cy="2.433" r="2.433" transform="translate(598.519 244.841)" fill="#4a4142"/>
                        <circle id="Ellipse_9" data-name="Ellipse 9" cx="2.433" cy="2.433" r="2.433" transform="translate(626.093 244.12)" fill="#4a4142"/>
                        <circle id="Ellipse_10" data-name="Ellipse 10" cx="1.562" cy="1.562" r="1.562" transform="translate(638.649 295.723)" fill="#636061"/>
                        <path id="Path_18" data-name="Path 18" d="M646.245,260.292l3.577,6.115v28.836l-3.577,5.166Z" fill="#636061"/>
                      </g>
                    </g>
                    <g id="wrongtv" className="hide" data-name="tv" transform="translate(67)">
                      <g id="Group_6" data-name="Group 6" transform="translate(-359.084 318.319)">
                        <circle id="Ellipse_1" data-name="Ellipse 1" cx="48.23" cy="48.23" r="48.23" transform="translate(499.084 39.681)" fill="#ff0505" opacity="0.549"/>
                      </g>
                      <line id="Line_1" data-name="Line 1" x2="68" y2="68" transform="translate(154.5 372.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"/>
                      <line id="Line_2" data-name="Line 2" x1="68" y2="68" transform="translate(154.5 372.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"/>
                    </g>
                  </g>
                </svg>
                </Card>
                 {/* brush */}
                <Card id="brush" data-organ="brush" onClick={(e) => selectItem(e)} className="card" draggable="true"><svg id="brush" data-organ="brush" onClick={(e) => selectItem(e)} xmlns="http://www.w3.org/2000/svg" width="96.459" height="96.459" viewBox="0 0 96.459 96.459"><g data-organ="brush"  transform="translate(-139.764 -357.452)"><circle cx="48.23" cy="48.23" r="48.23" transform="translate(139.764 357.452)" fill="#cce7e6"/><g data-organ="brush" transform="translate(-541.084 131.319)"><path d="M757.808,255.145c-.067.056-6.729,5.6-11.282,8.695a12.511,12.511,0,0,1-3.151,1.667c-.569.178-1.128.367-1.682.562.316.189.471.591-.231,1.45-1.364,1.666-36.06,23.03-38.232,23.03-2,0-2.455-.727-.671-2.217l-4.778,2.846a1.361,1.361,0,0,0-.473,1.866l.419.7a1.488,1.488,0,0,0,2.04.516L735.7,272.856a41.113,41.113,0,0,1,8.768-3.848,16.242,16.242,0,0,0,4.119-2.135c2.811-1.911,6.3-4.639,8.7-6.573a3.63,3.63,0,0,0,.517-5.155Z" fill="#56b8c4"/><path d="M744.546,258.844s1.674,3.935,5.159,3.612c0,0,5.676-1.775,7.807-5.133,0,0,1.156-3.5-.743-5.263Z" fill="#d5d5d3"/><ellipse cx="6.971" cy="1.363" rx="6.971" ry="1.363" transform="translate(743.835 257.533) rotate(-28.773)" fill="#fcf9f4"/><path d="M741.693,266.069q-1.606.564-3.122,1.22a41.63,41.63,0,0,0-4.747,2.417l-4.295,2.558c.636.152,1.038.369,1.038.612,0,.456-1.41.825-3.15.825-.1,0-.2,0-.293,0l-7.879,4.694c.607.15.988.363.988.6,0,.456-1.41.826-3.149.826-.076,0-.151,0-.226,0l-5.864,3.493c.884.147,1.473.4,1.473.7,0,.456-1.41.826-3.149.826-.288,0-.566-.011-.831-.03l-5.928,3.532c-1.784,1.49-1.326,2.217.671,2.217,2.172,0,36.868-21.364,38.232-23.03C742.164,266.66,742.009,266.258,741.693,266.069Z" fill="#a2d7e4"/><path d="M712.467,284c0-.294-.589-.551-1.473-.7L710,283.9l-1.513.9c.265.019.543.03.831.03C711.057,284.83,712.467,284.46,712.467,284Z" fill="#56b8c4"/><path d="M720.233,278.99c0-.236-.381-.449-.988-.6l-2.387,1.422c.075,0,.15,0,.226,0C718.823,279.816,720.233,279.446,720.233,278.99Z" fill="#56b8c4"/><path d="M730.567,272.876c0-.243-.4-.46-1.038-.612l-2.4,1.433c.1,0,.194,0,.293,0C729.157,273.7,730.567,273.332,730.567,272.876Z" fill="#56b8c4"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(745.69 257.089) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(745.945 257.384) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(746.301 257.649) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(746.648 257.965) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="matrix(0.923, -0.386, 0.386, 0.923, 746.932, 258.151)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(746.714 256.375) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(746.969 256.671) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(747.325 256.936) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(747.672 257.252) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="matrix(0.923, -0.386, 0.386, 0.923, 747.956, 257.437)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(747.876 255.764) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(748.13 256.059) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(748.487 256.324) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(748.834 256.64) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="matrix(0.923, -0.386, 0.386, 0.923, 749.117, 256.826)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(748.93 255.076) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(749.185 255.371) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(749.542 255.636) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(749.888 255.952) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="matrix(0.923, -0.386, 0.386, 0.923, 750.172, 256.138)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(750.016 254.48) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(750.271 254.775) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(750.627 255.04) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(750.974 255.356) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="matrix(0.923, -0.386, 0.386, 0.923, 751.258, 255.542)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(751.132 253.838) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(751.387 254.133) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(751.743 254.398) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(752.09 254.714) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="matrix(0.923, -0.386, 0.386, 0.923, 752.374, 254.9)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(752.37 253.348) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(752.625 253.644) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(752.981 253.909) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="translate(753.328 254.225) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.55" cy="0.168" rx="0.55" ry="0.168" transform="matrix(0.923, -0.386, 0.386, 0.923, 753.612, 254.411)" fill="#d5d5d3"/><ellipse cx="0.477" cy="0.146" rx="0.477" ry="0.146" transform="translate(753.421 252.772) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.477" cy="0.146" rx="0.477" ry="0.146" transform="translate(753.642 253.029) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.477" cy="0.146" rx="0.477" ry="0.146" transform="translate(753.951 253.258) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.477" cy="0.146" rx="0.477" ry="0.146" transform="translate(754.251 253.532) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.477" cy="0.146" rx="0.477" ry="0.146" transform="matrix(0.923, -0.386, 0.386, 0.923, 754.497, 253.693)" fill="#d5d5d3"/><ellipse cx="0.477" cy="0.146" rx="0.477" ry="0.146" transform="translate(754.471 252.353) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.477" cy="0.146" rx="0.477" ry="0.146" transform="translate(754.692 252.609) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.477" cy="0.146" rx="0.477" ry="0.146" transform="translate(755.001 252.839) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.477" cy="0.146" rx="0.477" ry="0.146" transform="translate(755.302 253.113) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.387" cy="0.118" rx="0.387" ry="0.118" transform="translate(755.695 252.22) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.387" cy="0.118" rx="0.387" ry="0.118" transform="translate(755.938 252.442) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.492" cy="0.15" rx="0.492" ry="0.15" transform="translate(744.873 257.8) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.492" cy="0.15" rx="0.492" ry="0.15" transform="translate(745.101 258.064) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.492" cy="0.15" rx="0.492" ry="0.15" transform="translate(745.42 258.301) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.492" cy="0.15" rx="0.492" ry="0.15" transform="translate(745.73 258.584) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.373" cy="0.114" rx="0.373" ry="0.114" transform="translate(744.433 258.391) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.382" cy="0.117" rx="0.382" ry="0.117" transform="translate(744.695 258.658) rotate(-33.858)" fill="#d5d5d3"/><ellipse cx="0.382" cy="0.117" rx="0.382" ry="0.117" transform="translate(745.031 258.826) rotate(-33.858)" fill="#d5d5d3"/><path d="M748.258,258.007l2.161,4.26.245-.143Z" fill="#bebdbe"/><path d="M751.4,256.458l2.161,4.26.245-.143Z" fill="#bebdbe"/><path d="M754.6,253.992l2.232,4.224.176-.206Z" fill="#bebdbe"/><path d="M755.981,253.3l1.755,3.182.061-.285Z" fill="#bebdbe"/><path d="M748.1,262.246l-1.977-3.526,2.2,3.689Z" fill="#bebdbe"/><path d="M751.978,261.543l-2.028-4.331,2.2,4.26Z" fill="#bebdbe"/><path d="M755.158,259.719l-2.028-4.331,2.15,4.25Z" fill="#bebdbe"/></g></g></svg></Card>
                 {/* towel */}
                <Card id="towel" data-organ="towel" onClick={(e) => selectItem(e)} className="card" draggable="true"><svg id="towel" data-organ="towel" onClick={(e) => selectItem(e)}  xmlns="http://www.w3.org/2000/svg" width="96.459" height="96.459" viewBox="0 0 96.459 96.459"><g data-organ="towel" transform="translate(-251.528 -357.452)"><circle cx="48.23" cy="48.23" r="48.23" transform="translate(251.528 357.452)" fill="#cce7e6"/><g data-organ="towel"  transform="translate(-541.084 131.319)"><path d="M818.545,265.329a16.616,16.616,0,0,1-2.567-1.913c-1.869,2.371-2.435,3.285-3.911,5.366a16.741,16.741,0,0,0,2.567,1.914C816.11,268.615,816.677,267.7,818.545,265.329Z" fill="#ed9900"/><path d="M858.257,304.082c.328.372.5.557.851.926,1.475-2.081,2.042-3,3.91-5.367-.353-.368-.523-.553-.85-.925C860.3,301.087,859.733,302,858.257,304.082Z" fill="#c87c00"/><path d="M819.65,265.978c-1.868,2.371-2.435,3.285-3.91,5.366,23.241,7.189,29.549,11.988,42.517,32.738,1.476-2.081,2.043-2.995,3.911-5.366C849.2,277.966,842.891,273.167,819.65,265.978Z" fill="#ed9900"/><path d="M818.545,265.329c-1.868,2.371-2.435,3.286-3.911,5.367.438.274.659.4,1.106.648,1.475-2.081,2.042-2.995,3.91-5.366C819.2,265.733,818.982,265.6,818.545,265.329Z" fill="#c87c00"/><path d="M859.108,305.008a24.525,24.525,0,0,0,1.8,1.719c1.476-2.081,2.043-2.995,3.911-5.366a24.344,24.344,0,0,1-1.8-1.72C861.15,302.012,860.583,302.927,859.108,305.008Z" fill="#ed9900"/><path d="M825.012,259.642c-.446-.245-.668-.374-1.105-.649-1.857,2.225-3.494,3.965-5.362,6.336.437.275.658.4,1.105.649C821.518,263.607,823.155,261.866,825.012,259.642Z" fill="#fec66a"/><path d="M823.907,258.993a16.666,16.666,0,0,1-2.567-1.913c-1.857,2.224-3.494,3.965-5.362,6.336a16.616,16.616,0,0,0,2.567,1.913C820.413,262.958,822.05,261.218,823.907,258.993Z" fill="#fcd58e"/><path d="M863.018,299.641a24.344,24.344,0,0,0,1.8,1.72c1.868-2.371,3.505-4.111,5.362-6.336a24.533,24.533,0,0,1-1.8-1.72C866.524,295.53,864.887,297.27,863.018,299.641Z" fill="#fcd58e"/><path d="M862.168,298.716c.327.372.5.557.85.925,1.869-2.371,3.506-4.111,5.363-6.336-.354-.368-.523-.553-.851-.925C865.673,294.6,864.036,296.345,862.168,298.716Z" fill="#fec66a"/><path d="M862.168,298.716c1.868-2.371,3.5-4.112,5.362-6.336-12.969-20.75-19.276-25.549-42.518-32.738-1.857,2.224-3.494,3.965-5.362,6.336C842.891,273.167,849.2,277.966,862.168,298.716Z" fill="#fcd58e"/><path d="M815.74,271.344a59.869,59.869,0,0,1-4.945,6.3c23.241,7.189,29.549,11.987,42.518,32.737a59.61,59.61,0,0,0,4.944-6.294C845.289,283.332,838.981,278.533,815.74,271.344Z" fill="#fcd58e"/><path d="M812.067,268.782a59.51,59.51,0,0,1-4.945,6.294,16.742,16.742,0,0,0,2.568,1.914,59.608,59.608,0,0,0,4.944-6.294A16.741,16.741,0,0,1,812.067,268.782Z" fill="#fcd58e"/><path d="M858.257,304.082a59.61,59.61,0,0,1-4.944,6.294c.327.373.5.558.85.926a59.508,59.508,0,0,0,4.945-6.294C858.754,304.639,858.585,304.454,858.257,304.082Z" fill="#fec66a"/><path d="M814.634,270.7a59.608,59.608,0,0,1-4.944,6.294c.437.275.658.4,1.1.649a59.869,59.869,0,0,0,4.945-6.3C815.293,271.1,815.072,270.97,814.634,270.7Z" fill="#fec66a"/><path d="M854.163,311.3a24.349,24.349,0,0,0,1.8,1.72,59.6,59.6,0,0,0,4.944-6.3,24.525,24.525,0,0,1-1.8-1.719A59.508,59.508,0,0,1,854.163,311.3Z" fill="#fcd58e"/><path d="M874.262,290c1.573-1.945,2.347-2.9,4.781-5.676a24.546,24.546,0,0,1-1.8-1.72c-2.435,2.772-3.208,3.731-4.782,5.676A24.542,24.542,0,0,0,874.262,290Z" fill="#fcd58e"/><path d="M871.613,287.355c.327.372.5.558.85.926,1.574-1.945,2.347-2.9,4.782-5.676-.354-.368-.523-.553-.851-.925C873.96,284.451,873.186,285.411,871.613,287.355Z" fill="#fec66a"/><path d="M832.771,248.293a16.666,16.666,0,0,1-2.567-1.913c-2.435,2.771-3.208,3.731-4.781,5.675a16.691,16.691,0,0,0,2.567,1.914C829.563,252.024,830.337,251.065,832.771,248.293Z" fill="#fcd58e"/><path d="M829.095,254.617c1.573-1.944,2.347-2.9,4.782-5.675-.447-.245-.669-.374-1.106-.649-2.434,2.772-3.208,3.731-4.781,5.676C828.427,254.244,828.648,254.373,829.095,254.617Z" fill="#fec66a"/><path d="M871.613,287.355c1.573-1.944,2.347-2.9,4.781-5.675-12.968-20.75-19.276-25.549-42.517-32.738-2.435,2.771-3.209,3.731-4.782,5.675C852.336,261.807,858.644,266.605,871.613,287.355Z" fill="#fcd58e"/><path d="M829.095,254.617c-.447-.244-.668-.373-1.1-.648-1.6,1.98-2.226,2.8-4.083,5.024.437.275.659.4,1.105.649C826.869,257.417,827.493,256.6,829.095,254.617Z" fill="#c87c00"/><path d="M868.381,293.3c1.857-2.224,2.48-3.044,4.082-5.024-.353-.368-.523-.554-.85-.926-1.6,1.98-2.226,2.8-4.083,5.025C867.858,292.752,868.027,292.937,868.381,293.3Z" fill="#c87c00"/><path d="M825.012,259.642c23.242,7.189,29.549,11.988,42.518,32.738,1.857-2.225,2.481-3.045,4.083-5.025-12.969-20.75-19.277-25.548-42.518-32.738C827.493,256.6,826.869,257.417,825.012,259.642Z" fill="#ed9900"/><path d="M868.381,293.3a24.533,24.533,0,0,0,1.8,1.72c1.857-2.225,2.481-3.044,4.083-5.024a24.542,24.542,0,0,1-1.8-1.72C870.861,290.261,870.238,291.081,868.381,293.3Z" fill="#ed9900"/><path d="M827.99,253.969a16.691,16.691,0,0,1-2.567-1.914c-1.6,1.98-2.226,2.8-4.083,5.025a16.666,16.666,0,0,0,2.567,1.913C825.764,256.769,826.388,255.949,827.99,253.969Z" fill="#ed9900"/></g></g></svg></Card>
                </Board>
                <Board id="board-4" className="board">
                {/* skateboard */}
                
                <Card id="skateboard" className="card" draggable="true">
                <svg id="skateboard" data-organ="towel" onClick={(e) => selectItem(e)} xmlns="http://www.w3.org/2000/svg" width="96.459" height="96.459" viewBox="0 0 96.459 96.459">
  <defs>
    <clipPath id="clip-path">
      <path id="Path_38" data-name="Path 38" d="M603.812,385.766l-.957,2.513a.685.685,0,0,1-.213.286c-.667.544-2.439.352-3.96-.429-1.286-.661-1.98-1.532-1.759-2.114l.958-2.513c-.222.582.472,1.454,1.759,2.115,1.52.781,3.292.972,3.959.428A.685.685,0,0,0,603.812,385.766Z" fill="none"/>
    </clipPath>
    <clipPath id="clip-path-2">
      <path id="Path_58" data-name="Path 58" d="M597.519,397.926l-.958,2.512a.676.676,0,0,1-.213.286c-.667.544-2.439.353-3.959-.428-1.287-.661-1.981-1.533-1.759-2.115l.957-2.513c-.222.583.472,1.454,1.759,2.115,1.52.781,3.292.972,3.959.428A.684.684,0,0,0,597.519,397.926Z" fill="none"/>
    </clipPath>
    <clipPath id="clip-path-3">
      <path id="Path_79" data-name="Path 79" d="M642.579,399.648l-.957,2.513a.689.689,0,0,1-.213.285c-.667.544-2.439.353-3.96-.428-1.286-.661-1.98-1.532-1.759-2.115l.958-2.512c-.222.582.472,1.453,1.759,2.114,1.52.781,3.292.973,3.959.428A.682.682,0,0,0,642.579,399.648Z" fill="none"/>
    </clipPath>
    <clipPath id="clip-path-4">
      <path id="Path_99" data-name="Path 99" d="M636.286,411.807l-.958,2.513a.676.676,0,0,1-.213.286c-.667.544-2.439.353-3.959-.428-1.287-.661-1.981-1.533-1.759-2.115l.957-2.513c-.222.582.472,1.454,1.759,2.115,1.52.781,3.292.972,3.959.428A.688.688,0,0,0,636.286,411.807Z" fill="none"/>
    </clipPath>
  </defs>
  <g id="skateboard" data-organ="skateboard" transform="translate(-122 -358)">
    <g id="skateboard-2" data-organ="skateboard" data-name="skateboard" transform="translate(-447.084 14.712)">
      <circle id="Ellipse_11" data-name="Ellipse 11" cx="48.23" cy="48.23" r="48.23" transform="translate(569.084 343.288)" fill="#cce7e6"/>
      <g id="Group_36" data-organ="skateboard" data-name="Group 36">
        <path id="Path_19" data-name="Path 19" d="M653.667,401.746c-3.057-2.693-7.855-2.7-11.647-3.466a119,119,0,0,1-13.4-3.5c-9.176-2.99-17.281-8.14-26.127-11.875a58.556,58.556,0,0,0-5.628-2.074c-2.893-1.229-6.062-2.41-9.129-2.028a6.347,6.347,0,0,0-5.525,6.973c.427,7.642,8.684,12.8,14.5,16.377a81.362,81.362,0,0,0,46.6,11.95c3.726-.2,8.173-.673,10.955-3.461C656.889,408.018,656.357,404.115,653.667,401.746ZM610.78,391.408l-1.088-.475c-.259-.183-.517-.368-.778-.549Q609.847,390.894,610.78,391.408Zm-17.863-4.216,3.359,1.469q-1.7-.681-3.4-1.373Zm39.615,18.19a1.522,1.522,0,0,0-.091-.169c.265.085.528.174.793.258C633,405.444,632.766,405.412,632.532,405.382Z" fill="#636061"/>
        <g id="Group_22" data-name="Group 22">
          <g id="Group_15" data-name="Group 15">
            <g id="Group_14" data-name="Group 14" style={{isolation: 'isolate'}}>
              <g id="Group_12" data-name="Group 12" style={{isolation: 'isolate'}}>
                <g id="Group_11" data-name="Group 11" clip-path="url(#clip-path)">
                  <g id="Group_10" data-name="Group 10" style={{isolation: 'isolate'}}>
                    <path id="Path_20" data-name="Path 20" d="M603.812,385.766l-.957,2.513a.705.705,0,0,1-.034.074l.957-2.513a.705.705,0,0,0,.034-.074" fill="#731b1f"/>
                    <path id="Path_21" data-name="Path 21" d="M603.778,385.84l-.957,2.513a.685.685,0,0,1-.1.138l.958-2.513a.653.653,0,0,0,.1-.138" fill="#781c20"/>
                    <path id="Path_22" data-name="Path 22" d="M603.678,385.978l-.958,2.513a.927.927,0,0,1-.078.074l-.048.036.957-2.513.048-.036a.925.925,0,0,0,.079-.074" fill="#7d1d21"/>
                    <path id="Path_23" data-name="Path 23" d="M603.551,386.088l-.957,2.513a1.113,1.113,0,0,1-.151.089l.957-2.513a1.021,1.021,0,0,0,.151-.089" fill="#821e22"/>
                    <path id="Path_24" data-name="Path 24" d="M603.4,386.177l-.957,2.513a1.483,1.483,0,0,1-.177.072l.957-2.513a1.423,1.423,0,0,0,.177-.072" fill="#871f23"/>
                    <path id="Path_25" data-name="Path 25" d="M603.223,386.249l-.957,2.513a1.7,1.7,0,0,1-.216.057l.958-2.512a1.929,1.929,0,0,0,.215-.058" fill="#8d2024"/>
                    <path id="Path_26" data-name="Path 26" d="M603.008,386.307l-.958,2.512a2.41,2.41,0,0,1-.269.04l.957-2.512a2.641,2.641,0,0,0,.27-.04" fill="#922125"/>
                    <path id="Path_27" data-name="Path 27" d="M602.738,386.347l-.957,2.512a3.54,3.54,0,0,1-.392.015l.958-2.513a3.512,3.512,0,0,0,.391-.014" fill="#982226"/>
                    <path id="Path_28" data-name="Path 28" d="M602.347,386.361l-.958,2.513a5.812,5.812,0,0,1-1.6-.282l.957-2.513a5.812,5.812,0,0,0,1.6.282" fill="#9d2328"/>
                    <path id="Path_29" data-name="Path 29" d="M600.749,386.079l-.957,2.513q-.234-.074-.467-.165l.957-2.513q.234.092.467.165" fill="#982226"/>
                    <path id="Path_30" data-name="Path 30" d="M600.282,385.914l-.957,2.513c-.119-.047-.238-.1-.356-.152l.957-2.513c.118.054.237.105.356.152" fill="#922125"/>
                    <path id="Path_31" data-name="Path 31" d="M599.926,385.762l-.957,2.513c-.1-.044-.192-.09-.287-.139l-.025-.013.957-2.513.026.014c.094.048.19.094.286.138" fill="#8d2024"/>
                    <path id="Path_32" data-name="Path 32" d="M599.614,385.61l-.957,2.513c-.1-.05-.191-.1-.281-.154l.957-2.513c.09.052.184.1.281.154" fill="#871f23"/>
                    <path id="Path_33" data-name="Path 33" d="M599.333,385.456l-.957,2.513c-.091-.053-.177-.107-.26-.161l.957-2.513c.083.054.17.108.26.161" fill="#821e22"/>
                    <path id="Path_34" data-name="Path 34" d="M599.073,385.3l-.957,2.513c-.087-.057-.17-.115-.248-.173l.957-2.513c.079.058.161.116.248.173" fill="#7d1d21"/>
                    <path id="Path_35" data-name="Path 35" d="M598.825,385.122l-.957,2.513c-.088-.066-.171-.132-.249-.2l.957-2.513c.078.067.161.133.249.2" fill="#781c20"/>
                    <path id="Path_36" data-name="Path 36" d="M598.576,384.923l-.957,2.513c-.1-.082-.182-.166-.26-.248l.957-2.513a3.46,3.46,0,0,0,.26.248" fill="#731b1f"/>
                    <path id="Path_37" data-name="Path 37" d="M598.316,384.675l-.957,2.513c-.4-.421-.56-.839-.436-1.166l.958-2.513c-.125.327.039.745.435,1.166" fill="#6d191d"/>
                  </g>
                </g>
              </g>
              <g id="Group_13" data-name="Group 13">
                <path id="Path_39" data-name="Path 39" d="M602.055,383.653c1.52.781,2.211,1.854,1.544,2.4s-2.439.353-3.959-.428-2.213-1.856-1.547-2.4S600.534,382.872,602.055,383.653Z" fill="#d02b32"/>
              </g>
            </g>
          </g>
          <g id="Group_21" data-name="Group 21">
            <g id="Group_20" data-name="Group 20" style={{isolation: 'isolate'}}>
              <g id="Group_18" data-name="Group 18" style={{isolation: 'isolate'}}>
                <g id="Group_17" data-name="Group 17" clip-path="url(#clip-path-2)">
                  <g id="Group_16" data-name="Group 16" style={{isolation: 'isolate'}}>
                    <path id="Path_40" data-name="Path 40" d="M597.519,397.926l-.958,2.512a.407.407,0,0,1-.034.074l.958-2.512a.705.705,0,0,0,.034-.074" fill="#731b1f"/>
                    <path id="Path_41" data-name="Path 41" d="M597.485,398l-.958,2.512a.649.649,0,0,1-.1.139l.957-2.513a.714.714,0,0,0,.1-.138" fill="#781c20"/>
                    <path id="Path_42" data-name="Path 42" d="M597.384,398.138l-.957,2.513a.8.8,0,0,1-.079.073.6.6,0,0,1-.048.037l.957-2.513c.017-.012.033-.024.048-.037a.8.8,0,0,0,.079-.073" fill="#7d1d21"/>
                    <path id="Path_43" data-name="Path 43" d="M597.257,398.248l-.957,2.513a1.152,1.152,0,0,1-.151.089l.958-2.513a1.211,1.211,0,0,0,.15-.089" fill="#821e22"/>
                    <path id="Path_44" data-name="Path 44" d="M597.107,398.337l-.958,2.513a1.419,1.419,0,0,1-.177.072l.957-2.513a1.5,1.5,0,0,0,.178-.072" fill="#871f23"/>
                    <path id="Path_45" data-name="Path 45" d="M596.929,398.409l-.957,2.513a2.029,2.029,0,0,1-.215.057l.957-2.513a2.034,2.034,0,0,0,.215-.057" fill="#8d2024"/>
                    <path id="Path_46" data-name="Path 46" d="M596.714,398.466l-.957,2.513a2.413,2.413,0,0,1-.269.04l.957-2.513a2.41,2.41,0,0,0,.269-.04" fill="#922125"/>
                    <path id="Path_47" data-name="Path 47" d="M596.445,398.506l-.957,2.513a3.316,3.316,0,0,1-.392.014l.957-2.513a3.317,3.317,0,0,0,.392-.014" fill="#982226"/>
                    <path id="Path_48" data-name="Path 48" d="M596.053,398.52l-.957,2.513a5.781,5.781,0,0,1-1.6-.282l.958-2.513a5.733,5.733,0,0,0,1.6.282" fill="#9d2328"/>
                    <path id="Path_49" data-name="Path 49" d="M594.456,398.238l-.958,2.513c-.155-.049-.311-.1-.466-.165l.957-2.513c.155.061.311.117.467.165" fill="#982226"/>
                    <path id="Path_50" data-name="Path 50" d="M593.989,398.073l-.957,2.513c-.12-.047-.239-.1-.357-.151l.957-2.513c.118.054.237.1.357.151" fill="#922125"/>
                    <path id="Path_51" data-name="Path 51" d="M593.632,397.922l-.957,2.513c-.1-.044-.191-.09-.286-.139l-.026-.013.957-2.513.026.013c.095.049.19.1.286.139" fill="#8d2024"/>
                    <path id="Path_52" data-name="Path 52" d="M593.32,397.77l-.957,2.513c-.1-.051-.191-.1-.281-.155l.958-2.513c.09.053.183.1.28.155" fill="#871f23"/>
                    <path id="Path_53" data-name="Path 53" d="M593.04,397.615l-.958,2.513c-.09-.053-.177-.106-.259-.161l.957-2.512c.083.054.169.108.26.16" fill="#821e22"/>
                    <path id="Path_54" data-name="Path 54" d="M592.78,397.455l-.957,2.512c-.087-.057-.17-.114-.248-.173l.957-2.512c.078.058.161.116.248.173" fill="#7d1d21"/>
                    <path id="Path_55" data-name="Path 55" d="M592.532,397.282l-.957,2.512c-.089-.065-.172-.132-.249-.2l.957-2.512c.077.066.16.133.249.2" fill="#781c20"/>
                    <path id="Path_56" data-name="Path 56" d="M592.283,397.083l-.957,2.512a3.29,3.29,0,0,1-.261-.248l.958-2.513c.078.083.165.166.26.249" fill="#731b1f"/>
                    <path id="Path_57" data-name="Path 57" d="M592.023,396.834l-.958,2.513c-.4-.421-.559-.839-.435-1.166l.957-2.513c-.124.327.04.745.436,1.166" fill="#6d191d"/>
                  </g>
                </g>
              </g>
              <g id="Group_19" data-name="Group 19">
                <path id="Path_59" data-name="Path 59" d="M595.761,395.812c1.521.781,2.211,1.855,1.544,2.4s-2.439.353-3.959-.428-2.213-1.856-1.546-2.4S594.241,395.031,595.761,395.812Z" fill="#d02b32"/>
              </g>
            </g>
          </g>
          <path id="Path_60" data-name="Path 60" d="M598.837,388.15l-4.664,8.633.929.423,4.291-8.761" fill="#e1353d"/>
        </g>
        <rect id="Rectangle_3" data-name="Rectangle 3" width="4.514" height="4.74" transform="translate(596.211 388.809) rotate(24.596)" fill="#e1353d"/>
        <g id="Group_35" data-name="Group 35">
          <g id="Group_28" data-name="Group 28">
            <g id="Group_27" data-name="Group 27" style={{isolation: 'isolate'}}>
              <g id="Group_25" data-name="Group 25" style={{isolation: 'isolate'}}>
                <g id="Group_24" data-name="Group 24" clip-path="url(#clip-path-3)">
                  <g id="Group_23" data-name="Group 23" style={{isolation: 'isolate'}}>
                    <path id="Path_61" data-name="Path 61" d="M642.579,399.648l-.957,2.513a.813.813,0,0,1-.034.074l.957-2.513a.7.7,0,0,0,.034-.074" fill="#731b1f"/>
                    <path id="Path_62" data-name="Path 62" d="M642.545,399.722l-.957,2.513a.716.716,0,0,1-.1.138l.958-2.513a.71.71,0,0,0,.1-.138" fill="#781c20"/>
                    <path id="Path_63" data-name="Path 63" d="M642.445,399.86l-.958,2.513a.779.779,0,0,1-.078.073l-.048.037.957-2.513.048-.037a.925.925,0,0,0,.079-.073" fill="#7d1d21"/>
                    <path id="Path_64" data-name="Path 64" d="M642.318,399.97l-.957,2.513a1.225,1.225,0,0,1-.151.089l.957-2.513a1.11,1.11,0,0,0,.151-.089" fill="#821e22"/>
                    <path id="Path_65" data-name="Path 65" d="M642.167,400.059l-.957,2.513a1.492,1.492,0,0,1-.177.072l.957-2.513a1.424,1.424,0,0,0,.177-.072" fill="#871f23"/>
                    <path id="Path_66" data-name="Path 66" d="M641.99,400.131l-.957,2.513a2.127,2.127,0,0,1-.216.057l.958-2.513a1.735,1.735,0,0,0,.215-.057" fill="#8d2024"/>
                    <path id="Path_67" data-name="Path 67" d="M641.775,400.188l-.958,2.513a2.411,2.411,0,0,1-.269.04l.957-2.513a2.4,2.4,0,0,0,.27-.04" fill="#922125"/>
                    <path id="Path_68" data-name="Path 68" d="M641.505,400.228l-.957,2.513a3.322,3.322,0,0,1-.392.014l.958-2.512a3.519,3.519,0,0,0,.391-.015" fill="#982226"/>
                    <path id="Path_69" data-name="Path 69" d="M641.114,400.243l-.958,2.512a5.737,5.737,0,0,1-1.6-.282l.957-2.512a5.813,5.813,0,0,0,1.6.282" fill="#9d2328"/>
                    <path id="Path_70" data-name="Path 70" d="M639.516,399.961l-.957,2.512q-.234-.073-.467-.165l.957-2.513q.234.093.467.166" fill="#982226"/>
                    <path id="Path_71" data-name="Path 71" d="M639.049,399.8l-.957,2.513c-.119-.047-.238-.1-.356-.151l.957-2.513c.118.054.237.1.356.151" fill="#922125"/>
                    <path id="Path_72" data-name="Path 72" d="M638.693,399.644l-.957,2.513c-.1-.044-.192-.09-.287-.139l-.025-.013.957-2.513.026.013c.094.049.19.1.286.139" fill="#8d2024"/>
                    <path id="Path_73" data-name="Path 73" d="M638.381,399.492l-.957,2.513c-.1-.051-.191-.1-.281-.155l.957-2.513c.09.053.184.1.281.155" fill="#871f23"/>
                    <path id="Path_74" data-name="Path 74" d="M638.1,399.337l-.957,2.513c-.091-.052-.177-.106-.26-.161l.957-2.512c.083.054.17.108.26.16" fill="#821e22"/>
                    <path id="Path_75" data-name="Path 75" d="M637.84,399.177l-.957,2.512c-.087-.056-.17-.114-.248-.172l.957-2.513c.079.058.161.116.248.173" fill="#7d1d21"/>
                    <path id="Path_76" data-name="Path 76" d="M637.592,399l-.957,2.513c-.088-.066-.171-.133-.249-.2l.957-2.513c.078.067.161.133.249.2" fill="#781c20"/>
                    <path id="Path_77" data-name="Path 77" d="M637.343,398.8l-.957,2.513c-.095-.083-.182-.166-.26-.249l.957-2.513c.078.083.165.166.26.249" fill="#731b1f"/>
                    <path id="Path_78" data-name="Path 78" d="M637.083,398.556l-.957,2.513c-.4-.421-.56-.839-.436-1.166l.958-2.512c-.125.326.039.745.435,1.165" fill="#6d191d"/>
                  </g>
                </g>
              </g>
              <g id="Group_26" data-name="Group 26">
                <path id="Path_80" data-name="Path 80" d="M640.822,397.535c1.52.78,2.211,1.854,1.544,2.4s-2.439.353-3.959-.428-2.213-1.855-1.547-2.4S639.3,396.754,640.822,397.535Z" fill="#d02b32"/>
              </g>
            </g>
          </g>
          <g id="Group_34" data-name="Group 34">
            <g id="Group_33" data-name="Group 33" style={{isolation: 'isolate'}}>
              <g id="Group_31" data-name="Group 31" style={{isolation: 'isolate'}}>
                <g id="Group_30" data-name="Group 30" clip-path="url(#clip-path-4)">
                  <g id="Group_29" data-name="Group 29" style={{isolation: 'isolate'}}>
                    <path id="Path_81" data-name="Path 81" d="M636.286,411.807l-.958,2.513a.452.452,0,0,1-.034.074l.958-2.513a.708.708,0,0,0,.034-.074" fill="#731b1f"/>
                    <path id="Path_82" data-name="Path 82" d="M636.252,411.881l-.958,2.513a.621.621,0,0,1-.1.138l.957-2.513a.661.661,0,0,0,.1-.138" fill="#781c20"/>
                    <path id="Path_83" data-name="Path 83" d="M636.151,412.019l-.957,2.513a.8.8,0,0,1-.079.074l-.048.036.957-2.513a.59.59,0,0,0,.048-.036.8.8,0,0,0,.079-.074" fill="#7d1d21"/>
                    <path id="Path_84" data-name="Path 84" d="M636.024,412.129l-.957,2.513a.97.97,0,0,1-.151.089l.958-2.512a1.1,1.1,0,0,0,.15-.09" fill="#821e22"/>
                    <path id="Path_85" data-name="Path 85" d="M635.874,412.219l-.958,2.512a1.419,1.419,0,0,1-.177.072l.957-2.512a1.5,1.5,0,0,0,.178-.072" fill="#871f23"/>
                    <path id="Path_86" data-name="Path 86" d="M635.7,412.291l-.957,2.512a1.821,1.821,0,0,1-.215.058l.957-2.513a2.029,2.029,0,0,0,.215-.057" fill="#8d2024"/>
                    <path id="Path_87" data-name="Path 87" d="M635.481,412.348l-.957,2.513a2.669,2.669,0,0,1-.269.04l.957-2.513a2.67,2.67,0,0,0,.269-.04" fill="#922125"/>
                    <path id="Path_88" data-name="Path 88" d="M635.212,412.388l-.957,2.513a3.555,3.555,0,0,1-.392.014l.957-2.513a3.554,3.554,0,0,0,.392-.014" fill="#982226"/>
                    <path id="Path_89" data-name="Path 89" d="M634.82,412.4l-.957,2.513a5.819,5.819,0,0,1-1.6-.282l.958-2.513a5.768,5.768,0,0,0,1.6.282" fill="#9d2328"/>
                    <path id="Path_90" data-name="Path 90" d="M633.223,412.12l-.958,2.513c-.155-.049-.311-.1-.466-.165l.957-2.513q.233.092.467.165" fill="#982226"/>
                    <path id="Path_91" data-name="Path 91" d="M632.756,411.955l-.957,2.513c-.12-.047-.239-.1-.357-.152l.957-2.512c.118.054.237.1.357.151" fill="#922125"/>
                    <path id="Path_92" data-name="Path 92" d="M632.4,411.8l-.957,2.512c-.1-.044-.191-.09-.286-.138l-.026-.014.957-2.513.026.014c.1.048.19.1.286.139" fill="#8d2024"/>
                    <path id="Path_93" data-name="Path 93" d="M632.087,411.651l-.957,2.513c-.1-.05-.191-.1-.281-.154l.958-2.513c.09.052.183.1.28.154" fill="#871f23"/>
                    <path id="Path_94" data-name="Path 94" d="M631.807,411.5l-.958,2.513c-.09-.053-.177-.107-.259-.161l.957-2.513c.083.055.169.108.26.161" fill="#821e22"/>
                    <path id="Path_95" data-name="Path 95" d="M631.547,411.336l-.957,2.513c-.087-.057-.17-.115-.248-.173l.957-2.513c.078.059.161.116.248.173" fill="#7d1d21"/>
                    <path id="Path_96" data-name="Path 96" d="M631.3,411.163l-.957,2.513c-.089-.066-.172-.132-.249-.2l.957-2.513c.077.067.16.134.249.2" fill="#781c20"/>
                    <path id="Path_97" data-name="Path 97" d="M631.05,410.964l-.957,2.513a3.291,3.291,0,0,1-.261-.248l.958-2.513a3.46,3.46,0,0,0,.26.248" fill="#731b1f"/>
                    <path id="Path_98" data-name="Path 98" d="M630.79,410.716l-.958,2.513c-.395-.421-.559-.839-.435-1.166l.957-2.513c-.124.327.04.745.436,1.166" fill="#6d191d"/>
                  </g>
                </g>
              </g>
              <g id="Group_32" data-name="Group 32">
                <path id="Path_100" data-name="Path 100" d="M634.528,409.694c1.521.781,2.211,1.855,1.544,2.4s-2.439.353-3.959-.428-2.213-1.856-1.546-2.4S633.008,408.913,634.528,409.694Z" fill="#d02b32"/>
              </g>
            </g>
          </g>
          <path id="Path_101" data-name="Path 101" d="M637.6,402.032l-4.664,8.633.929.423,4.291-8.761" fill="#e1353d"/>
        </g>
        <rect id="Rectangle_4" data-name="Rectangle 4" width="4.514" height="4.74" transform="translate(634.978 402.69) rotate(24.596)" fill="#e1353d"/>
      </g>
    </g>
    <g id="wrongskateboard" className="hide" transform="translate(-18)">
      <g id="Group_6" data-name="Group 6" transform="translate(-359.084 318.319)">
        <circle id="Ellipse_1" data-name="Ellipse 1" cx="48.23" cy="48.23" r="48.23" transform="translate(499.084 39.681)" fill="#ff0505" opacity="0.549"/>
      </g>
      <line id="Line_1" data-name="Line 1" x2="68" y2="68" transform="translate(154.5 372.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"/>
      <line id="Line_2" data-name="Line 2" x1="68" y2="68" transform="translate(154.5 372.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"/>
    </g>
  </g>
</svg>

</Card>
                 {/* socks */}
                <Card id="socks" className="card" draggable="true"><svg id="socks" data-organ="socks" onClick={(e) => selectItem(e)} xmlns="http://www.w3.org/2000/svg" width="96.459" height="96.459" viewBox="0 0 96.459 96.459"><defs><clipPath id="a"><path d="M737.459,368.5s-6.341-5.927-17.919-3.722c0,0,.965,21.366-4.963,22.331s-20.124-12.544-21.916,2.343c-1.325,11,13.469,14.552,24.059,14.874,1.507-2.871,5.985-9.044,16.028-7.279C736.1,391.18,738.224,381.6,737.459,368.5Z" fill="none"/></clipPath><clipPath id="b"><path d="M761.479,387.484s-7.508-4.354-18.3.393c0,0,5.732,20.6.172,22.874s-22.425-7.71-20.832,7.2c1.177,11.021,16.389,11.16,26.782,9.1.825-3.136,3.8-10.156,13.988-10.688C765.244,409.886,765.162,400.075,761.479,387.484Z" fill="none"/></clipPath></defs><g data-organ="socks"  transform="translate(-139.764 -474.608)"><circle cx="48.23" cy="48.23" r="48.23" transform="translate(139.764 474.608)" fill="#cce7e6"/><g data-organ="socks"  transform="translate(-541.084 131.319)"><path d="M720.532,353.151s13.508-4.411,17.919,4l-.965,11.441s-7.857-5.927-17.919-3.722Z" fill="#efecec"/><path d="M716.747,404.416a32.873,32.873,0,0,0,8.747-.677c2.64-.74,5.2-2.957,7.281-6.6C722.732,395.372,718.254,401.544,716.747,404.416Z" fill="#efecec"/><path d="M737.486,368.589s-6.341-5.927-17.919-3.722c0,0,.965,21.366-4.963,22.331s-20.124-12.544-21.916,2.343c-1.325,11,13.469,14.552,24.059,14.875,1.507-2.872,5.985-9.044,16.028-7.28C736.13,391.265,738.251,381.686,737.486,368.589Z" fill="#d2d2d2"/><g clip-path="url(#a)"><rect width="4.227" height="4.227" rx="2.114" transform="translate(717.488 365.712) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(725.676 365.963) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(734.815 366.944) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="matrix(0.996, 0.087, -0.087, 0.996, 730.491, 372.102)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(722.24 372.582) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(717.598 379.281) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="matrix(0.996, 0.087, -0.087, 0.996, 726.892, 379.537)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(736.178 379.884) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(730.744 386.145) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(722.123 385.578) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="matrix(0.996, 0.087, -0.087, 0.996, 712.665, 386.138)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(703.101 384.752) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(695.303 384.257) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(698.928 390.292) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="matrix(0.996, 0.087, -0.087, 0.996, 708.087, 392.104)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(719.2 391.596) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(712.982 397.327) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(702.916 397.465) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="matrix(0.996, 0.087, -0.087, 0.996, 694.362, 395.06)" fill="#de1e28"/></g><path d="M741.615,376.373s12.2-7.284,18.36-.057l1.584,11.371s-8.971-4.046-18.3.327Z" fill="#efecec"/><path d="M749.242,427.209a32.819,32.819,0,0,0,8.382-2.592c2.411-1.3,4.417-4.031,5.644-8.047C753.083,417.066,750.078,424.075,749.242,427.209Z" fill="#efecec"/><path d="M761.559,387.687s-7.492-4.381-18.3.327c0,0,5.658,20.625.09,22.875s-22.4-7.791-20.858,7.124c1.137,11.025,16.349,11.219,26.749,9.2.836-3.134,3.841-10.143,14.026-10.639C765.244,410.1,765.2,400.292,761.559,387.687Z" fill="#d2d2d2"/><g clip-path="url(#b)"><rect width="4.227" height="4.227" rx="2.114" transform="translate(744.046 389.593) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="matrix(0.996, 0.087, -0.087, 0.996, 752.233, 389.844)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="matrix(0.996, 0.087, -0.087, 0.996, 761.372, 390.825)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(757.049 395.983) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(748.797 396.463) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(744.155 403.162) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(753.449 403.418) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(762.736 403.765) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(757.302 410.026) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="matrix(0.996, 0.087, -0.087, 0.996, 748.68, 409.459)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="matrix(0.996, 0.087, -0.087, 0.996, 739.223, 410.019)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(729.658 408.633) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="matrix(0.996, 0.087, -0.087, 0.996, 721.861, 408.138)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="matrix(0.996, 0.087, -0.087, 0.996, 725.486, 414.173)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(734.644 415.985) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(745.758 415.477) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(739.54 421.208) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(729.473 421.346) rotate(4.977)" fill="#de1e28"/><rect width="4.227" height="4.227" rx="2.114" transform="translate(720.92 418.941) rotate(4.977)" fill="#de1e28"/></g></g></g></svg></Card>
                 {/* phone */}
                <Card id="phone" data-organ="phone" onClick={(e) => selectItem(e)} className="card" draggable="true"><svg id="phone" data-organ="phone" onClick={(e) => selectItem(e)} xmlns="http://www.w3.org/2000/svg" width="96.459" height="96.459" viewBox="0 0 96.459 96.459"><defs><clipPath id="a"><path d="M832.4,421.814l-2.184-1.188a2.387,2.387,0,0,1-1.132-1.869l2.183,1.188A2.391,2.391,0,0,0,832.4,421.814Z" fill="none"/></clipPath><clipPath id="b"><path d="M848.432,358.38l2.183,1.188a1.711,1.711,0,0,0-1.07-.191l-2.183-1.188A1.718,1.718,0,0,1,848.432,358.38Z" fill="none"/></clipPath><clipPath id="c"><path d="M824.688,366.081l-2.183-1.188c-.2-1.661.846-3.329,2.214-3.522l2.183,1.188C825.534,362.751,824.486,364.42,824.688,366.081Z" fill="none"/></clipPath></defs><g data-organ="phone"  transform="translate(-251.528 -474.608)"><circle cx="48.23" cy="48.23" r="48.23" transform="translate(251.528 474.608)" fill="#cce7e6"/><g data-organ="phone" transform="translate(-541.084 131.319)"><path d="M825.836,368.145c-.232.173-.44.338-.629.5l9.009-5.367Z" fill="#c4baa2"/><g data-organ="phone" style={{isolation: "isolate"}}><g style={{isolation: "isolate"}}><g clip-path="url(#a)"><g style={{isolation: "isolate"}}><path d="M832.4,421.814l-2.184-1.188a2.387,2.387,0,0,1-1.132-1.869l2.183,1.188a2.391,2.391,0,0,0,1.133,1.869" fill="#5f5f5f"/></g></g></g><g style={{isolation: "isolate"}}><g clip-path="url(#b)"><g style={{isolation: "isolate"}}><path d="M849.545,359.377l-2.183-1.188a1.744,1.744,0,0,1,.678.036l2.183,1.188a1.742,1.742,0,0,0-.678-.036" fill="#7c7c7d"/><path d="M850.223,359.413l-2.183-1.188a1.734,1.734,0,0,1,.327.121l2.183,1.188a1.71,1.71,0,0,0-.327-.121" fill="#787878"/><path d="M850.55,359.534l-2.183-1.188.065.034,2.183,1.188c-.021-.012-.043-.023-.065-.034" fill="#747474"/></g></g></g><path d="M826.9,362.559l-2.184-1.188,22.643-3.182,2.183,1.188Z" fill="#888787"/><path d="M831.268,419.945l-2.183-1.188-6.58-53.864,2.184,1.188Z" fill="#5b5b5b"/><g style={{isolation: "isolate"}}><g clip-path="url(#c)"><g style={{isolation: "isolate"}}><path d="M824.688,366.081l-2.183-1.188a3.564,3.564,0,0,1,.2-1.654l2.184,1.188a3.577,3.577,0,0,0-.2,1.654" fill="#5f5f5f"/><path d="M824.885,364.427l-2.184-1.188a3.585,3.585,0,0,1,.207-.459l2.183,1.188a3.4,3.4,0,0,0-.206.459" fill="#636363"/><path d="M825.091,363.968l-2.183-1.188a3.336,3.336,0,0,1,.206-.336l2.184,1.188a3.261,3.261,0,0,0-.207.336" fill="#676768"/><path d="M825.3,363.632l-2.184-1.188a3.229,3.229,0,0,1,.215-.273l2.184,1.187a3.061,3.061,0,0,0-.215.274" fill="#6b6b6c"/><path d="M825.513,363.358l-2.184-1.187a2.818,2.818,0,0,1,.23-.233l2.183,1.188a2.947,2.947,0,0,0-.229.232" fill="#6f7070"/><path d="M825.742,363.126l-2.183-1.188a2.657,2.657,0,0,1,.259-.2L826,362.921a2.775,2.775,0,0,0-.259.205" fill="#747474"/><path d="M826,362.921l-2.183-1.188a2.427,2.427,0,0,1,.327-.189l2.183,1.188a2.391,2.391,0,0,0-.327.189" fill="#787878"/><path d="M826.328,362.732l-2.183-1.188a2.035,2.035,0,0,1,.574-.173l2.183,1.188a2,2,0,0,0-.574.173" fill="#7c7c7d"/></g></g></g><path d="M849.545,359.377a2.064,2.064,0,0,1,2.2,2.061l6.58,53.863c.2,1.661-.846,3.33-2.214,3.522l-22.641,3.182a2.066,2.066,0,0,1-2.2-2.06l-6.58-53.864c-.2-1.661.846-3.33,2.214-3.522Z" fill="#b0afaf"/></g><path d="M855.553,409.175l-22.991,3.3-5.748-42.191,22.991-3.057Z" fill="#464544"/><circle cx="2.996" cy="2.996" r="2.996" transform="translate(841.857 411.865)" fill="#464544"/></g></g></svg>
</Card>
                </Board>
                </div>

            </main> 
            <div id="finishedbag" className="finishedbag containerfinished hide"> 
            <svg id="finishedbag" className="finishedbagimg" xmlns="http://www.w3.org/2000/svg" width="555" height="391.345" viewBox="0 0 555 391.345">
  <g id="finishedbag" transform="translate(-202.723 -23.974)">
    <text id="ALLES_IS_MEE_" data-name="ALLES IS MEE!" transform="translate(202.723 172.319)" fill="#efefee" font-size="50" font-family="Laca-Bold, Laca" font-weight="700"><tspan x="118.802" y="47">ALLES IS MEE!</tspan></text>
    <g id="replaybag" onClick={(e) => restart(e)} >
      <g id="Group_2" data-name="Group 2">
        <circle id="Ellipse_1" data-name="Ellipse 1" cx="55.245" cy="55.245" r="55.245" transform="translate(312.984 239.883)" fill="#4fa036"/>
        <path id="Path_1" data-name="Path 1" d="M367.457,256.212a38.527,38.527,0,0,0-16.034,3.469l-3.073,1.4,5.57,12.32L357,272a25.125,25.125,0,0,1,10.454-2.262,25.393,25.393,0,1,1-25.393,25.393c0-.124.007-.25.009-.374l4.844.843-7.385-25.059L322.65,291.376l6,1.043c-.065.906-.107,1.81-.107,2.709a38.916,38.916,0,1,0,38.916-38.916Z" fill="#fff"/>
      </g>
    </g>
    <Link to="/spelletjes">
        
    <g id="stopbag" onClick={(e) => stopPlaying(e)}>
      <g id="Group_3" data-name="Group 3">
        <circle id="Ellipse_2" data-name="Ellipse 2" cx="55.245" cy="55.245" r="55.245" transform="translate(526.573 239.883)" fill="#e13313"/>
      </g>
      <path id="Path_2" data-name="Path 2" d="M614.164,273.069l-10.288-10.287L581.818,284.84,559.76,262.782l-10.288,10.287,22.058,22.058-22.058,22.058,10.288,10.287,22.058-22.058,22.058,22.058,10.288-10.287-22.058-22.058Z" fill="#fff"/>
    </g>
    </Link>
    <g id="Group_180" data-name="Group 180">
      <g id="Group_29" data-name="Group 29">
        <g id="Group_6" data-name="Group 6">
          <g id="Group_5" data-name="Group 5">
            <path id="Path_3" data-name="Path 3" d="M481.906,132.147" fill="none" stroke="#161615" stroke-miterlimit="10" stroke-width="4.975"/>
          </g>
        </g>
        <g id="Group_20" data-name="Group 20">
          <g id="Group_10" data-name="Group 10">
            <g id="Group_7" data-name="Group 7">
              <path id="Path_4" data-name="Path 4" d="M512,120.154a23.33,23.33,0,0,0-.215,6.442l-.078.011c.142,4.827-8.2,25.874-18.831,26.612-8.738.6-19.313-11.929-5.694-37.474a51.074,51.074,0,0,1,15.829-17.913A42.8,42.8,0,0,1,549.28,95.8a31.437,31.437,0,0,1,11.925,11.893c3.713,6.829,7.081,17.344,9.318,28.115.949,4.54,1.7,9.133,2.194,13.51,1.329,11.9.769,22.243-2.847,25.825-7.539,7.452-22.04,3.825-25.884-5.843a18.462,18.462,0,0,0-.687-2.263c-2.337-11.327,7.433-31.673,4.356-35.2,0,0-9.945,22.17-27.715,8.9a20.263,20.263,0,0,1-5.868-6.726c-.13-.249-.259-.508-.388-.766A23.457,23.457,0,0,1,512,120.154Zm24.8,2.356a2.235,2.235,0,0,0-.439-3.943l-1.535-.658-1.543-.668a2.365,2.365,0,0,0-3.368,2.3l.175,1.584.174,1.594a2.457,2.457,0,0,0,3.817,1.643l1.359-.927Zm-9.013-13.363c.449-.969.406-1.921-.084-2.132s-1.243.418-1.693,1.4-.4,1.931.093,2.133S527.347,110.125,527.788,109.147Z" fill="#c2ad8d"/>
            </g>
            <g id="Group_8" data-name="Group 8">
              <path id="Path_5" data-name="Path 5" d="M536.362,118.567a2.235,2.235,0,0,1,.439,3.943l-1.36.927-1.359.927a2.457,2.457,0,0,1-3.817-1.643l-.174-1.594-.175-1.584a2.365,2.365,0,0,1,3.368-2.3l1.543.668Z" fill="#e08797"/>
            </g>
            <g id="Group_9" data-name="Group 9">
              <path id="Path_6" data-name="Path 6" d="M527.7,107.015c.49.211.533,1.163.084,2.132s-1.193,1.6-1.684,1.4-.533-1.164-.093-2.133S527.214,106.813,527.7,107.015Z" fill="#161615"/>
            </g>
          </g>
          <g id="Group_19" data-name="Group 19">
            <g id="Group_11" data-name="Group 11">
              <path id="Path_7" data-name="Path 7" d="M513.684,134.174a.932.932,0,0,1-.841-.528,21.446,21.446,0,0,1-1.987-6.947,24.349,24.349,0,0,1,.221-6.7c1-5.915,3.87-10.956,5.413-13.665l.269-.472a.932.932,0,1,1,1.622.919l-.271.476c-1.486,2.608-4.252,7.462-5.194,13.05a22.539,22.539,0,0,0-.208,6.183,19.317,19.317,0,0,0,1.816,6.346.932.932,0,0,1-.437,1.244A.919.919,0,0,1,513.684,134.174Z" fill="#947667"/>
            </g>
            <g id="Group_12" data-name="Group 12">
              <path id="Path_8" data-name="Path 8" d="M543.986,170.231a.932.932,0,0,1-.906-.716,17.671,17.671,0,0,0-.653-2.149.933.933,0,0,1,1.744-.661,19.642,19.642,0,0,1,.722,2.376.932.932,0,0,1-.69,1.124A.953.953,0,0,1,543.986,170.231Z" fill="#947667"/>
            </g>
            <g id="Group_13" data-name="Group 13">
              <path id="Path_9" data-name="Path 9" d="M559.607,180.049a18.65,18.65,0,0,1-3.826-.4c-5.842-1.223-10.694-5.056-12.661-10a13.606,13.606,0,0,1-.733-2.418c-1.293-6.263.895-14.813,2.824-22.356.97-3.792,2.034-7.951,2.12-10.436-1.941,3.309-6.258,9.305-12.823,11.009-4.837,1.254-9.925-.078-15.125-3.96a21.312,21.312,0,0,1-6.135-7.036c-.133-.255-.261-.512-.39-.77a20.583,20.583,0,0,1-1.032-2.667c-2.379,8.143-9.747,22.506-18.888,23.14-4.008.28-7.868-1.851-10.352-5.685-2.294-3.541-6.518-13.86,3.77-33.158A51.977,51.977,0,0,1,502.471,97.07,43.683,43.683,0,0,1,549.755,95a32.256,32.256,0,0,1,12.27,12.251c3.619,6.656,7.049,17,9.411,28.369.972,4.651,1.715,9.226,2.208,13.6.882,7.9,1.651,21.868-3.118,26.591A15.394,15.394,0,0,1,559.607,180.049ZM547.655,130.9a.933.933,0,0,1,.7.32c1.673,1.921.636,6.386-1.341,14.113-1.786,6.984-4.01,15.676-2.805,21.516a11.679,11.679,0,0,0,.637,2.1c1.743,4.383,6.077,7.782,11.314,8.878,5,1.045,9.874-.2,13.051-3.345,3.075-3.045,4.015-12.178,2.577-25.057-.486-4.311-1.22-8.828-2.181-13.423-2.326-11.2-5.688-21.357-9.224-27.86A30.422,30.422,0,0,0,548.8,96.6a41.816,41.816,0,0,0-45.261,1.994A50.132,50.132,0,0,0,488,116.183c-9.822,18.424-5.966,28-3.851,31.267s5.345,5.071,8.658,4.839c9.83-.682,18.1-21.17,17.963-25.655a.926.926,0,0,1,.126-.5,28.95,28.95,0,0,1,.174-6.1c.011-.112.025-.254.05-.4a.933.933,0,0,1,1.836.329c-.017.092-.025.183-.033.276a22.462,22.462,0,0,0,1.6,12.6c.122.246.246.493.371.732a19.455,19.455,0,0,0,5.6,6.412c4.723,3.526,9.279,4.753,13.54,3.648,8.164-2.118,12.719-12.088,12.764-12.188a.933.933,0,0,1,.714-.541A1.05,1.05,0,0,1,547.655,130.9Z" fill="#947667"/>
            </g>
            <g id="Group_14" data-name="Group 14">
              <path id="Path_10" data-name="Path 10" d="M527.577,132.486a1.675,1.675,0,0,1-1-.363c-.232-.184-.455-.357-.69-.539-2.708-2.1-7.24-5.607-5.917-11.175a.932.932,0,0,1,1.814.431c-1.045,4.4,2.74,7.33,5.244,9.27.155.119.3.235.447.346l.042-.069,3.459-5.5a.933.933,0,1,1,1.579.993l-3.454,5.493a2.054,2.054,0,0,1-1.264,1.089A1.33,1.33,0,0,1,527.577,132.486Z" fill="#503d32"/>
            </g>
            <g id="Group_15" data-name="Group 15">
              <path id="Path_11" data-name="Path 11" d="M532.748,133.785a15.46,15.46,0,0,1-4.957-.873.933.933,0,1,1,.6-1.767c4.011,1.36,7.463.951,10.26-1.217a.932.932,0,1,1,1.142,1.473A11.258,11.258,0,0,1,532.748,133.785Z" fill="#503d32"/>
            </g>
            <g id="Group_16" data-name="Group 16">
              <path id="Path_12" data-name="Path 12" d="M528.19,99.589a.932.932,0,0,1-.429-1.76c.344-.178,3.417-1.725,5.516-1.263a.932.932,0,1,1-.4,1.821c-1.227-.269-3.542.727-4.257,1.1A.929.929,0,0,1,528.19,99.589Z" fill="#503d32"/>
            </g>
            <g id="Group_17" data-name="Group 17">
              <path id="Path_13" data-name="Path 13" d="M553.3,113.014a.934.934,0,0,1-.845-1.327c.715-1.531-1.186-3.2-1.205-3.222a.932.932,0,0,1,1.215-1.414c.122.1,2.995,2.608,1.681,5.425A.934.934,0,0,1,553.3,113.014Z" fill="#503d32"/>
            </g>
            <g id="Group_18" data-name="Group 18">
              <path id="Path_14" data-name="Path 14" d="M532.694,125.723a3.487,3.487,0,0,1-1.464-.326,3.227,3.227,0,0,1-1.891-2.572v0l-.348-3.177a3.118,3.118,0,0,1,1.27-2.876,3.43,3.43,0,0,1,3.393-.384l3.076,1.325a3.229,3.229,0,0,1,1.985,2.672,3.118,3.118,0,0,1-1.389,2.9l-2.719,1.853A3.4,3.4,0,0,1,532.694,125.723Zm-1.5-3.105a1.363,1.363,0,0,0,.82,1.087,1.571,1.571,0,0,0,1.549-.114l2.714-1.851a1.264,1.264,0,0,0,.583-1.183,1.389,1.389,0,0,0-.868-1.135l-3.076-1.326a1.544,1.544,0,0,0-1.543.17,1.26,1.26,0,0,0-.528,1.172Z" fill="#b87d7f"/>
            </g>
          </g>
        </g>
        <g id="Group_22" data-name="Group 22">
          <g id="Group_21" data-name="Group 21">
            <path id="Path_15" data-name="Path 15" d="M545.979,118.407c-.422.981-1.139,1.605-1.6,1.4s-.5-1.16-.078-2.131,1.147-1.6,1.611-1.4S546.41,117.437,545.979,118.407Z" fill="#161615"/>
          </g>
        </g>
        <g id="Group_24" data-name="Group 24">
          <g id="Group_23" data-name="Group 23">
            <ellipse id="Ellipse_3" data-name="Ellipse 3" cx="3.769" cy="3.32" rx="3.769" ry="3.32" transform="translate(540.744 131.819) rotate(-84.51)" fill="#e08797"/>
          </g>
        </g>
        <g id="Group_26" data-name="Group 26">
          <g id="Group_25" data-name="Group 25">
            <ellipse id="Ellipse_4" data-name="Ellipse 4" cx="3.769" cy="3.32" rx="3.769" ry="3.32" transform="translate(516.163 118.907) rotate(-84.51)" fill="#e08797"/>
          </g>
        </g>
        <g id="Group_28" data-name="Group 28">
          <g id="Group_27" data-name="Group 27">
            <path id="Path_16" data-name="Path 16" d="M545.194,150.634a1.025,1.025,0,0,1-.987-1.294c.974-3.544,1.724-16.053,1.731-16.179a1.023,1.023,0,0,1,2.043.121c-.031.523-.771,12.85-1.8,16.6A1.022,1.022,0,0,1,545.194,150.634Z" fill="#947667"/>
          </g>
        </g>
      </g>
      <g id="Group_179" data-name="Group 179">
        <g id="Group_31" data-name="Group 31">
          <g id="Group_30" data-name="Group 30">
            <path id="Path_17" data-name="Path 17" d="M511.243,68.709a.611.611,0,0,1-.579-.421c-.041-.129-.092-.257-.14-.376l0-.006a.326.326,0,0,0-.353-.2.609.609,0,0,1-.719-.648,1.529,1.529,0,0,1,.734-1.186,6.991,6.991,0,0,1,.939-.475.61.61,0,0,1,.85.524l.02.347c.022.363.042.7.055,1.014a2.552,2.552,0,0,1-.142,1,.606.606,0,0,1-.245.306.891.891,0,0,1-.266.109A.6.6,0,0,1,511.243,68.709Z" fill="#161615"/>
          </g>
        </g>
        <g id="Group_33" data-name="Group 33">
          <g id="Group_32" data-name="Group 32">
            <path id="Path_18" data-name="Path 18" d="M405.05,111.4l-.041,0a.6.6,0,0,1-.471-.277l-.277-.429c-.269-.416-.545-.843-.824-1.285a.609.609,0,0,1,.065-.738c.28-.305.486-.5.574-.586l.052-.051a1.6,1.6,0,0,1,1.819-.229.714.714,0,0,1,.073.037.637.637,0,0,1,.206.2h0c.159.252.3.474.436.687a.606.606,0,0,1,.086.215,1.562,1.562,0,0,1-.46,1.408l-.042.042c-.094.093-.381.377-.733.79A.61.61,0,0,1,405.05,111.4Zm-.329-2.243q.207.322.409.635c.121-.126.212-.216.259-.262l0,0s-.024.029-.051.071a.6.6,0,0,1,.1-.119.37.37,0,0,0,.114-.217c-.086-.136-.174-.274-.261-.413a.377.377,0,0,0-.348.089C404.891,108.994,404.816,109.066,404.721,109.162Zm.615.45h0Zm0,0h0Zm0,0h0Zm0-.007h0Z" fill="#161615"/>
          </g>
        </g>
        <g id="Group_35" data-name="Group 35">
          <g id="Group_34" data-name="Group 34">
            <path id="Path_19" data-name="Path 19" d="M510.994,68.743a1.55,1.55,0,0,1-1.544-1.7.609.609,0,0,1,.495-.537,1.538,1.538,0,0,1,1.709.953c.059.144.118.3.169.454a.609.609,0,0,1-.414.775A1.521,1.521,0,0,1,510.994,68.743Z" fill="#161615"/>
          </g>
        </g>
        <g id="Group_37" data-name="Group 37">
          <g id="Group_36" data-name="Group 36">
            <path id="Path_20" data-name="Path 20" d="M480.819,139.365" fill="none" stroke="#161615" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.222"/>
          </g>
        </g>
        <g id="Group_39" data-name="Group 39">
          <g id="Group_38" data-name="Group 38">
            <path id="Path_21" data-name="Path 21" d="M510.307,69.408a1.874,1.874,0,0,1-1.492-.772.591.591,0,0,1-.113-.237l0-.009a1.56,1.56,0,0,1,.946-1.806,1.262,1.262,0,0,1,.346-.087.609.609,0,0,1,.672.667.331.331,0,0,0,.416.349.609.609,0,0,1,.678.259.88.88,0,0,1,.11.266.611.611,0,0,1-.048.428,1.76,1.76,0,0,1-1,.866A1.719,1.719,0,0,1,510.307,69.408Z" fill="#161615"/>
          </g>
        </g>
        <g id="Group_41" data-name="Group 41">
          <g id="Group_40" data-name="Group 40">
            <path id="Path_22" data-name="Path 22" d="M512.718,84.234a.611.611,0,0,1-.607-.557,54,54,0,0,0-3.334-15.053,1.164,1.164,0,0,1-.07-.2.615.615,0,0,1,.317-.7.607.607,0,0,1,.75.165.606.606,0,0,0,.671.288.525.525,0,0,0,.289-.26.623.623,0,0,1,.574-.331.611.611,0,0,1,.537.389,56.19,56.19,0,0,1,3.24,14.358.609.609,0,0,1-.237.545,3.869,3.869,0,0,1-.413.279l-.054.031a.322.322,0,0,0-.19.314.61.61,0,0,1-.56.67l-.866.066A.362.362,0,0,1,512.718,84.234Zm-2.342-14.827a56.024,56.024,0,0,1,2.86,13.2,1.584,1.584,0,0,1,.578-.508l.022-.013a55.8,55.8,0,0,0-2.815-12.842,1.627,1.627,0,0,1-.2.084A1.7,1.7,0,0,1,510.376,69.407Zm-.509-1.325h0Z" fill="#161615"/>
          </g>
        </g>
        <g id="Group_43" data-name="Group 43">
          <g id="Group_42" data-name="Group 42">
            <path id="Path_23" data-name="Path 23" d="M511.276,68.8a.507.507,0,0,1-.086-.007.7.7,0,1,1,.7-.488,1.53,1.53,0,0,1-.094.2A.61.61,0,0,1,511.276,68.8Zm-.546-.371Zm.5-.394h0l-.124-.527-.011,0Zm-.222-.48h0Z" fill="#161615"/>
          </g>
        </g>
        <g id="Group_45" data-name="Group 45">
          <g id="Group_44" data-name="Group 44">
            <path id="Path_24" data-name="Path 24" d="M514.5,85.024a1.527,1.527,0,0,1-1.374-.86,1.32,1.32,0,0,1-.149-.571,1.53,1.53,0,0,1,.838-1.49,3.059,3.059,0,0,0,.295-.2.61.61,0,0,1,.976.418c.075.686.132,1.375.169,2.048a.609.609,0,0,1-.513.636A1.666,1.666,0,0,1,514.5,85.024Z" fill="#161615"/>
          </g>
        </g>
        <g id="Group_47" data-name="Group 47">
          <g id="Group_46" data-name="Group 46">
            <path id="Path_25" data-name="Path 25" d="M429.219,94.792a.609.609,0,0,1-.609-.617,9.017,9.017,0,0,1,.3-2.18.612.612,0,0,1,.424-.431c.765-.216,1.5-.424,2.255-.645a.609.609,0,0,1,.72.85,5.933,5.933,0,0,0-.56,1.94.607.607,0,0,1-.437.518c-.3.086-.589.168-.88.25-.306.086-.61.171-.911.258l-.144.038A.611.611,0,0,1,429.219,94.792ZM430,92.64q-.076.358-.12.724l.215-.06.492-.139a7.145,7.145,0,0,1,.166-.738Z" fill="#161615"/>
          </g>
        </g>
        <g id="Group_49" data-name="Group 49">
          <g id="Group_48" data-name="Group 48">
            <path id="Path_26" data-name="Path 26" d="M430.2,96.7a1.565,1.565,0,0,1-1.553-1.392,9.452,9.452,0,0,1-.041-1.138.61.61,0,0,1,.457-.573l.119-.031c.3-.087.6-.172.912-.258q.432-.122.872-.247a.609.609,0,0,1,.774.652,6.112,6.112,0,0,0-.007,1.283,1.549,1.549,0,0,1-1.158,1.655,1.248,1.248,0,0,1-.13.026.755.755,0,0,1-.106.017C430.3,96.694,430.25,96.7,430.2,96.7Zm-.375-2.051c.006.176.017.356.035.538a.317.317,0,0,0,.344.295l.059-.01a.34.34,0,0,0,.257-.362c-.021-.214-.033-.43-.035-.646l-.062.017Zm-.482-.495h0Z" fill="#161615"/>
          </g>
        </g>
        <g id="Group_51" data-name="Group 51">
          <g id="Group_50" data-name="Group 50">
            <path id="Path_27" data-name="Path 27" d="M429.523,92.75a.626.626,0,0,1-.437-.17.612.612,0,0,1-.181-.586c1.38-5.188,6.886-7.689,7.509-7.957a1.549,1.549,0,0,1,2.031.8.609.609,0,0,1-.117.668L432.2,91.924a.619.619,0,0,1-.269.164c-.756.222-1.5.432-2.229.639A.647.647,0,0,1,429.523,92.75Zm2.233-1.247h0ZM437,85.133a.338.338,0,0,0-.111.026c-.2.087-4.753,2.085-6.443,6.089.327-.094.653-.187.981-.284Z" fill="#161615"/>
          </g>
        </g>
        <g id="Group_53" data-name="Group 53">
          <g id="Group_52" data-name="Group 52">
            <path id="Path_28" data-name="Path 28" d="M485.52,138.477" fill="#b87d7f" stroke="#b87d7f" stroke-miterlimit="10" stroke-width="2.222"/>
          </g>
        </g>
        <g id="Group_55" data-name="Group 55">
          <g id="Group_54" data-name="Group 54">
            <path id="Path_29" data-name="Path 29" d="M480.169,139.934" fill="#b87d7f" stroke="#b87d7f" stroke-miterlimit="10" stroke-width="2.222"/>
          </g>
        </g>
        <g id="Group_58" data-name="Group 58">
          <g id="Group_57" data-name="Group 57">
            <g id="Group_56" data-name="Group 56">
              <path id="Path_30" data-name="Path 30" d="M474.108,33.1l.26,1.015a1.241,1.241,0,0,0,.415.55,2.538,2.538,0,0,0,.741.533,4.937,4.937,0,0,0,1.054.44,5.6,5.6,0,0,0,1.177.3l.735.071a3.317,3.317,0,0,0,1.172-.141l.374-.2a.554.554,0,0,0,.173-.636l-.26-1.015a1.242,1.242,0,0,0-.415-.55,2.537,2.537,0,0,0-.741-.533,4.988,4.988,0,0,0-1.054-.44,5.6,5.6,0,0,0-1.177-.3l-.735-.071a3.317,3.317,0,0,0-1.172.141l-.374.205a.552.552,0,0,0-.173.635Z" fill="#eac46d"/>
            </g>
          </g>
        </g>
        <g id="Group_61" data-name="Group 61">
          <g id="Group_60" data-name="Group 60">
            <g id="Group_59" data-name="Group 59">
              <path id="Path_31" data-name="Path 31" d="M490.507,42.051l2.916,2.5c.4.347.812.693,1.216,1.042.2.176.41.353.611.535.065.059.5.49.363.342,1.128,1.191,1.526,2.988,2.614,4.362A5.527,5.527,0,0,0,501,52.739c.458.131.959.122,1.406.283q-.24-.109.068.053c-.184-.117-.178-.1.015.053l-.109-.1c.089.1.173.205.254.312-.178-.237.135.216.165.266.139.234.267.474.395.714.253.472.5.945.752,1.418L505.7,59.05a2.541,2.541,0,0,0,2.468,1.373c.968-.19,1.047-1.208.655-1.947a54.018,54.018,0,0,0-3.518-6.377,5.988,5.988,0,0,0-2.947-2.253,8.149,8.149,0,0,0-1.52-.317q-.246-.081.036.025c-.2-.12-.194-.111.035.027-.177-.156-.167-.144.029.034-.056-.063-.109-.129-.159-.2-.083-.11-.069-.089.041.065-.062-.1-.121-.2-.178-.3-.087-.157-.168-.317-.247-.479-.188-.384-.357-.777-.541-1.162a9.87,9.87,0,0,0-1.85-2.648c-1.764-1.805-3.8-3.371-5.716-5.011-.61-.522-1.848-.95-2.461-.2-.63.768.079,1.86.679,2.374Z" fill="#eac46d"/>
            </g>
          </g>
        </g>
        <g id="Group_64" data-name="Group 64">
          <g id="Group_63" data-name="Group 63">
            <g id="Group_62" data-name="Group 62">
              <path id="Path_32" data-name="Path 32" d="M403.76,77.066c2.877-3.731,5.649-7.593,6.292-12.386a22.164,22.164,0,0,1,1.367-6.409,14.533,14.533,0,0,1,3.283-4.624,14.021,14.021,0,0,1,5.553-3.232c.93-.282.767-1.368.284-1.972a2.641,2.641,0,0,0-2.656-.952,16.378,16.378,0,0,0-9.46,7.7,16.763,16.763,0,0,0-1.9,6.147,31.3,31.3,0,0,1-.573,3.855,15.158,15.158,0,0,1-1.2,3.124,42.325,42.325,0,0,1-4.528,6.736c-.586.76.5,1.847,1.1,2.182a1.858,1.858,0,0,0,2.435-.173Z" fill="#eac46d"/>
            </g>
          </g>
        </g>
        <g id="Group_67" data-name="Group 67">
          <g id="Group_66" data-name="Group 66">
            <g id="Group_65" data-name="Group 65">
              <path id="Path_33" data-name="Path 33" d="M424.357,49.994a31.8,31.8,0,0,0,5.4-3.743c1.513-1.3,2.89-2.84,4.786-3.589.488-.193.71-1.034.707-1.475a4.013,4.013,0,0,0-.454-1.771,4.216,4.216,0,0,0-1.206-1.54,2.859,2.859,0,0,0-1.717-.594c-3.888-.136-6.74,2.988-9.036,5.7a2.408,2.408,0,0,0-.262,1.8,4.516,4.516,0,0,0,1.053,2.107c.794.848,2.2,1.7,3.143.579a32,32,0,0,1,2.417-2.643l-.384.36a10.144,10.144,0,0,1,3.375-2.157l-.5.175a6.538,6.538,0,0,1,2.364-.368l-2.67-5.381c-1.9.75-3.273,2.288-4.786,3.59a31.655,31.655,0,0,1-5.4,3.742,1.757,1.757,0,0,0-.707,1.475,4.021,4.021,0,0,0,.635,2.135c.628.969,1.97,2.294,3.239,1.6Z" fill="#eac46d"/>
            </g>
          </g>
        </g>
        <g id="Group_70" data-name="Group 70">
          <g id="Group_69" data-name="Group 69">
            <g id="Group_68" data-name="Group 68">
              <path id="Path_34" data-name="Path 34" d="M424.477,101.447a12.038,12.038,0,0,0-3.842,4.394,13.207,13.207,0,0,0-1.291,5.7,4.771,4.771,0,0,1-.8,2.954,4.314,4.314,0,0,1-1.9,1.25c-.453.164-.922.3-1.386.429-.076.02-.312.081-.443.112-.432.105-.256.055-.164.038-.042.008-.349.024-.159.023a3.844,3.844,0,0,1-2.315-1.085,34.943,34.943,0,0,1-5.155-6.2c-.443-.636-4.164.085-4,.693.751,2.824,3.1,4.776,5.386,6.4a11.12,11.12,0,0,0,4.058,2.138,8.183,8.183,0,0,0,5.947-1.136c1.014-.74,1.639-1.88,2.645-2.615a5.215,5.215,0,0,1,1.575-.5,5.252,5.252,0,0,0,2.174-1.15c1.773-1.711,1.164-4.829,1.646-7.016a10.856,10.856,0,0,1,5.683-7.283c.792-.4-.636-.515-.828-.509a6.6,6.6,0,0,0-2.709.64,11.66,11.66,0,0,0-5.27,5.325,11.3,11.3,0,0,0-1.048,3.518c-.141,1.159-.128,2.333-.335,3.485A3.573,3.573,0,0,1,420.5,113.6c.082-.054.509-.122.008-.021-.146.029-.293.063-.438.1a11.684,11.684,0,0,0-1.309.385,5.54,5.54,0,0,0-1.778,1.035,12.314,12.314,0,0,0-1.131,1.2c-.2.229-.4.458-.621.672a6.669,6.669,0,0,0-.652.52c-.043.058,1.329-.256,1.361-.236a1.787,1.787,0,0,0-.424-.1,5.341,5.341,0,0,1-.941-.392,16.418,16.418,0,0,1-1.924-1.213c-2.371-1.659-4.851-3.556-5.63-6.485l-4,.693a43.007,43.007,0,0,0,5.01,6.112,5.3,5.3,0,0,0,3.283,1.585,14.253,14.253,0,0,0,4.721-.455,26.891,26.891,0,0,0,3.721-1.148,6.477,6.477,0,0,0,2.693-1.773,5.258,5.258,0,0,0,.9-3.225,14.513,14.513,0,0,1,.413-3.412,11.229,11.229,0,0,1,4.254-6.118c.686-.486-.541-.518-.827-.509a5.437,5.437,0,0,0-2.709.64Z" fill="#eac46d"/>
            </g>
          </g>
        </g>
        <g id="Group_73" data-name="Group 73">
          <g id="Group_72" data-name="Group 72">
            <g id="Group_71" data-name="Group 71">
              <path id="Path_35" data-name="Path 35" d="M430.613,100.31a16.209,16.209,0,0,0,7.878-3.661,10.46,10.46,0,0,0,2.339-2.792,1.97,1.97,0,0,0-.014-2.009,3.034,3.034,0,0,0-1.766-1.21,7.131,7.131,0,0,0-4.752.418,5.157,5.157,0,0,0-2.22,1.766c-.253.378-.445.731-.134,1.154a2.348,2.348,0,0,0,1.516.648,5.846,5.846,0,0,0,2.342-.21,3.241,3.241,0,0,0,1.7-.936,3.644,3.644,0,0,1,.406-.513c.3-.308-.118.048-.117.086.047-.036.1-.07.144-.1q.252-.163-.322.172c.4-.2-.567.174-.656.193a4.487,4.487,0,0,1-1.41.1q-.684-.164-.395-.073c.161.053.069.013-.278-.122a2.273,2.273,0,0,0,.258.166l-.356-.3a1.534,1.534,0,0,1,.374.458l-.166-.366a1.2,1.2,0,0,1,.093.6l.05-.4a2.148,2.148,0,0,1-.287.709l.251-.39a10.257,10.257,0,0,1-1.366,1.681q-.189.19-.388.372c-.058.054-.119.106-.178.159-.2.179.4-.325.107-.093s-.566.438-.865.637q-.2.132-.4.257c-.085.051-.172.1-.257.151-.259.156.53-.28.261-.145-.321.161-.64.321-.972.459-.092.038-.185.074-.277.111-.35.142.346-.137.361-.132-.092-.03-.4.132-.512.164-.172.05-.345.1-.519.139-.391.1.449-.1.444-.1-.118.018-.236.046-.353.067a5.217,5.217,0,0,0-2.065.747c-.3.212-.84.694-.726,1.152.3,1.183,2.358,1.132,3.231.977Z" fill="#eac46d"/>
            </g>
          </g>
        </g>
        <g id="Group_76" data-name="Group 76">
          <g id="Group_75" data-name="Group 75">
            <g id="Group_74" data-name="Group 74">
              <path id="Path_36" data-name="Path 36" d="M477.162,33.2c-3.694-2.3-8.6-4.541-12.922-2.612-1.131.5.3,2.115.787,2.546a6.348,6.348,0,0,0,1.981,1.266,2.268,2.268,0,0,0,1.591.187,7.1,7.1,0,0,1,1.2-.42,4.4,4.4,0,0,1,1.009-.135,9.656,9.656,0,0,1,1.284.03c-.469-.039.284.048.37.065q.315.06.627.14c.139.035.825.161.193.043a3.687,3.687,0,0,1,.621.224c.2.079.408.164.61.252.115.051.23.1.344.156q-.531-.257-.241-.113c.813.427,1.606.874,2.386,1.359a3.747,3.747,0,0,0,1.827.579c.376-.015.827-.181.837-.636.031-1.281-1.587-2.358-2.506-2.931Z" fill="#eac46d"/>
            </g>
          </g>
        </g>
        <g id="Group_79" data-name="Group 79">
          <g id="Group_78" data-name="Group 78">
            <g id="Group_77" data-name="Group 77">
              <path id="Path_37" data-name="Path 37" d="M451.188,35.82c3.628-1.655,7.61-1.309,11.488-1.379a30.021,30.021,0,0,0,6.246-.709c2.175-.5,4.324-1.127,6.479-1.7,1.858-.5-.2-3.969-1.834-3.53-2.156.577-4.3,1.2-6.479,1.7a27.56,27.56,0,0,1-5.978.656c-3.939.04-8.08-.246-11.757,1.431-.864.394-.808,1.354-.417,2.111.318.616,1.4,1.807,2.252,1.42Z" fill="#eac46d"/>
            </g>
          </g>
        </g>
        <g id="Group_98" data-name="Group 98">
          <g id="Group_97" data-name="Group 97">
            <g id="Group_96" data-name="Group 96">
              <g id="Group_84" data-name="Group 84">
                <g id="Group_80" data-name="Group 80">
                  <path id="Path_38" data-name="Path 38" d="M519.172,85.07c1.081,1.24,2.859,2.907,2.4,5.617-1.372,7.866-5.717,9.4-7.576,10a71.889,71.889,0,0,0,.759-7.675c0-.118.016-.231.013-.339.089-1.616.1-3.2.041-4.715,0-.1,0-.2-.007-.292-.023-1.1-.076-2.195-.158-3.264-.039-.057-.087-.112-.125-.161-.019-.171-.039-.35-.066-.52a.649.649,0,0,0,.122-.115.639.639,0,0,0,.216-.038A5.164,5.164,0,0,1,519.172,85.07Z" fill="#efbbad"/>
                </g>
                <g id="Group_81" data-name="Group 81">
                  <path id="Path_39" data-name="Path 39" d="M514.515,84.242c.038.049.086.1.125.161a.465.465,0,0,1-.106.01Z" fill="#efbbad"/>
                </g>
                <g id="Group_82" data-name="Group 82">
                  <path id="Path_40" data-name="Path 40" d="M514.534,84.413c.126,1.05.22,2.133.264,3.254.006.091.007.191.007.292.037,1.55.029,3.12-.041,4.715,0,.108-.01.221-.013.339a62.881,62.881,0,0,1-.983,7.749c.069-.026.148-.046.224-.074a62.829,62.829,0,0,1-7.4,21.864c-4.035,7.031-12.311,12.892-23.623,16.823q-1.652.525-3.5.965c-1.444.353-2.971.678-4.559.959-11.767,2.127-26.626,2.33-34.491.11-8.868-2.5-16.5-8.376-21.258-13.177-1.463-1.487-2.742-2.912-3.846-4.206l-.071-.015c.006-.044.014-.079.019-.122-1.57-1.971-2.216-4.917-2.544-5.412l-.616-2.173c-1.413-1.03.512.2-3.311-5.525a2.832,2.832,0,0,0-1.006-1.043c.231-1.359,23.4-131.646,106.726-25.494Z" fill="#efbbad"/>
                </g>
                <g id="Group_83" data-name="Group 83">
                  <path id="Path_41" data-name="Path 41" d="M415.266,123.889c-.005.043-.013.078-.019.122-.536,3.962-6.97-.268-11.23-3.831a5.844,5.844,0,0,1-2.4-4.366c-.051-1.932,3.593-7.512,6.167-6.076l.007,0a2.832,2.832,0,0,1,1.006,1.043c3.823,5.721,1.9,4.5,3.311,5.525l.616,2.173C413.05,118.972,413.7,121.918,415.266,123.889Z" fill="#efbbad"/>
                </g>
              </g>
              <g id="Group_95" data-name="Group 95">
                <g id="Group_85" data-name="Group 85">
                  <path id="Path_42" data-name="Path 42" d="M415.319,124.636a.627.627,0,0,1-.128-.014l-.071-.015a.609.609,0,0,1,.255-1.192l.071.015a.61.61,0,0,1-.127,1.206Z" fill="#b87d7f"/>
                </g>
                <g id="Group_86" data-name="Group 86">
                  <path id="Path_43" data-name="Path 43" d="M514.534,85.023a.611.611,0,0,1-.606-.541l-.019-.178a.61.61,0,0,1,1.213-.124l.018.165a.61.61,0,0,1-.538.674A.526.526,0,0,1,514.534,85.023Z" fill="#161615"/>
                </g>
                <g id="Group_87" data-name="Group 87">
                  <path id="Path_44" data-name="Path 44" d="M514.8,88.276a.608.608,0,0,1-.608-.585c-.041-1.047-.126-2.1-.26-3.205a.609.609,0,0,1,1.21-.145c.138,1.142.225,2.223.267,3.3a.609.609,0,0,1-.584.633Z" fill="#b87d7f"/>
                </g>
                <g id="Group_88" data-name="Group 88">
                  <path id="Path_45" data-name="Path 45" d="M514.765,93.283h-.034a.609.609,0,0,1-.575-.642c.088-1.6.1-3.168.04-4.656a.61.61,0,0,1,1.218-.051c.063,1.527.049,3.133-.041,4.774A.61.61,0,0,1,514.765,93.283Z" fill="#161615"/>
                </g>
                <g id="Group_89" data-name="Group 89">
                  <path id="Path_46" data-name="Path 46" d="M513.8,101.846a1.111,1.111,0,0,1-.712-.251,1.1,1.1,0,0,1-.4-1.037,62.064,62.064,0,0,0,.965-7.614,1.1,1.1,0,1,1,2.189.137c-.123,1.962-.346,3.962-.665,5.969,1.878-.92,4.339-3,5.308-8.552.331-1.939-.814-3.22-1.824-4.349-.111-.124-.218-.243-.319-.359a3.774,3.774,0,0,0-2.8-1.166,1.1,1.1,0,0,1-2.119-.262c-.017-.154-.035-.316-.059-.468a1.1,1.1,0,0,1,.395-1.026,1.188,1.188,0,0,1,.723-.354l.03-.008A6.228,6.228,0,0,1,520,84.35c.094.108.2.22.3.336,1.139,1.274,2.86,3.2,2.351,6.185-1.51,8.654-6.457,10.257-8.32,10.86-.015.007-.07.024-.124.042A1.152,1.152,0,0,1,513.8,101.846Zm.6-19.3h0Zm.163-.032h0Z" fill="#b87d7f"/>
                </g>
                <g id="Group_90" data-name="Group 90">
                  <path id="Path_47" data-name="Path 47" d="M413.576,126.692c-3,0-7.6-3.439-10.263-5.671a6.9,6.9,0,0,1-2.795-5.184c-.047-1.791,2.054-5.417,4.35-6.806a3.289,3.289,0,0,1,3.336-.31,1.048,1.048,0,0,1,.117.056,3.915,3.915,0,0,1,1.411,1.432c2.267,3.392,2.593,4.476,2.738,5,.062.049.156.119.282.211a1.092,1.092,0,0,1,.409.588l.581,2.05a9.117,9.117,0,0,1,.407,1.057,14.308,14.308,0,0,0,1.975,4.093,1.091,1.091,0,0,1,.229.831l-.015.1a2.7,2.7,0,0,1-1.679,2.373A2.969,2.969,0,0,1,413.576,126.692ZM406.884,110.6a1.755,1.755,0,0,0-.881.307c-1.739,1.052-3.315,3.99-3.292,4.877a4.759,4.759,0,0,0,2.01,3.554c4.648,3.887,8.124,5.517,9.144,5.122.048-.018.154-.059.233-.3a17.386,17.386,0,0,1-2.022-4.328c-.1-.3-.235-.678-.287-.777a.876.876,0,0,1-.122-.276l-.515-1.817a1.888,1.888,0,0,1-.787-1.136c-.1-.338-.346-1.238-2.482-4.435a2.061,2.061,0,0,0-.567-.657c-.023-.011-.046-.022-.069-.035A.691.691,0,0,0,406.884,110.6Z" fill="#b87d7f"/>
                </g>
                <g id="Group_91" data-name="Group 91">
                  <path id="Path_48" data-name="Path 48" d="M455.614,144.093a61.032,61.032,0,0,1-15.49-1.628c-10.509-2.961-18.7-10.4-21.739-13.461-1.329-1.351-2.605-2.746-3.9-4.266a1.1,1.1,0,1,1,1.669-1.424c1.262,1.481,2.5,2.838,3.793,4.148,2.91,2.935,10.766,10.072,20.774,12.892,7.4,2.089,22.018,2.032,34-.134,1.521-.27,3.032-.587,4.493-.945,1.176-.278,2.328-.6,3.432-.945a1.1,1.1,0,0,1,.662,2.091c-1.155.367-2.36.7-3.581.987-1.5.366-3.056.694-4.62.971A112.677,112.677,0,0,1,455.614,144.093Z" fill="#b87d7f"/>
                </g>
                <g id="Group_92" data-name="Group 92">
                  <path id="Path_49" data-name="Path 49" d="M482.974,140.473a1.1,1.1,0,0,1-.36-2.133c11.161-3.879,19.125-9.527,23.032-16.334a61.276,61.276,0,0,0,7.262-21.482,71.18,71.18,0,0,0,.747-7.561c0-.04,0-.1.008-.158,0-.036.006-.07.005-.1s0-.05,0-.075c.065-1.508.078-3.027.04-4.641,0-.1,0-.172-.006-.24l0-.055c-.022-1.065-.074-2.142-.154-3.2a1.1,1.1,0,1,1,2.187-.166c.083,1.094.137,2.2.16,3.3.006.1.007.219.008.333.039,1.633.026,3.189-.04,4.738,0,.082-.005.166-.01.252l-.005.1a73.43,73.43,0,0,1-.771,7.812,63.444,63.444,0,0,1-7.527,22.243c-4.174,7.272-12.547,13.259-24.215,17.314A1.107,1.107,0,0,1,482.974,140.473Z" fill="#b87d7f"/>
                </g>
                <g id="Group_93" data-name="Group 93">
                  <path id="Path_50" data-name="Path 50" d="M514.481,85.024a1.544,1.544,0,0,1-1.36-.849.609.609,0,0,1,1.086-.553.335.335,0,0,0,.3.183.6.6,0,0,1,.731.441.621.621,0,0,1-.448.747,1.073,1.073,0,0,1-.254.03Z" fill="#161615"/>
                </g>
                <g id="Group_94" data-name="Group 94">
                  <path id="Path_51" data-name="Path 51" d="M407.788,110.346a.609.609,0,0,1-.154-1.2l.008,0a.61.61,0,1,1,.3,1.183A.633.633,0,0,1,407.788,110.346Z" fill="#b87d7f"/>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id="Group_100" data-name="Group 100">
          <g id="Group_99" data-name="Group 99">
            <path id="Path_52" data-name="Path 52" d="M411.375,116.491" fill="#efbbad" stroke="#161615" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.222"/>
          </g>
        </g>
        <g id="Group_178" data-name="Group 178">
          <g id="Group_102" data-name="Group 102">
            <g id="Group_101" data-name="Group 101">
              <path id="Path_53" data-name="Path 53" d="M485.9,70.517a.929.929,0,0,1-.02,1.326.945.945,0,0,1-1.336-.027c-4-4.15-10.633-.915-10.7-.887a.927.927,0,0,1-1.252-.417.938.938,0,0,1,.423-1.264C473.33,69.089,480.951,65.378,485.9,70.517Z" fill="#f6d276"/>
            </g>
          </g>
          <g id="Group_104" data-name="Group 104">
            <g id="Group_103" data-name="Group 103">
              <ellipse id="Ellipse_5" data-name="Ellipse 5" cx="4.787" cy="5.046" rx="4.787" ry="5.046" transform="translate(435.41 113.669) rotate(-14.377)" fill="#e85b44"/>
            </g>
          </g>
          <g id="Group_106" data-name="Group 106">
            <g id="Group_105" data-name="Group 105">
              <ellipse id="Ellipse_6" data-name="Ellipse 6" cx="4.787" cy="5.046" rx="4.787" ry="5.046" transform="translate(491.03 99.033) rotate(-14.377)" fill="#e85b44"/>
            </g>
          </g>
          <g id="Group_108" data-name="Group 108">
            <g id="Group_107" data-name="Group 107">
              <path id="Path_54" data-name="Path 54" d="M475.555,38.663c.462,5.635-.795,25.884-11.172,31.9a9.389,9.389,0,0,0-3.674,3.842c-1.929,3.776-6.2,10.321-13.513,12.765a9.517,9.517,0,0,0-4.675,3.51c-2.261,3.142-6.661,7.943-12.976,9.007a9.856,9.856,0,0,0-8.009,9.05c-.165,2.054,1.057,4.766-1.517,5.709l-2.918,1.069a9.622,9.622,0,0,1-10.7-2.871c-5.054-6.058-13.606-23.338-8.836-30.918,3.852-6.122,6.165-9.1,7.837-10.563a9.743,9.743,0,0,0,3.256-7.041c.165-5.425,1.559-13.14,7.881-15.221a9.549,9.549,0,0,0,4.8-3.52c2.542-3.568,9.158-5.422,15.915-5.712a9.779,9.779,0,0,0,7.168-3.412c2.44-2.934,6.651-2.954,11.719-2.241a9.434,9.434,0,0,0,5.2-.8c3.732-1.692,10.281-3.607,13.241,1.937A8.977,8.977,0,0,1,475.555,38.663Z" fill="#f6d276"/>
            </g>
          </g>
          <g id="Group_110" data-name="Group 110">
            <g id="Group_109" data-name="Group 109">
              <path id="Path_55" data-name="Path 55" d="M473.113,35.294S489.027,35.28,493.348,42s5.069,9.642,5.069,9.642,5.334-2.962,10.059,6.532,4.6,11.642,4.6,11.642,7.8,14.68,2.341,15.458-11.67-11.3-10.578-13.114c0,0-11.89,1.9-15.907-6.021l-4.017-7.924a10.273,10.273,0,0,1-10.873-.873" fill="#f6d276"/>
            </g>
          </g>
          <g id="Group_113" data-name="Group 113">
            <g id="Group_112" data-name="Group 112">
              <g id="Group_111" data-name="Group 111">
                <path id="Path_56" data-name="Path 56" d="M480.271,48.228a10.8,10.8,0,0,0,5.053,3.815,11.278,11.278,0,0,0,3.09.671c.324.023.649.04.975.038a2.953,2.953,0,0,1,.62-.023c.285.1.309.946.381,1.268a9.261,9.261,0,0,0,3.389,5.385,8.432,8.432,0,0,0,6.765,1.378,3.807,3.807,0,0,0,2.438-1.364c.46-.764-.618-.809-1.1-.707a6.2,6.2,0,0,1-5.337-1.8,8.108,8.108,0,0,1-1.726-2.451,14.115,14.115,0,0,1-.855-2.877c-.3-1.252-1.6-.952-2.591-.975a8.974,8.974,0,0,1-2.689-.505A9.872,9.872,0,0,1,484,46.617c-.748-1.024-4.28.858-3.729,1.611Z" fill="#eac46d"/>
              </g>
            </g>
          </g>
          <g id="Group_116" data-name="Group 116">
            <g id="Group_115" data-name="Group 115">
              <g id="Group_114" data-name="Group 114">
                <path id="Path_57" data-name="Path 57" d="M450.462,71.223a13.01,13.01,0,0,0,7.927-2.279,10.523,10.523,0,0,0,2.532-2.551c.654-.928.938-2.211,1.728-3.022a4.3,4.3,0,0,1,1.417-.749,13.443,13.443,0,0,0,1.683-.878,14.648,14.648,0,0,0,3.065-2.492,12.3,12.3,0,0,0,3.228-6.219,6.739,6.739,0,0,0-2.212-6.618,3.275,3.275,0,0,0-2.794-.183c-.58.2-1.377.776-.653,1.343a5.49,5.49,0,0,1,1.7,4.942,10.282,10.282,0,0,1-2.409,5.5,13.675,13.675,0,0,1-5.171,3.687,4.942,4.942,0,0,0-2.494,2.533,10.054,10.054,0,0,1-1.593,2.57,8.546,8.546,0,0,1-2.668,1.972,5.486,5.486,0,0,1-.62.243c-.1.032-.191.061-.286.093-.558.184.28-.037-.3.078-.107.022-.8.131-.452.093-.132.014-.266.024-.4.031-.079,0-.647,0-.261.012-.709-.017-2.107.013-2.457.806-.342.777,1,1.078,1.483,1.09Z" fill="#eac46d"/>
              </g>
            </g>
          </g>
          <g id="Group_119" data-name="Group 119">
            <g id="Group_118" data-name="Group 118">
              <g id="Group_117" data-name="Group 117">
                <path id="Path_58" data-name="Path 58" d="M429.414,77.087c.655,2.31,1.437,5.452-.107,7.591-.06.084-.258.407-.344.391-.012,0,.641-.288.367-.259-.368.038-1.049.3-1.545.378-1.276.2-2.569.241-3.853.372a6.87,6.87,0,0,0-4.988,2.743,5.592,5.592,0,0,0-.632,1.8q-.291,1.287-.579,2.575c-.152.679-.282,1.371-.5,2.034a3.956,3.956,0,0,1-.375.859c-.534.865.181-.2.218,0,0-.018.489-.171-.126.05.059-.022-.242.083-.194.067a7.6,7.6,0,0,1-.984.266,8.188,8.188,0,0,1-2.273.164,5.542,5.542,0,0,1-3.948-1.9,4.177,4.177,0,0,1-.886-3.964c.2-.609-1.442.139-1.549.195-.628.328-1.686.89-1.928,1.63-.992,3.032,1.605,5.761,4.456,6.257a10.635,10.635,0,0,0,5.066-.5,10.776,10.776,0,0,0,5.165-3.317c1.016-1.316,1.212-3.125,1.566-4.7a24.14,24.14,0,0,1,.6-2.539c.035-.1.08-.2.116-.3.356-1-2.631,1.021-1.448.935.408-.029.817-.09,1.225-.124a27.73,27.73,0,0,0,4.55-.595,11.793,11.793,0,0,0,4.987-2.695,6.387,6.387,0,0,0,2.162-4.489,15.85,15.85,0,0,0-.768-5.073c-.123-.434-3.733,1.149-3.452,2.141Z" fill="#eac46d"/>
              </g>
            </g>
          </g>
          <g id="Group_122" data-name="Group 122">
            <g id="Group_121" data-name="Group 121">
              <g id="Group_120" data-name="Group 120">
                <path id="Path_59" data-name="Path 59" d="M441.361,48.638a24.028,24.028,0,0,0-9.62,1.753,6.148,6.148,0,0,0-1.841.982,2.862,2.862,0,0,0-.811,2.137c-.072,1.753-.03,3.518-.044,5.273l1.437-.746a5.407,5.407,0,0,0-5.424-.13,7.076,7.076,0,0,0-3.339,4.676,16.794,16.794,0,0,0,.057,6.881c.212,1.21.479,2.411.652,3.628a1.823,1.823,0,0,1-.056,1.153c-.074.128-.4.444-.553.418-2-.35-.827,3.4.589,3.646a2.179,2.179,0,0,0,2.526-1.316,5.763,5.763,0,0,0,.154-3.252c-.348-2.245-1.011-4.49-.948-6.778a6.6,6.6,0,0,1,1.969-4.91c1.117-.948,2.995-1.489,4.258-.721.7.424,1.431.15,1.438-.745l.038-4.653c0-.5-.1-.969.345-1.279a8.914,8.914,0,0,1,1.891-.843,22.35,22.35,0,0,1,8.545-1.416c.929.023.78-1.361.6-1.908-.257-.773-.937-1.826-1.86-1.85Z" fill="#eac46d"/>
              </g>
            </g>
          </g>
          <g id="Group_125" data-name="Group 125">
            <g id="Group_124" data-name="Group 124">
              <g id="Group_123" data-name="Group 123">
                <path id="Path_60" data-name="Path 60" d="M459.879,41.942a19.037,19.037,0,0,1,3.393-3.242,4.719,4.719,0,0,1,1.524-.715,2.3,2.3,0,0,1,.522-.088,2.946,2.946,0,0,1,.985.122c.713.206,1.372.591,2.08.823a5.111,5.111,0,0,0,3.024.008,6.6,6.6,0,0,0,2.426-1.488c.018-.016.239-.243.274-.223l-.872.3a.591.591,0,0,1-.516-.036c-.008,0,.027.045.034.009.011-.058.04-.26-.018.028-.321,1.61,3.643.978,3.933-.478.191-.954-.58-1.57-1.42-1.8a4.6,4.6,0,0,0-3.636.663,6.25,6.25,0,0,0-1.121.916c-.234.255-.041.057.209,0a.947.947,0,0,1,.542-.054,3.479,3.479,0,0,1-.414-.1,18.461,18.461,0,0,0-2.618-.956,10.19,10.19,0,0,0-6.844,1.4,20.09,20.09,0,0,0-4.679,4.165c-.554.615-.421,1.316.426,1.527a3.138,3.138,0,0,0,2.766-.771Z" fill="#eac46d"/>
              </g>
            </g>
          </g>
          <g id="Group_128" data-name="Group 128">
            <g id="Group_127" data-name="Group 127">
              <g id="Group_126" data-name="Group 126">
                <path id="Path_61" data-name="Path 61" d="M478.3,32.914q-.162-.288.074.17-.125-.276.049.129-.087-.252.018.07c-.021-.075-.04-.15-.056-.226-.03-.147-.031-.152,0-.013-.011-.078-.019-.155-.026-.233-.014-.156-.021-.314-.021-.471a6.561,6.561,0,0,1,.3-1.778,5.384,5.384,0,0,1,.706-1.7,2.992,2.992,0,0,1,1.516-.893,5.324,5.324,0,0,1,2.039-.394,2.484,2.484,0,0,1,.9.223,1.635,1.635,0,0,1,.243.159q.17.141-.013-.015a3.852,3.852,0,0,1-.521-.771,2.62,2.62,0,0,1-.429-1.089c0,.12.007.137.013.05a1,1,0,0,1-.091.321,1.1,1.1,0,0,1-.4.439,1.24,1.24,0,0,1-.611.236c-.076,0-.152-.03-.23-.035q-.145-.061-.006.021a.889.889,0,0,1-.131-.1c-.15-.127-.369-.2-.459.018a1.834,1.834,0,0,0,.169.972,5.659,5.659,0,0,0,1.5,2.345,1.473,1.473,0,0,0,2.363-.793,4.522,4.522,0,0,0-.805-2.986,5.434,5.434,0,0,0-2.13-2.3c-1.216-.617-2.841-.152-4.009.383-1.205.553-1.637,2-1.9,3.2a7.734,7.734,0,0,0,1.01,5.575,5.993,5.993,0,0,0,.826,1.185c.086.088.422.447.617.34.467-.256-.388-1.833-.507-2.037Z" fill="#eac46d"/>
              </g>
            </g>
          </g>
          <g id="Group_131" data-name="Group 131">
            <g id="Group_130" data-name="Group 130">
              <g id="Group_129" data-name="Group 129">
                <path id="Path_62" data-name="Path 62" d="M473.545,28.41h.083l-.414-.009c.054,0,.108.011.162.015.285.02-.32-.115-.173-.052.048.021.1.038.148.057.209.077-.453-.248-.2-.091.228.143-.233-.179-.235-.181.04.038.088.069.13.1s.1.095.156.142c.173.152-.35-.385-.2-.207.165.195.326.39.472.6.041.059.175.259-.006-.01-.192-.288-.02-.027.023.04q.12.188.234.38a15.351,15.351,0,0,1,.8,1.536c.027.061.054.121.08.182s.146.345.029.061c-.111-.267-.018-.04.005.018l.072.185q.166.44.307.89a2.8,2.8,0,0,0,.832,1.232,2.655,2.655,0,0,0,1.335.654,1.146,1.146,0,0,0,1.055-.307,1.184,1.184,0,0,0,.159-1.088,17.371,17.371,0,0,0-1.909-4.142,9.461,9.461,0,0,0-1.7-2.112,5.635,5.635,0,0,0-1.468-.921,3.887,3.887,0,0,0-1.558-.276.95.95,0,0,0-.816.625,1.618,1.618,0,0,0,.191,1.2,2.979,2.979,0,0,0,1.093,1.127,2.612,2.612,0,0,0,1.31.344Z" fill="#eac46d"/>
              </g>
            </g>
          </g>
          <g id="Group_134" data-name="Group 134">
            <g id="Group_133" data-name="Group 133">
              <g id="Group_132" data-name="Group 132">
                <path id="Path_63" data-name="Path 63" d="M404.415,69.371a25.46,25.46,0,0,1-6.725,6.967c-1.14.76-2.663,1.537-4.071,1.116-.132-.039-.251-.129-.38-.164-.269-.072-.025-.048-.077-.013a2.844,2.844,0,0,1,.551,1.051v0c-.068.052.124-.452.1-.4a1.165,1.165,0,0,1,.531-.585.911.911,0,0,1,.443-.114l.169.021q1.125.462-1.025-1.929a4.177,4.177,0,0,0,1.2,2.524c.268.282,1.31,1.03,1.261.094a5.31,5.31,0,0,0-1.931-3.687,1.969,1.969,0,0,0-2.269-.349c-2.07,1.292-.314,4.5.843,5.739,3.045,3.251,6.968.3,9.464-2.052a30.131,30.131,0,0,0,4.275-5.059c.6-.892-1.715-4.107-2.357-3.155Z" fill="#eac46d"/>
              </g>
            </g>
          </g>
          <g id="Group_137" data-name="Group 137">
            <g id="Group_136" data-name="Group 136">
              <g id="Group_135" data-name="Group 135">
                <path id="Path_64" data-name="Path 64" d="M501.845,71.862a13.224,13.224,0,0,0,3.851,8.966,22.581,22.581,0,0,0,3.865,3.2c1.483,1,3.242,2.285,5.111,2.212a4.515,4.515,0,0,0,3.995-2.9,10.892,10.892,0,0,0,.984-4.266,4.293,4.293,0,0,0-.578-2.181,5.692,5.692,0,0,0-2.031-1.754A8.077,8.077,0,0,1,514.3,72.25a15.252,15.252,0,0,1-1.743-4.877,1.255,1.255,0,0,1-.013-.525c0,.008.093-.283.019-.138.026-.051.144-.213.208-.173-.02-.012-.4.056-.451.05-.149-.019-.273-.11-.409-.137a.236.236,0,0,1-.122-.119c.085.169.108.193.071.07a1.014,1.014,0,0,1,.06.523,1.543,1.543,0,0,0,1.157,1.989c.753.264,2.24.237,2.616-.677a3.217,3.217,0,0,0-1.486-4.072,4.076,4.076,0,0,0-5.276,1.051c-.952,1.438-.152,3.407.338,4.877a14.649,14.649,0,0,0,2.251,4.479,11,11,0,0,0,1.677,1.754c.66.539,1.411.919,2.08,1.43.117.089.117.1.2.288-.078-.173.1.344.089.312a2.859,2.859,0,0,1,.057.37,6.616,6.616,0,0,1-.3,1.965,8.7,8.7,0,0,1-.664,1.834,2.425,2.425,0,0,1-.515.675c-.025.024-.14.009-.076.071a1.6,1.6,0,0,0,.373.038c.154-.029-.109-.05-.22-.112-.167-.093-.333-.19-.5-.287q-.506-.3-1-.608a22.245,22.245,0,0,1-1.922-1.333c-2.624-2.078-4.917-5.052-4.935-8.55a1.888,1.888,0,0,0-1.811-1.737c-.709-.1-2.218.182-2.213,1.181Z" fill="#eac46d"/>
              </g>
            </g>
          </g>
          <g id="Group_140" data-name="Group 140">
            <g id="Group_139" data-name="Group 139">
              <g id="Group_138" data-name="Group 138">
                <path id="Path_65" data-name="Path 65" d="M503.247,52.259c-.74-2.142-2.645-3.463-3.558-5.5a11.024,11.024,0,0,0-1.828-3.22,11.83,11.83,0,0,0-3.106-2.262c-4.665-2.529-10.043-3.2-15.236-3.774-.553-.061-1.881-.122-1.751.787.118.827,1.443,1.4,2.144,1.478,4.444.489,8.973.952,12.789,2.893a6.187,6.187,0,0,1,2.038,1.475,10.6,10.6,0,0,1,1.334,2.642,11.535,11.535,0,0,0,1.781,2.567,7.36,7.36,0,0,1,1.5,2.219,2.653,2.653,0,0,0,2.145,1.478c.411.072,2.051.082,1.751-.787Z" fill="#eac46d"/>
              </g>
            </g>
          </g>
          <g id="Group_143" data-name="Group 143">
            <g id="Group_142" data-name="Group 142">
              <g id="Group_141" data-name="Group 141">
                <path id="Path_66" data-name="Path 66" d="M398.971,77.473a29.019,29.019,0,0,0-2.046,15.449,39.955,39.955,0,0,0,5.259,14.179,76.6,76.6,0,0,0,4.638,7.058c.477.654,1.456,1.541,2.352,1.207.876-.326.518-1.529.119-2.077-5.416-7.432-10.128-15.9-9.215-25.459a26.577,26.577,0,0,1,2.076-7.982c.63-1.464-2.456-4.064-3.183-2.375Z" fill="#eac46d"/>
              </g>
            </g>
          </g>
          <g id="Group_146" data-name="Group 146">
            <g id="Group_145" data-name="Group 145">
              <g id="Group_144" data-name="Group 144">
                <path id="Path_67" data-name="Path 67" d="M407.307,71.357c1.959-2.273,2.6-5.115,3.084-8,.469-2.8.79-5.808,2.359-8.246,1.8-2.793,5.074-3.481,7.966-4.613a16.187,16.187,0,0,0,4.575-2.687c1.389-1.161,2.655-2.467,4.1-3.559,3.42-2.58,7.688-3.39,11.806-4.159.9-.17.115-1.061-.259-1.328a3.809,3.809,0,0,0-2.694-.744c-3.738.7-7.581,1.448-10.9,3.413-3.149,1.868-5.338,5.019-8.679,6.6-2.978,1.411-6.54,1.838-8.825,4.436-1.944,2.21-2.522,5.1-2.992,7.923-.516,3.1-.892,6.636-3.029,9.116-.518.6.472,1.222.943,1.474.453.243,2.052.942,2.537.378Z" fill="#eac46d"/>
              </g>
            </g>
          </g>
          <g id="Group_149" data-name="Group 149">
            <g id="Group_148" data-name="Group 148">
              <g id="Group_147" data-name="Group 147">
                <path id="Path_68" data-name="Path 68" d="M448.544,32.357a20.231,20.231,0,0,1-3.185.872,5.871,5.871,0,0,1-2.842-.13c-.05-.015-.323-.13-.1-.029-.1-.046-.206-.09-.307-.141s-.2-.1-.3-.163c.381.23-.053-.069-.075-.076.084.027.484.507.358.348s.225.353.257.43a.664.664,0,0,1,.076.277c.008.113.012.1.012-.029l-.008.1c.055-.1.066-.128.033-.086a2.317,2.317,0,0,1,1.038-.555c.051-.01.279-.038.259-.033-.063-.006-.023,0,.119.029l-.434-.224a2.005,2.005,0,0,1-.742-.973.964.964,0,0,1-.257-.638c-.017-.16.018-.066-.066.072-.166.274.024.844.122,1.088a3.879,3.879,0,0,0,.886,1.294c.425.4,1.354,1.134,1.8.4a2.493,2.493,0,0,0-.344-2.342,4.247,4.247,0,0,0-2.358-2.033c-1.157-.307-2.875.425-2.968,1.738a4.2,4.2,0,0,0,.991,2.575,6.548,6.548,0,0,0,2.055,1.781,6.952,6.952,0,0,0,3.673.843,15.125,15.125,0,0,0,4.305-.981c.8-.265.371-1.334.058-1.844a3.886,3.886,0,0,0-1.038-1.175c-.256-.177-.7-.494-1.025-.385Z" fill="#eac46d"/>
              </g>
            </g>
          </g>
          <g id="Group_152" data-name="Group 152">
            <g id="Group_151" data-name="Group 151">
              <g id="Group_150" data-name="Group 150">
                <path id="Path_69" data-name="Path 69" d="M475.661,57.194q.147-1.209.332-2.412c.059-.383.118-.765.186-1.146a1.326,1.326,0,0,1,.4-.854l-.118.1a1.023,1.023,0,0,1,.431-.177l-.235.034c.018,0,.214-.011.214-.012s-.341-.038-.169-.011a4.766,4.766,0,0,1-1.085-.341,5.077,5.077,0,0,1-.883-.438c-.379-.25.1.1-.17-.124-.2-.164.045.066.09.122l-.144-.189a3.092,3.092,0,0,1,.509,1.489c.028.221.621.558.748.634a6.891,6.891,0,0,0,1.429.642,3.341,3.341,0,0,0,1.211.247l.235-.034a.161.161,0,0,0,.1-.249,3.921,3.921,0,0,0-.249-1.036,2.788,2.788,0,0,0-.917-1.124,7.774,7.774,0,0,0-2.8-1.258,2.789,2.789,0,0,0-1.638-.027c-.765.313-.761,1.271-.87,1.963q-.209,1.328-.372,2.661c-.028.235.264.443.415.557a5.608,5.608,0,0,0,1.272.682,5.526,5.526,0,0,0,1.385.409c.127.015.66.1.686-.1Z" fill="#eac46d"/>
              </g>
            </g>
          </g>
          <g id="Group_155" data-name="Group 155">
            <g id="Group_154" data-name="Group 154">
              <g id="Group_153" data-name="Group 153">
                <path id="Path_70" data-name="Path 70" d="M507.676,73.4a1.784,1.784,0,0,0,1.182-.154,1.542,1.542,0,0,0,.592-.515,1.7,1.7,0,0,0,.058-1.707,4.2,4.2,0,0,0-.956-1.148,13.743,13.743,0,0,0-2.969-1.944,6.038,6.038,0,0,0-3.558-.886,4.677,4.677,0,0,0-2.15,1.065c-.2.164.578.835.559.818a13.137,13.137,0,0,0,3.734,2.15c.278.085.729.287.988.072a5.146,5.146,0,0,1,.994-.658l-.175.086a3.321,3.321,0,0,1,1.7-.351l-.338-.027a3.559,3.559,0,0,0,.362.062l-.351-.094q.209.072-.169-.068a9.4,9.4,0,0,1-1.373-.667,12.658,12.658,0,0,1-1.076-.7q-.583-.483-.362-.288.1.093-.1-.106c-.287-.282.013.035.073.119l-.193-.279a1.72,1.72,0,0,1,.3.823l-.014-.194a1.507,1.507,0,0,1-.845,1.393l.175-.086a1.25,1.25,0,0,1-.542.11l.338.027a1.081,1.081,0,0,1-.126-.014.424.424,0,0,0-.426.015c-.119.025-.143.1-.074.238a1.549,1.549,0,0,0,.37.451,4.343,4.343,0,0,0,.662.562,13.424,13.424,0,0,0,2,1.224,6.062,6.062,0,0,0,1.717.667Z" fill="#eac46d"/>
              </g>
            </g>
          </g>
          <g id="Group_158" data-name="Group 158">
            <g id="Group_157" data-name="Group 157">
              <g id="Group_156" data-name="Group 156">
                <path id="Path_71" data-name="Path 71" d="M399.1,104.141c.544,1.931,1.068,3.889,1.434,5.862l-.086-.469a2.211,2.211,0,0,0,.032.287c0,.1.008.077.021-.064.028-.157.025-.161-.007-.012a1.6,1.6,0,0,1,.3-.518l-.059.06a.994.994,0,0,1,.435-.3c.184-.081.226-.1.128-.062a1.021,1.021,0,0,1-.125.043c0-.035.553-.074.264-.062a2,2,0,0,0-.233.017c-.184.028.514.055.19,0-.152-.027-.306-.054-.458-.078-.216-.035.453.161.1.022-.07-.028-.142-.051-.211-.08-.037-.016-.379-.179-.089-.036.269.134-.017-.035-.066-.072-.215-.161.1.043.1.105a2.043,2.043,0,0,0-.177-.266l.223.422a1.973,1.973,0,0,1-.147-.395l.085.47a2.007,2.007,0,0,0-.031-.31c.067.122-.1.418.028.063a1.682,1.682,0,0,0-1.483-2.056,2.25,2.25,0,0,0-2.418,1.51c-.593,1.675.664,3.337,2.183,3.917a4.378,4.378,0,0,0,4.64-.62,2.793,2.793,0,0,0,.785-2.368c-.116-.791-.317-1.578-.5-2.356q-.463-2-1.022-3.976a1.929,1.929,0,0,0-2.5-1.013,1.96,1.96,0,0,0-1.339,2.341Z" fill="#eac46d"/>
              </g>
            </g>
          </g>
          <g id="Group_160" data-name="Group 160">
            <g id="Group_159" data-name="Group 159">
              <path id="Path_72" data-name="Path 72" d="M447.552,96.149c.585,2.282-.346,4.212-1.525,4.57-.934.283-3.174-1.254-3.756-3.526s.775-4.178,1.719-4.419C445.358,92.2,446.97,93.878,447.552,96.149Z" fill="#161615"/>
            </g>
          </g>
          <g id="Group_162" data-name="Group 162">
            <g id="Group_161" data-name="Group 161">
              <path id="Path_73" data-name="Path 73" d="M482.352,86.369c.585,2.282-.346,4.211-1.526,4.569-.933.284-3.173-1.254-3.755-3.525s.775-4.178,1.719-4.42C480.158,82.421,481.77,84.1,482.352,86.369Z" fill="#161615"/>
            </g>
          </g>
          <g id="Group_164" data-name="Group 164">
            <g id="Group_163" data-name="Group 163">
              <path id="Path_74" data-name="Path 74" d="M472.714,104.217a.818.818,0,0,1-.369,1.1,1.381,1.381,0,0,1-.163.059.824.824,0,0,1-.94-.429,9.6,9.6,0,0,0-4.749-4.22,1.592,1.592,0,0,0-1.273.055c-2.492,1.249-3.34,4.515-3.372,6.277a.821.821,0,1,1-1.641-.028c.008-.3.4-5.77,4.274-7.711a3.209,3.209,0,0,1,2.536-.15C470.1,100.2,472.435,103.654,472.714,104.217Z" fill="#b87d7f"/>
            </g>
          </g>
          <g id="Group_177" data-name="Group 177">
            <g id="Group_166" data-name="Group 166">
              <g id="Group_165" data-name="Group 165">
                <path id="Path_75" data-name="Path 75" d="M466.151,130.911c9.128,2.009,12.7-14.228,12.7-14.228-14.19,6.8-24.064-1.469-24.064-1.469S457.014,128.911,466.151,130.911Z" fill="#efbbad"/>
              </g>
            </g>
            <g id="Group_168" data-name="Group 168">
              <g id="Group_167" data-name="Group 167">
                <path id="Path_76" data-name="Path 76" d="M472.821,127.168a.3.3,0,0,1,.079.5c-1.235,1.213-5.564,4.528-11.51.164a.318.318,0,0,1,.095-.537c1.441-.614,6.145-2.439,9.518-.942C471.971,126.773,472.513,127.023,472.821,127.168Z" fill="#d9000d"/>
              </g>
            </g>
            <g id="Group_170" data-name="Group 170">
              <g id="Group_169" data-name="Group 169">
                <path id="Path_77" data-name="Path 77" d="M478.855,116.683s-3.576,16.237-12.7,14.228-11.36-15.7-11.36-15.7S464.665,123.482,478.855,116.683Zm-5.955,10.98a.3.3,0,0,0-.079-.5c-.308-.145-.85-.395-1.818-.82-3.373-1.5-8.077.328-9.518.942a.318.318,0,0,0-.095.537C467.336,132.191,471.665,128.876,472.9,127.663Z" fill="#fff"/>
              </g>
            </g>
            <g id="Group_172" data-name="Group 172">
              <g id="Group_171" data-name="Group 171">
                <path id="Path_78" data-name="Path 78" d="M467.258,130.919a10.765,10.765,0,0,1-6.408-2.355l-.009-.006a1.206,1.206,0,0,1-.464-1.129,1.24,1.24,0,0,1,.777-.99c2.327-.993,6.789-2.449,10.22-.927.976.429,1.524.682,1.835.828a1.218,1.218,0,0,1,.322,1.984A9.268,9.268,0,0,1,467.258,130.919Zm-4.385-3.2c4.126,2.515,7.221,1.008,8.7-.121-.257-.116-.566-.254-.94-.418C468.213,126.109,464.884,126.988,462.873,127.723Zm-1,.4-.029.012Zm10.558-.126.011.005Zm-.17-.982-.011.011Z" fill="#d9000d"/>
              </g>
            </g>
            <g id="Group_174" data-name="Group 174">
              <g id="Group_173" data-name="Group 173">
                <path id="Path_79" data-name="Path 79" d="M467.733,132a8.234,8.234,0,0,1-1.778-.2c-9.632-2.108-11.971-15.859-12.066-16.443a.914.914,0,0,1,1.488-.848c.391.326,9.629,7.794,23.084,1.347a.913.913,0,0,1,1.286,1.021C479.6,117.535,476.311,132,467.733,132Zm-11.544-14.781c1.032,3.8,3.858,11.417,10.158,12.8,6.415,1.412,9.916-7.727,11.125-11.726A24.037,24.037,0,0,1,456.189,117.222Z" fill="#b87d7f"/>
              </g>
            </g>
            <g id="Group_176" data-name="Group 176">
              <g id="Group_175" data-name="Group 175">
                <path id="Path_80" data-name="Path 80" d="M457.552,121.111s11.045,3.67,18.6.821l1.337-3.768s-11.058,4.669-21.263-.947Z" fill="#e8e8e8"/>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </g>
</svg>


            </div>
            </div>  
    )
}
