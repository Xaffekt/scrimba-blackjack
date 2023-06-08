let card1;
let card2;
let cards = [];
let sum;

let cardsEl = document.querySelector("#cards-el");   
let sumEl =  document.querySelector("#sum-el");  //specifiy like you would in css
let messageEl = document.getElementById("message-el");
let message = "";

let isPlaying = false;

let player = {
    name: "Xavier",
    chips: 100
}

let playerEl = document.querySelector("#player-el");


function startGame()
{
    playerEl.textContent = player.name+ ": $" +player.chips;

    card1 = getRandomCard();
    card2 = getRandomCard();

    cards = [card1, card2];

    sum = card1 + card2;

    isPlaying = true;
    renderGame();
}

function renderGame()
{
    //render out cards
    cardsEl.textContent = "Cards: ";
    for(i = 0; i< cards.length; i++)
        cardsEl.textContent += cards[i] + " ";

    //render out sum
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?"

    } else if (sum === 21) {
        message = "You've got Blackjack!"
        isPlaying = false;
    } else {
        message = "You're out of the game!"
        isPlaying = false;
    }
    messageEl.textContent = message;
}

function draw()
{
    if(isPlaying)
    {
        let newCard = getRandomCard();
        cards.push(newCard); //adds a variable into an array
        sum += newCard;
        console.log(sum);
        renderGame();
    }
}

function getRandomCard()
{ 
    let num =  Math.floor(Math.random() * 13 + 1 );

    if(num > 10)
        return 10;
    else if(num === 1)
        return 11;
    else
        return num;
}