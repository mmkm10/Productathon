import React,{Component} from 'react';
import './Game.css';
import om from './om.png';
import chair from './Simages/chair.png';
import chairw from './Simages/chairw.png';
import bow from './Simages/bow.png';
import boww from './Simages/boww.png';
import bag from './Simages/bag.png';
import bagw from './Simages/bagw.png';
import ironbox from './Simages/ironbox.png';
import ironboxw from './Simages/ironboxw.png';
import mat from './Simages/mat.png';
import matw from './Simages/matw.png';
import mirror from './Simages/mirror.png';
import mirrorw from './Simages/mirrorw.png';
import torch from './Simages/torch.png';
import torchw from './Simages/torchw.png';
import tubelight from './Simages/tubelight.png';
import tubelightw from './Simages/tubelightw.png';
import white from './Simages/white.png';


class Game extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
            const cardArray = [ 
            { name: "chair", img: chair, }, 
            { name: "chair", img: chairw, },
            { name: "bow", img: bow, },
            { name: "bow", img: boww, }, 
            { name: "bag", img: bag, },
            { name: "bag", img: bagw, }, 
            { name: "ironbox", img: ironbox, },
            { name: "ironbox", img: ironboxw, },
            { name: "mat", img: mat, },
            { name: "mat", img: matw, },
            { name: "mirror", img: mirror, },
            { name: "mirror", img: mirrorw, },
            { name: "torch", img: torch, },
            { name: "torch", img: torchw, }, 
            { name: "tubelight", img: tubelight, },
            { name: "tubelight", img: tubelightw, },
            ]; 
            
            
            
              cardArray.sort(() => 0.5 - Math.random())
            
              const grid = document.querySelector('.grid')
              const resultDisplay = document.querySelector('#result')
              var cardsChosen = []
              var cardsChosenId = []
              var cardsWon = []
            
              //create your board
              function createBoard() {
                for (let i = 0; i < cardArray.length; i++) {
                  var card = document.createElement('img')
                  card.setAttribute('src', om)
                  card.setAttribute('data-id', i)
                  card.addEventListener('click', flipCard)
                  grid.appendChild(card)
                }
              }
            
              //check for matches
              function checkForMatch() {
                var cards = document.querySelectorAll('img')
                const optionOneId = cardsChosenId[0]
                const optionTwoId = cardsChosenId[1]
                
                if(optionOneId == optionTwoId) {
                  cards[optionOneId].setAttribute('src', om)
                  cards[optionTwoId].setAttribute('src', om)
                  
                }
                else if (cardsChosen[0] == cardsChosen[1]) {
                  alert('अत्युत्तम (you have found a match)')
                  cards[optionOneId].setAttribute('src', white)
                  cards[optionTwoId].setAttribute('src', white)
                  cards[optionOneId].removeEventListener('click', flipCard)
                  cards[optionTwoId].removeEventListener('click', flipCard)
                  cardsWon.push(cardsChosen)
                } else {
                  cards[optionOneId].setAttribute('src', om)
                  cards[optionTwoId].setAttribute('src', om)
                  
                }
                cardsChosen = []
                cardsChosenId = []
                resultDisplay.textContent = cardsWon.length
                if  (cardsWon.length === cardArray.length/2) {
                  resultDisplay.textContent = 'अभिनन्दनानि!'
                }
              }
            
              //flip your card
              function flipCard() {
                var cardId = this.getAttribute('data-id')
                cardsChosen.push(cardArray[cardId].name)
                cardsChosenId.push(cardId)
                this.setAttribute('src', cardArray[cardId].img)
                if (cardsChosen.length ===2) {
                  setTimeout(checkForMatch, 500)
                }
              }
            
              createBoard()
            
    }

    render(){
        return(
            <div>
                <h3>Score:<span id="result"></span></h3>

                <div className="grid">
                </div>
            </div>
        )
    }
}

export default Game;