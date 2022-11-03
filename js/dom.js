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

    
    

    // funções de início de jogo -setDeck -sortDeck -setPlayers -setHand -dealCards
})
