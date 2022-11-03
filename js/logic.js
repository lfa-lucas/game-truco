class JogoTruco {
    constructor() {        

        // full deck set, 54 cards (13 cards, 4 suits e 2 jokers)
        this.baseDeck = [
            {id: 1, face: "A", naipe: "o", color: "r", fullName: "Ás de Ouros", valueMG: 11, valueSP: 11, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/ace_of_diamonds.svg"},
            {id: 2, face: "A", naipe: "s", color: "b", fullName: "Ás de Espadas", valueMG: 16, valueSP: 11, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/ace_of_spades2.svg"},
            {id: 3, face: "A", naipe: "c", color: "r", fullName: "Ás de Copas", valueMG: 11, valueSP: 11, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/ace_of_hearts.svg"},
            {id: 4, face: "A", naipe: "p", color: "b", fullName: "Ás de Paus", valueMG: 11, valueSP: 11, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/ace_of_clubs.svg"},
            {id: 5, face: "2", naipe: "o", color: "r", fullName: "Dois de Ouros", valueMG: 12, valueSP: 12, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/2_of_diamonds.svg"},
            {id: 6, face: "2", naipe: "s", color: "b", fullName: "Dois de Espadas", valueMG: 12, valueSP: 12, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/2_of_spades.svg"},
            {id: 7, face: "2", naipe: "c", color: "r", fullName: "Dois de Copas", valueMG: 12, valueSP: 12, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/2_of_hearts.svg"},
            {id: 8, face: "2", naipe: "p", color: "b", fullName: "Dois de Paus", valueMG: 12, valueSP: 12, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/2_of_clubs.svg"},
            {id: 9, face: "3", naipe: "o", color: "r", fullName: "Tres de Ouros", valueMG: 13, valueSP: 13, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/3_of_diamonds.svg"},
            {id: 10, face: "3", naipe: "s", color: "b", fullName: "Tres de Espadas", valueMG: 13, valueSP: 13, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/3_of_spades.svg"},
            {id: 11, face: "3", naipe: "c", color: "r", fullName: "Tres de Copas", valueMG: 13, valueSP: 13, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/3_of_hearts.svg"},
            {id: 12, face: "3", naipe: "p", color: "b", fullName: "Tres de Paus", valueMG: 13, valueSP: 13, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/3_of_clubs.svg"},
            {id: 13, face: "4", naipe: "o", color: "r", fullName: "Quatro de Ouros", valueMG: 1, valueSP: 1, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/4_of_diamonds.svg"},
            {id: 14, face: "4", naipe: "s", color: "b", fullName: "Quatro de Espadas", valueMG: 1, valueSP: 1, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/4_of_spades.svg"},
            {id: 15, face: "4", naipe: "c", color: "r", fullName: "Quatro de Copas", valueMG: 1, valueSP: 1, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/4_of_hearts.svg"},
            {id: 16, face: "4", naipe: "p", color: "b", fullName: "Quatro de Paus", valueMG: 18, valueSP: 1, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/4_of_clubs.svg"},
            {id: 17, face: "5", naipe: "o", color: "r", fullName: "Cinco de Ouros", valueMG: 2, valueSP: 2, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/5_of_diamonds.svg"},
            {id: 18, face: "5", naipe: "s", color: "b", fullName: "Cinco de Espadas", valueMG: 2, valueSP: 2, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/5_of_spades.svg"},
            {id: 19, face: "5", naipe: "c", color: "r", fullName: "Cinco de Copas", valueMG: 2, valueSP: 2, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/5_of_hearts.svg"},
            {id: 20, face: "5", naipe: "p", color: "b", fullName: "Cinco de Paus", valueMG: 2, valueSP: 2, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/5_of_clubs.svg"},
            {id: 21, face: "6", naipe: "o", color: "r", fullName: "Seis de Ouros", valueMG: 3, valueSP: 3, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/6_of_diamonds.svg"},
            {id: 22, face: "6", naipe: "s", color: "b", fullName: "Seis de Espadas", valueMG: 3, valueSP: 3, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/6_of_spades.svg"},
            {id: 23, face: "6", naipe: "c", color: "r", fullName: "Seis de Copas", valueMG: 3, valueSP: 3, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/6_of_hearts.svg"},
            {id: 24, face: "6", naipe: "p", color: "b", fullName: "Seis de Paus", valueMG: 3, valueSP: 3, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/6_of_clubs.svg"},
            {id: 25, face: "7", naipe: "o", color: "r", fullName: "Sete de Ouros", valueMG: 15, valueSP: 4, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/7_of_diamonds.svg"},
            {id: 26, face: "7", naipe: "s", color: "b", fullName: "Sete de Espadas", valueMG: 4, valueSP: 4, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/7_of_spades.svg"},
            {id: 27, face: "7", naipe: "c", color: "r", fullName: "Sete de Copas", valueMG: 17, valueSP: 4, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/7_of_hearts.svg"},
            {id: 28, face: "7", naipe: "p", color: "b", fullName: "Sete de Paus", valueMG: 4, valueSP: 4, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/7_of_clubs.svg"},
            {id: 29, face: "8", naipe: "o", color: "r", fullName: "Oito de Ouros", valueMG: 5, valueSP: 5, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/8_of_diamonds.svg"},
            {id: 30, face: "8", naipe: "s", color: "b", fullName: "Oito de Espadas", valueMG: 5, valueSP: 5, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/8_of_spades.svg"},
            {id: 31, face: "8", naipe: "c", color: "r", fullName: "Oito de Copas", valueMG: 5, valueSP: 5, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/8_of_hearts.svg"},
            {id: 32, face: "8", naipe: "p", color: "b", fullName: "Oito de Paus", valueMG: 5, valueSP: 5, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/8_of_clubs.svg"},
            {id: 33, face: "9", naipe: "o", color: "r", fullName: "Nove de Ouros", valueMG: 6, valueSP: 6, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/9_of_diamonds.svg"},
            {id: 34, face: "9", naipe: "s", color: "b", fullName: "Nove de Espadas", valueMG: 6, valueSP: 6, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/9_of_spades.svg"},
            {id: 35, face: "9", naipe: "c", color: "r", fullName: "Nove de Copas", valueMG: 6, valueSP: 6, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/9_of_hearts.svg"},
            {id: 36, face: "9", naipe: "p", color: "b", fullName: "Nove de Paus", valueMG: 6, valueSP: 6, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/9_of_clubs.svg"},
            {id: 37, face: "10", naipe: "o", color: "r", fullName: "Dez de Ouros", valueMG: 7, valueSP: 7, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/10_of_diamonds.svg"},
            {id: 38, face: "10", naipe: "s", color: "b", fullName: "Dez de Espadas", valueMG: 7, valueSP: 7, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/10_of_spades.svg"},
            {id: 39, face: "10", naipe: "c", color: "r", fullName: "Dez de Copas", valueMG: 7, valueSP: 7, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/10_of_hearts.svg"},
            {id: 40, face: "10", naipe: "p", color: "b", fullName: "Dez de Paus", valueMG: 7, valueSP: 7, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/10_of_clubs.svg"},
            {id: 41, face: "J", naipe: "o", color: "r", fullName: "Valete de Ouros", valueMG: 9, valueSP: 9, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/jack_of_diamonds2.svg"},
            {id: 42, face: "J", naipe: "s", color: "b", fullName: "Valete de Espadas", valueMG: 9, valueSP: 9, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/jack_of_spades2.svg"},
            {id: 43, face: "J", naipe: "c", color: "r", fullName: "Valete de Copas", valueMG: 9, valueSP: 9, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/jack_of_hearts2.svg"},
            {id: 44, face: "J", naipe: "p", color: "b", fullName: "Valete de Paus", valueMG: 9, valueSP: 9, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/jack_of_clubs2.svg"},
            {id: 45, face: "Q", naipe: "o", color: "r", fullName: "Dama de Ouros", valueMG: 8, valueSP: 8, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/queen_of_diamonds2.svg"},
            {id: 46, face: "Q", naipe: "s", color: "b", fullName: "Dama de Espadas", valueMG: 8, valueSP: 8, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/queen_of_spades2.svg"},
            {id: 47, face: "Q", naipe: "c", color: "r", fullName: "Dama de Copas", valueMG: 8, valueSP: 8, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/queen_of_hearts2.svg"},
            {id: 48, face: "Q", naipe: "p", color: "b", fullName: "Dama de Paus", valueMG: 8, valueSP: 8, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/queen_of_clubs2.svg"},
            {id: 49, face: "K", naipe: "o", color: "r", fullName: "Rei de Ouros", valueMG: 10, valueSP: 10, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/king_of_diamonds2.svg"},
            {id: 50, face: "K", naipe: "s", color: "b", fullName: "Rei de Espadas", valueMG: 10, valueSP: 10, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/king_of_spades2.svg"},
            {id: 51, face: "K", naipe: "c", color: "r", fullName: "Rei de Copas", valueMG: 10, valueSP: 10, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/king_of_hearts2.svg"},
            {id: 52, face: "K", naipe: "p", color: "b", fullName: "Rei de Paus", valueMG: 10, valueSP: 10, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/king_of_clubs2.svg"},
            {id: 53, face: "joker", naipe: "black", color: "b", fullName: "Coringa Preto", valueMG: 14, valueSP: 14, trucoSujo: 0, trucoLimpo: 1, src: "./img/fulldeck/black_joker.svg"},
            {id: 54, face: "joker", naipe: "red", color: "r", fullName: "Coringa Vermelho", valueMG: 14, valueSP: 14, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/red_joker.svg"}
        ]

        //players hand        
        this.player1Hand = [{playerId: 1, playerTeam: 1}, {cards:[]}]; //this.player1Hand[1].cards.push(qualquer)
        this.player2Hand = [{playerId: 2, playerTeam: 2}, {cards:[]}];
        this.player3Hand = [{playerId: 3, playerTeam: 1}, {cards:[]}];
        this.player4Hand = [{playerId: 4, playerTeam: 2}, {cards:[]}];
        this.gameStack = [];
        this.playersSet= [];
                


        //parâmetros básicos de jogo
        this.time500 = 500;        

        //variáveis do jogo
        this.ownScore;
        this.adversaryScore;
        this.selectedDeck;
        this.roundCount

        



    }




    

    //create the selected type (limpo 28 cards) (sujo 40 cards) of deck    
    buildDeck() {
        const chkLimpo = document.getElementById("baralhoLimpo").checked
        const chkSujo = document.getElementById("baralhoSujo").checked
        

        //create deck limpo, 28 cartas
        if (chkLimpo) {
            this.selectedDeck = this.baseDeck.filter(function(obj) { return  obj.trucoLimpo == 1})
        
        //create deck sujo, 40 cartas
        } else if (chkSujo) {
            this.selectedDeck = this.baseDeck.filter(function(obj) { return  obj.trucoSujo == 1})
        
        //flow control | this option shall not be triggered
        } else {
            console.log("Nenhum baralho de truco selecionado. Quer jogar damas?")
        }
    }

    //shuffle the created selected deck
    shuffleDeck() {
        
        function shuffle(arr) {
            let i = arr.length, j, temp;
            while(--i > 0){
                j = Math.floor(Math.random()*(i+1));
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
            return arr
        }

        return shuffle(this.selectedDeck);
    }

    //sort cards to players | 1vs1 or 2vs2
    startHand() {
        //colocar no início de jogo
        const chkIndividual = document.getElementById("modoIndividual").checked;
        const chkDuplas = document.getElementById("modoDuplas").checked;
        this.roundCount = 1
        let shuffledDeck = this.shuffleDeck()

        //start hand with 1 vs 1
        if (chkIndividual) {
            this.player1Hand[1].cards.push(shuffledDeck.splice(0, 3));
            
            this.player1Hand[1].cards[0].forEach((card) => {
                let faceCard = document.createElement("img") // <img src="" />
                faceCard.src = card.src // <img src="./img/fulldeck/ace_of_diamonds.svg" />
                
                faceCard.className = "playerCard"; // selecionar esses elementos para o eventListener
                faceCard.id = card.id;
                
                //frontImg.classList.add("hide") // <img src="img" class="hide" />
                //frontImg.classList.add("frontCard") // <img src="img" class="hide frontCard" />    
                    
                div8.appendChild(faceCard)
                })

                this.player2Hand[1].cards.push(shuffledDeck.splice(0, 3));
                
                this.player2Hand[1].cards[0].forEach((card) => {
                    let faceCard = document.createElement("img"); // <img src="" />
                    faceCard.src = card.src; // <img src="./img/fulldeck/ace_of_diamonds.svg" />                
                    
                    //frontImg.classList.add("hide") // <img src="img" class="hide" />
                    //frontImg.classList.add("frontCard") // <img src="img" class="hide frontCard" />    
                        
                    div2.appendChild(faceCard)                
                })
            

        //start hand with  2 vs 2
        } else if (chkDuplas) {
            this.player1Hand[1].cards = shuffledDeck.splice(0, 3);
            this.player2Hand[1].cards = shuffledDeck.splice(0, 3);
            this.player3Hand[1].cards = shuffledDeck.splice(0, 3);
            this.player4Hand[1].cards = shuffledDeck.splice(0, 3);

        //flow control | this option shall not be triggered
        } else {
            console.log("Modo de jogo não selecionado. Quer jogar sozinho?")
        }
                                                                              
            this.startRound()
    }            

    //begins the round | 1st game round -> random player
    startRound() {

        interativeCards();

        if (this.roundCount === 1){
            switch(parseInt(Math.random() * 2 + 1)){
                case 1:
                    this.sendMessage("Você começa!");
                    this.humanPlayerTurn()
                    this.cpuPlayerTurn();
                    this.checkRound();
                    break;
                case 2:
                    this.sendMessage("Adversário começa.");                   
                    this.cpuPlayerTurn();
                    //this.humanPlayerTurn();
                    this.checkRound();
                    break;
            }
        }        
    }


    //human player select a card 
    humanPlayerTurn() {
        
        

    }   

    //CPU player select a card 
    cpuPlayerTurn() {   

    }

    //CPU game strategy
    cpuStrategy() {
        //joga maior carta
    }


    //check the biggest card on table and ends the round
    checkRound() {        
    }

    //check victory conditions | end the hand and assign scores
    checkHand() {
    }

    //check victory conditions | start a new hand or end the game
    checkGame() {        
    }

    //send a message to player screen
    sendMessage(message) {
        div3.innerText = message;
    }


    //transferi esse método para dentro da callback do eventListener

    // playCard() {
    //     const player1Cards = this.player1Hand[1].cards[0];
    //     console.log("this.player1Hand[0].cards[0]");
    //     console.log(player1Cards);
        
    //     const cardId = Number(this.id);
    //     const theCard = document.getElementById(this.id);
    //     const cardIndex = this.player1Hand[1].cards[0].indexOf(cardId);
    //     const cardIssued = this.player1Hand[1].cards[0][cardIndex]
        
    //     this.gameStack.push(cardIssued);
    //     this.player1Hand[1].cards[0].splice(cardIndex, 1);
    //     theCard.remove();

    //     let faceCard = document.createElement("img") // <img src="" />
    //     faceCard.className = "stackCard";
    //     faceCard.src = card.src // <img src="./img/fulldeck/ace_of_diamonds.svg" />
    //     faceCard.id = card.id;
    //     div5.appendChild(faceCard) 

    // }



}
        
     
