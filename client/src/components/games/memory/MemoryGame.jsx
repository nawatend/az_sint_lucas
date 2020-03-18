import React, { Component } from 'react'
import { Link } from "react-router-dom";

// SVGS


export class Memory extends Component {
    
    state = {
        firstCard: "",
        secondCard: "",
        sound: true,
        goodAnswer: 0,
        clicks: 0,
        cards: 12,
        percentage: "",
        firstId: "",
    }
    componentDidMount = () => {
        this.createInfo()
    }
    createInfo = () => {
        document.querySelector('#info').classList.remove('hide')
        
    }
    createGameContainer = () => {
        document.querySelector('.memory-game-container ').classList.remove('hide')
        let cardsArray = ['pleister', 'mondmasker', 'ademhulp', 'spuit', 'prinsespleister', 'verband', 'pot', 'baxter', 'haarnet','carspleister','stokje','witpotje']
        let cardsArrayRandom = []
        let numberArray = []

        for (let i = 0; cardsArrayRandom.length < cardsArray.length; i++){
            let number = Math.floor(Math.random() * cardsArray.length)
            if (!numberArray.includes(number)) {
                numberArray.push(number)
                let element = cardsArray[number]
                cardsArrayRandom.push(element)
            }
        }
        let count = 0;
        let amountCards = this.state.cards / 2
        document.querySelector('.memory-game').innerHTML = "";
        for (let i = 0; i < amountCards; i++){
            const div = `<div id="${i+count}" class="memory-card" data-framework="${cardsArrayRandom[i]}"> <img class="front-face" src="/images/games/memory/${cardsArrayRandom[i]}.png" alt="${cardsArrayRandom[i]}" /> <div class="back-face"></div> </div>`;
            document.querySelector('.memory-game').insertAdjacentHTML('afterbegin', div);
            if (count === 0 && i +1 === amountCards) {
                count++
                i = -1;
            }
        }
        const cards = document.querySelectorAll('.memory-card');
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * this.state.cards);
            card.style.order = randomPos;
        });
        cards.forEach(card => card.addEventListener('click', this.flipCard));
        this.setState({
            clicks: 0,
            goodAnswer: 0,
        })

        let level = this.state.cards;
        if (level === 6) {
            cards.forEach(card => card.style.height = 'calc(50% - 10px)')
            cards.forEach(card => card.style.width = 'calc(33.333% - 10px)')
        } else if (level === 12) {
            cards.forEach(card => card.style.height = 'calc(33.333% - 10px)')
            cards.forEach(card => card.style.width = 'calc(25% - 10px)')
        }else if (level === 18) {
            cards.forEach(card => card.style.height = 'calc(33.333% - 10px)')
            cards.forEach(card => card.style.width = 'calc(16.666% - 10px)')
        }

        this.resetBoard();
    }
    flipCard = (event) => {
        if (this.state.firstCard === "" || this.state.secondCard === "") {
            let parent = event.target.parentNode;
            parent.classList.add('flip');
            let id = event.target.id
            if (this.state.firstCard === "") {
                this.setState({
                    firstCard: parent,
                    clicks: this.state.clicks + 1,
                    firstId: id
                })
                this.state.firstCard.removeEventListener('click', this.flipCard)
            } else if (this.state.firstCard !== "" ) {
                this.setState({
                    secondCard: parent,
                    clicks: this.state.clicks +1,
                })
                this.state.secondCard.removeEventListener('click', this.flipCard)
                this.checkForMatch()
            }
        }
    }
    checkForMatch = () => {
        if (this.state.firstCard.dataset.framework !== this.state.secondCard.dataset.framework) {
            if (this.state.sound === true) {
                document.getElementById('sound-wrong').play();
            }
            setTimeout(() => {
                this.state.firstCard.addEventListener('click', this.flipCard)
                this.state.secondCard.addEventListener('click', this.flipCard)

                this.state.firstCard.classList.remove('flip')
                this.state.secondCard.classList.remove('flip')
                this.resetBoard();
              }, 1500);
        } else if (this.state.firstCard.dataset.framework === this.state.secondCard.dataset.framework) {
            if (this.state.sound === true) {
                document.getElementById('sound-right').play();
            }
            this.state.firstCard.removeEventListener('click', this.flipCard)
            this.state.secondCard.removeEventListener('click', this.flipCard)
            let goodAnswer = this.state.goodAnswer + 1
            this.setState({
                goodAnswer: goodAnswer
            })
            if (this.state.goodAnswer < this.state.cards/2) {
                this.resetBoard();
            } else if (this.state.goodAnswer === this.state.cards/2) {
                let clickPercentage = ((this.state.cards / this.state.clicks)*100).toFixed(2)
                setTimeout(() => {
                    document.querySelector('.playAgain-container').classList.remove('hide');
                    document.querySelector('.memory-game-container').classList.add('hide');
                }, 1000);
            }
        }
    }
    playAgain = () => {
        document.querySelector('.playAgain-container').classList.add('hide')
        const cards = document.querySelectorAll('.memory-card');
        cards.forEach(card => card.classList.remove('flip'));
        this.setState({
            goodAnswer: 0
        })
        this.nextInfo();
    }
    dontPlayAgain = () => {
        document.querySelector('.playAgain-container').classList.add('hide')
        document.querySelector('.playAgain-container').classList.add('hide');
        const cards = document.querySelectorAll('.memory-card');
        cards.forEach(card => card.removeEventListener('click', this.flipCard));

    }
    resetBoard = () => {
        this.setState({
            firstCard: "",
            secondCard: ""
        })
    }
    changeLevel = (e) => {
        let level = e.target.parentNode.dataset.name
        document.querySelector('#start').classList.add('hide')
        
        console.log(level)
        if (level === 'makkelijk') {
            this.setState({
                cards: 6
            })
        } else if (level === 'standaard') {
            this.setState({
                cards: 12
            })
        } else if (level === 'moeilijk') {
            this.setState({
                cards: 18
            })
        }
        setTimeout(() => {
            this.createGameContainer()
        }, 1);
    }

    editSoundLevel = () => {
        let soundOn = document.getElementById('soundOn')
        let soundOff = document.getElementById('soundOff')
        if (this.state.sound) {
            this.setState({
                sound: false
            })
            soundOn.classList.add('hide')
            soundOff.classList.remove('hide')
        } else if (!this.state.sound) {
            this.setState({
                sound: true
            })
            soundOn.classList.remove('hide')
            soundOff.classList.add('hide')
        }
    }

    explainTheGame = () => {
        document.querySelector('.explain-container').classList.remove('hide')
        if (this.state.sound) {
            document.getElementById('explain-the-game').play()
        }
        setTimeout(() => {
            document.querySelector('.explain-container').classList.add('hide')
        }, 13000);
    }

    closeExplain = () => {
        document.querySelector('.explain-container').classList.add('hide')
        document.getElementById('explain-the-game').pause()
        document.getElementById('explain-the-game').currentTime = 0
    }

    resetGame = () =>{
        document.querySelector('#info').classList.add('hide')
        this.nextInfo()
    }

    nextInfo = () => {
        document.querySelector('#start').classList.remove('hide')
    }

    createGameNow = () => {
        document.querySelector('#start').classList.add('hide')
        this.changeLevel()
    }
    render() {
        return (
            <div class="memory-body-container">
            
                <div className="navbar hide">
                    <Link className="back" to="/"><img src="/homepage/terug.svg" alt="terug" /></Link>
                </div>

                <div className="icons hide">
                    <a href="/games/memory/info"><img id="info-icon" onClick={this.info} src="/games/memory/info-icon.svg" alt="info"/></a>
                    <img id="soundOn" onClick={this.editSoundLevel} className="speaker-icon" src="/games/memory/sound_on.svg" alt="sound on" />
                    <img id="soundOff" onClick={this.editSoundLevel} className="speaker-icon hide" src="/games/memory/sound_off.svg" alt="sound off" />
                    <img onClick={this.explainTheGame} id="handleiding-icon" src="/games/memory/handleiding-icon.svg" alt="handleiding"/>
                </div>
                <div className="game-container">
                <div className="playAgain-container hide">
                <svg id="playagain" class="playagain" xmlns="http://www.w3.org/2000/svg" width="607" height="624" viewBox="0 0 607 624">
                    <g transform="translate(-709 -157)">
                        <g id="background">
                        <g id="Rectangle_126" data-name="Rectangle 126" transform="translate(727 179)" fill="#e24841" stroke="#707070" stroke-width="1">
                            <rect width="589" height="602" rx="107" stroke="none"/>
                            <rect x="0.5" y="0.5" width="588" height="601" rx="106.5" fill="none"/>
                        </g>
                        <g id="Rectangle_125" data-name="Rectangle 125" transform="translate(709 157)" fill="#fff" stroke="#707070" stroke-width="1">
                            <rect width="589" height="602" rx="107" stroke="none"/>
                            <rect x="0.5" y="0.5" width="588" height="601" rx="106.5" fill="none"/>
                        </g>
                        <text id="Het_is_gelukt_" data-name="Het is gelukt!" transform="translate(780 186)" fill="#00b2a1" font-size="100" font-family="Laca-Bold, Laca" font-weight="700"><tspan x="95.95" y="93">Het is </tspan><tspan x="68.6" y="211">gelukt!</tspan></text>
                        <text id="speel_opnieuw" data-name="speel opnieuw" transform="translate(1004 511)" fill="#307d7e" font-size="60" font-family="Laca-Medium, Laca" font-weight="500"><tspan x="-179.94" y="0">speel opnieuw</tspan></text>
                        </g>
                        <g id="knop" onClick={() => this.playAgain()} transform="translate(-103)">
                        <ellipse id="Ellipse_255" data-name="Ellipse 255" cx="80" cy="76.5" rx="80" ry="76.5" transform="translate(924 566)" fill="#1b9a82"/>
                        <g id="Group_805" data-name="Group 805" transform="translate(964.468 602.76)">
                            <path id="Path_2213" data-name="Path 2213" d="M586.59-461.146l-28.867-14.319,6.527-4.355a22.858,22.858,0,0,0-6.773-3.555,26.3,26.3,0,0,0-34.091,18.319,26.274,26.274,0,0,0,20.332,32.423,26.425,26.425,0,0,0,29.241-15.1,10.632,10.632,0,0,1,1.511-2.635,6.422,6.422,0,0,1,8.249-1.316,6.442,6.442,0,0,1,2.733,7.9,37.645,37.645,0,0,1-9.3,13.768,38.432,38.432,0,0,1-20.064,10.287,38.381,38.381,0,0,1-31.441-7.691A37.882,37.882,0,0,1,509.883-452.8a38.241,38.241,0,0,1,9.013-31.171,37.676,37.676,0,0,1,24.17-13.426c12.229-1.741,23.034,1.632,32.328,9.786.051.044.111.078.286.2l8.886-5.872C585.246-482.494,585.913-471.89,586.59-461.146Z" transform="translate(-509.444 497.841)" fill="#fff"/>
                        </g>
                        </g>
                        <a href="/spelletjes" ><g id="stopknop" onClick={() => this.dontPlayAgain()} transform="translate(99)">
                        <ellipse id="Ellipse_255-2" data-name="Ellipse 255" cx="80" cy="76.5" rx="80" ry="76.5" transform="translate(924 566)" fill="#e24841"/>
                        <g id="Group_806" data-name="Group 806">
                            <line id="Line_7" data-name="Line 7" x2="60" y2="60" transform="translate(974.5 612.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="15"/>
                            <line id="Line_8" data-name="Line 8" x2="60" y2="60" transform="translate(1034.5 612.5) rotate(90)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="15"/>
                        </g>
                        </g>
                        </a>
                    </g>
                    </svg>

                    </div>
                <div id="info" className="hide" >
                    <img className="infoimg" src="/svgs/games/memory/start.svg" alt="Reset Game" onClick={() => this.resetGame()}/>
                    
                </div>

                    <div id="start" className="game__body--labels hide" >
                        <svg className="infoimg" xmlns="http://www.w3.org/2000/svg" width="1354.785" height="774.282" viewBox="0 0 1354.785 774.282">
                        <g id="Group_833" data-name="Group 833" transform="translate(-347.438 -219.22)">
                            <g id="background">
                            <rect id="Rectangle_124" data-name="Rectangle 124" width="1318.785" height="749.282" rx="74.98" transform="translate(383.438 244.22)" fill="#e54c43"/>
                            <rect id="Rectangle_123" data-name="Rectangle 123" width="1318.785" height="749.282" rx="74.98" transform="translate(347.438 219.22)" fill="#ffd45c"/>
                            <text id="Kies_de_moeilijkheidsgraad:" data-name="Kies de moeilijkheidsgraad:" transform="translate(1017 325)" fill="#1b9a82" font-size="65" font-family="Laca-Bold, Laca" font-weight="700"><tspan x="-389.87" y="0">Kies de moeilijkheidsgraad:</tspan></text>
                            </g>
                            <g id="Group_836" className="leveltext" data-organ="makkelijk" onClick={(e)=>this.changeLevel(e)} data-name="Group 836" transform="translate(0 -27)">
                            <g id="makkelijk" data-name="makkelijk" onClick={(e)=>this.changeLevel(e)} >
                                <text id="_Makkelijk_2-5j_" data-name="makkelijk" transform="translate(1007 431)" fill="#fff" font-size="72" font-family="Laca-Bold, Laca" font-weight="700"><tspan x="0" y="0"></tspan><tspan x="-253.296" y="86">Makkelijk (2-5j)</tspan><tspan x="0" y="172"></tspan></text>
                                    </g>
                            <g id="Rectangle_201" data-name="Rectangle 201" transform="translate(656 408)" fill="none" stroke="#ffbc00" stroke-width="1">
                                <rect width="702" height="170" rx="30" stroke="none"/>
                                <rect x="0.5" y="0.5" width="701" height="169" rx="29.5" fill="none"/>
                            </g>
                            </g>
                            <g id="Group_834" className="leveltext" data-name="Group 834" onClick={(e)=>this.changeLevel(e)} transform="translate(0 -27)">
                            <g id="standard" transform="translate(0 46)">
                                <text id="standard" data-name="standard" transform="translate(1007 659)" fill="#fff" font-size="72" font-family="Laca-Bold, Laca" font-weight="700"><tspan x="-277.02" y="0">Gemiddeld (6-8j)</tspan></text>
                            </g>
                            <g id="Rectangle_202" data-name="Rectangle 202" transform="translate(656 596)" fill="none" stroke="#ffbc00" stroke-width="1">
                                <rect width="702" height="170" rx="30" stroke="none"/>
                                <rect x="0.5" y="0.5" width="701" height="169" rx="29.5" fill="none"/>
                            </g>
                            </g>
                            <g id="Group_835" className="leveltext" onClick={(e)=>this.changeLevel(e)} data-name="Group 835" transform="translate(0 -27)">
                            <g id="moeilijk" transform="translate(0 73)">
                                <text id="Moeilijk_8-15j_" data-name="moeilijk" transform="translate(1007 813)" fill="#fff" font-size="72" font-family="Laca-Bold, Laca" font-weight="700"><tspan x="-243" y="0">Moeilijk (8-15j)</tspan></text>
                            </g>
                            <g id="Rectangle_203" data-name="Rectangle 203" transform="translate(656 777)" fill="none" stroke="#ffbc00" stroke-width="1">
                                <rect width="702" height="170" rx="30" stroke="none"/>
                                <rect x="0.5" y="0.5" width="701" height="169" rx="29.5" fill="none"/>
                            </g>
                            </g>
                        </g>
                        </svg>

                    </div>

                    <div className="memory-game-container hide">
                        <section className="memory-game"></section>
                    </div>
                </div>
                <audio id="sound-right">
                    <source src="/sound/right.mp3" type="audio/ogg"/>
                </audio>

                <audio id="sound-wrong">
                    <source src="/sound/wrong.mp3" type="audio/ogg"/>
                </audio>

                <audio id="explain-the-game">
                    <source src="/sound/memory/memory.mp3" type="audio/ogg"/>
                </audio>

            </div>
        )
    }
}

export default Memory