const match = new JogoTruco();

const startScreen = document.getElementById("startScreen");
const inputName = document.getElementById("inputName");
const selectMineiro = document.getElementById("selectMineiro").checked;
const selectPaulista = document.getElementById("selectPaulista").checked;
const modoIndividual = document.getElementById("modoIndividual").checked;
const modoDuplas = document.getElementById("modoDuplas").checked;
const btnJogar = document.getElementById("btnJogar");
const gameScreen = document.getElementById("gameScreen");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");
const div5 = document.getElementById("div5");
const div6 = document.getElementById("div6");
const div7 = document.getElementById("div7");
const div8 = document.getElementById("div8");
const div9 = document.getElementById("div9");


btnJogar.addEventListener("click", (event) => {
    // se a função está recarregando a página use:
    event.preventDefault();

    if(inputName.value === "") {
        console.log("no player name");        
    }

    //startScreen.style.display = "none"
    //gameScreen.style.display = "flex"

    match.buildDeck();
    match.startHand();
    
})
    



function interativeCards() {
    
    const interativeCards = document.querySelectorAll(".playerCard")
    console.log(interativeCards)
    
    interativeCards.forEach((interative) => {
        interative.addEventListener("click", (event) => {
            const player1Cards = match.player1Hand[1].cards[0];
            console.log("match.player1Hand[0].cards[0]");
            console.log(player1Cards);
            
            const cardId = Number(event.currentTarget.id);
            const theCard = document.getElementById(cardId);
            const cardIndex = match.player1Hand[1].cards[0].findIndex(el => el.id == cardId);
            const cardIssued = match.player1Hand[1].cards[0][cardIndex]
            
            match.gameStack.push(cardIssued);
            match.player1Hand[1].cards[0].splice(cardIndex, 1);
            
            div5.appendChild(theCard)
            match.sendMessage(`Você jogou um ${cardIssued.fullName}`)
            
            
            // let faceCard = document.createElement("img") // <img src="" />
            // faceCard.className = "stackCard";
            // faceCard.src = card.src // <img src="./img/fulldeck/ace_of_diamonds.svg" />
            // faceCard.id = card.id;
            // theCard.remove();
            
        });
    });
}
     
    

    // funções de início de jogo -setDeck -sortDeck -setPlayers -setHand -dealCards
