class JogoTruco {
    constructor() {        

        this.baseDeck = [
            {face: "10", naipe: "p", color: "b", fullName: "Dez de Paus", valueMG: 7, valueSP: 7, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/10_of_clubs.svg"},
            {face: "10", naipe: "o", color: "r", fullName: "Dez de Ouros", valueMG: 7, valueSP: 7, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/10_of_diamonds.svg"},
            {face: "10", naipe: "c", color: "r", fullName: "Dez de Copas", valueMG: 7, valueSP: 7, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/10_of_hearts.svg"},
            {face: "10", naipe: "s", color: "b", fullName: "Dez de Espadas", valueMG: 7, valueSP: 7, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/10_of_spades.svg"},
            {face: "2", naipe: "p", color: "b", fullName: "Dois de Paus", valueMG: 12, valueSP: 12, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/2_of_clubs.svg"},
            {face: "2", naipe: "o", color: "r", fullName: "Dois de Ouros", valueMG: 12, valueSP: 12, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/2_of_diamonds.svg"},
            {face: "2", naipe: "c", color: "r", fullName: "Dois de Copas", valueMG: 12, valueSP: 12, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/2_of_hearts.svg"},
            {face: "2", naipe: "s", color: "b", fullName: "Dois de Espadas", valueMG: 12, valueSP: 12, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/2_of_spades.svg"},
            {face: "3", naipe: "p", color: "b", fullName: "Tres de Paus", valueMG: 13, valueSP: 13, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/3_of_clubs.svg"},
            {face: "3", naipe: "o", color: "r", fullName: "Tres de Ouros", valueMG: 13, valueSP: 13, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/3_of_diamonds.svg"},
            {face: "3", naipe: "c", color: "r", fullName: "Tres de Copas", valueMG: 13, valueSP: 13, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/3_of_hearts.svg"},
            {face: "3", naipe: "s", color: "b", fullName: "Tres de Espadas", valueMG: 13, valueSP: 13, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/3_of_spades.svg"},
            {face: "4", naipe: "p", color: "b", fullName: "Quatro de Paus", valueMG: 18, valueSP: 1, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/4_of_clubs.svg"},
            {face: "4", naipe: "o", color: "r", fullName: "Quatro de Ouros", valueMG: 1, valueSP: 1, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/4_of_diamonds.svg"},
            {face: "4", naipe: "c", color: "r", fullName: "Quatro de Copas", valueMG: 1, valueSP: 1, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/4_of_hearts.svg"},
            {face: "4", naipe: "s", color: "b", fullName: "Quatro de Espadas", valueMG: 1, valueSP: 1, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/4_of_spades.svg"},
            {face: "5", naipe: "p", color: "b", fullName: "Cinco de Paus", valueMG: 2, valueSP: 2, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/5_of_clubs.svg"},
            {face: "5", naipe: "o", color: "r", fullName: "Cinco de Ouros", valueMG: 2, valueSP: 2, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/5_of_diamonds.svg"},
            {face: "5", naipe: "c", color: "r", fullName: "Cinco de Copas", valueMG: 2, valueSP: 2, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/5_of_hearts.svg"},
            {face: "5", naipe: "s", color: "b", fullName: "Cinco de Espadas", valueMG: 2, valueSP: 2, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/5_of_spades.svg"},
            {face: "6", naipe: "p", color: "b", fullName: "Seis de Paus", valueMG: 3, valueSP: 3, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/6_of_clubs.svg"},
            {face: "6", naipe: "o", color: "r", fullName: "Seis de Ouros", valueMG: 3, valueSP: 3, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/6_of_diamonds.svg"},
            {face: "6", naipe: "c", color: "r", fullName: "Seis de Copas", valueMG: 3, valueSP: 3, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/6_of_hearts.svg"},
            {face: "6", naipe: "s", color: "b", fullName: "Seis de Espadas", valueMG: 3, valueSP: 3, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/6_of_spades.svg"},
            {face: "7", naipe: "p", color: "b", fullName: "Sete de Paus", valueMG: 4, valueSP: 4, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/7_of_clubs.svg"},
            {face: "7", naipe: "o", color: "r", fullName: "Sete de Ouros", valueMG: 15, valueSP: 4, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/7_of_diamonds.svg"},
            {face: "7", naipe: "c", color: "r", fullName: "Sete de Copas", valueMG: 17, valueSP: 4, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/7_of_hearts.svg"},
            {face: "7", naipe: "s", color: "b", fullName: "Sete de Espadas", valueMG: 4, valueSP: 4, trucoSujo: 1, trucoLimpo: 0, src: "./img/fulldeck/7_of_spades.svg"},
            {face: "8", naipe: "p", color: "b", fullName: "Oito de Paus", valueMG: 5, valueSP: 5, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/8_of_clubs.svg"},
            {face: "8", naipe: "o", color: "r", fullName: "Oito de Ouros", valueMG: 5, valueSP: 5, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/8_of_diamonds.svg"},
            {face: "8", naipe: "c", color: "r", fullName: "Oito de Copas", valueMG: 5, valueSP: 5, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/8_of_hearts.svg"},
            {face: "8", naipe: "s", color: "b", fullName: "Oito de Espadas", valueMG: 5, valueSP: 5, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/8_of_spades.svg"},
            {face: "9", naipe: "p", color: "b", fullName: "Nove de Paus", valueMG: 6, valueSP: 6, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/9_of_clubs.svg"},
            {face: "9", naipe: "o", color: "r", fullName: "Nove de Ouros", valueMG: 6, valueSP: 6, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/9_of_diamonds.svg"},
            {face: "9", naipe: "c", color: "r", fullName: "Nove de Copas", valueMG: 6, valueSP: 6, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/9_of_hearts.svg"},
            {face: "9", naipe: "s", color: "b", fullName: "Nove de Espadas", valueMG: 6, valueSP: 6, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/9_of_spades.svg"},
            {face: "A", naipe: "p", color: "b", fullName: "Ás de Paus", valueMG: 11, valueSP: 11, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/ace_of_clubs.svg"},
            {face: "A", naipe: "o", color: "r", fullName: "Ás de Ouros", valueMG: 11, valueSP: 11, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/ace_of_diamonds.svg"},
            {face: "A", naipe: "c", color: "r", fullName: "Ás de Copas", valueMG: 11, valueSP: 11, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/ace_of_hearts.svg"},
            {face: "A", naipe: "s", color: "b", fullName: "Ás de Espadas", valueMG: 16, valueSP: 11, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/ace_of_spades2.svg"},
            {face: "joker", naipe: "black", color: "b", fullName: "Coringa Preto", valueMG: 14, valueSP: 14, trucoSujo: 0, trucoLimpo: 1, src: "./img/fulldeck/black_joker.svg"},
            {face: "J", naipe: "p", color: "b", fullName: "Valete de Paus", valueMG: 9, valueSP: 9, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/jack_of_clubs2.svg"},
            {face: "J", naipe: "o", color: "r", fullName: "Valete de Ouros", valueMG: 9, valueSP: 9, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/jack_of_diamonds2.svg"},
            {face: "J", naipe: "c", color: "r", fullName: "Valete de Copas", valueMG: 9, valueSP: 9, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/jack_of_hearts2.svg"},
            {face: "J", naipe: "s", color: "b", fullName: "Valete de Espadas", valueMG: 9, valueSP: 9, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/jack_of_spades2.svg"},
            {face: "K", naipe: "p", color: "b", fullName: "Rei de Paus", valueMG: 10, valueSP: 10, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/king_of_clubs2.svg"},
            {face: "K", naipe: "o", color: "r", fullName: "Rei de Ouros", valueMG: 10, valueSP: 10, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/king_of_diamonds2.svg"},
            {face: "K", naipe: "c", color: "r", fullName: "Rei de Copas", valueMG: 10, valueSP: 10, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/king_of_hearts2.svg"},
            {face: "K", naipe: "s", color: "b", fullName: "Rei de Espadas", valueMG: 10, valueSP: 10, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/king_of_spades2.svg"},
            {face: "Q", naipe: "p", color: "b", fullName: "Dama de Paus", valueMG: 8, valueSP: 8, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/queen_of_clubs2.svg"},
            {face: "Q", naipe: "o", color: "r", fullName: "Dama de Ouros", valueMG: 8, valueSP: 8, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/queen_of_diamonds2.svg"},
            {face: "Q", naipe: "c", color: "r", fullName: "Dama de Copas", valueMG: 8, valueSP: 8, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/queen_of_hearts2.svg"},
            {face: "Q", naipe: "s", color: "b", fullName: "Dama de Espadas", valueMG: 8, valueSP: 8, trucoSujo: 1, trucoLimpo: 1, src: "./img/fulldeck/queen_of_spades2.svg"},
            {face: "joker", naipe: "red", color: "r", fullName: "Coringa Vermelho", valueMG: 14, valueSP: 14, trucoSujo: 0, trucoLimpo: 0, src: "./img/fulldeck/red_joker.svg"}
        ]

        this.player1Deck = [];        
        this.player2Deck = [];        
        this.player3Deck = [];        
        this.player4Deck = [];

    }

    buildDeck() {
        const chkLimpo = document.getElementById("baralhoLimpo").checked
        const chkSujo = document.getElementById("baralhoSujo").checked

        if (chkLimpo) {
            let selectedDeck = baseDeck.filter(function(obj) { return  obj.trucoLimpo == 1})
        } else if (chkSujo) {
            let selectedDeck = baseDeck.filter(function(obj) { return  obj.trucoSujo == 1})
        } else {
            console.log("Nenhum baralho de truco selecionado")
        }
    }

    sortDeck() {
        let sortedDeck = shuffle(selectedDeck);

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
    }


}
        
     
