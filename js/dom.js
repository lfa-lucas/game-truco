const mesa = new PartidaTruco();

const startScreen = document.getElementById("startScreen");
const inputName = document.getElementById("inputName");
const selectMineiro = document.getElementById("selectMineiro").checked;
const selectPaulista = document.getElementById("select Paulista").checked;
const modoIndividual = document.getElementById("modoIndividual").checked;
const modoDuplas = document.getElementById("modoDuplas").checked;
const btnJogar = document.getElementById("btnJogar");
const gameScreen = document.getElementById("gameScreen");

btnJogar.addEventListener("click", (event) => {
    // se a função está recarregando a página use:
    event.preventDefault();

    if(inputName.value === "") {
        inputName.value = "Player1";        
    }

    // funções de início de jogo -setDeck -sortDeck -setPlayers -setHand -dealCards
})
