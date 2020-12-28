document.addEventListener('DOMContentLoaded', () => {
const cardArray = [ 
{ name: "chair", img: "Simages/chair.png", }, 
{ name: "chair", img: "Simages/chairw.png", },
{ name: "bow", img: "Simages/bow.png", },
{ name: "bow", img: "Simages/boww.png", }, 
{ name: "bag", img: "Simages/bag.png", },
{ name: "bag", img: "Simages/bagw.png", }, 
{ name: "ironbox", img: "Simages/ironbox.png", },
{ name: "ironbox", img: "Simages/ironboxw.png", },
{ name: "mat", img: "Simages/mat.png", },
{ name: "mat", img: "Simages/matw.png", },
{ name: "mirror", img: "Simages/mirror.png", },
{ name: "mirror", img: "Simages/mirrorw.png", },
{ name: "torch", img: "Simages/torch.png", },
{ name: "torch", img: "Simages/torchw.png", }, 
{ name: "tubelight", img: "Simages/tubelight.png", },
{ name: "tubelight", img: "Simages/tubelightw.png", },
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
      card.setAttribute('src', 'om.png')
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
      cards[optionOneId].setAttribute('src', 'om.png')
      cards[optionTwoId].setAttribute('src', 'om.png')
      
    }
    else if (cardsChosen[0] == cardsChosen[1]) {
      alert('अत्युत्तम (you have found a match)')
      cards[optionOneId].setAttribute('src', 'Simages/white.png')
      cards[optionTwoId].setAttribute('src', 'Simages/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'om.png')
      cards[optionTwoId].setAttribute('src', 'om.png')
      
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
})
