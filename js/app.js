console.log("ciao");


const ButtonPlay = document.querySelector(".play")
const CellGrid = document.querySelector(".grid-cell")
console.log(CellGrid, ButtonPlay);

// Ci saranno quindi 10 caselle per ognuna delle 10 righe.


// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.






ButtonPlay.addEventListener("click", function () {
    const min = 1
    let max = 100
    const NumberRandom = 16

    const arrayBomb = []

    while (arrayBomb.length < NumberRandom) {
        const NumberRandom = parseInt((Math.floor(Math.random() * max) + min))


        if (arrayBomb.includes(NumberRandom) === false) {
            arrayBomb.push(NumberRandom)

        }

    }
    console.log(arrayBomb);


    const Select = document.getElementById("difficolta")

    let size;

    CellGrid.innerHTML = ""


    if (Select.value === "difficolta1") {
        size = 10
        
        CellGrid.classList.add("easy")
        CellGrid.classList.remove("medium", "hard")

    } else if (Select.value === "difficolta2") {
        size = 9
        CellGrid.classList.add("medium")
        CellGrid.classList.remove("easy", "hard")


    } else {
        size = 7
        CellGrid.classList.add("hard")
        CellGrid.classList.remove("medium", "easy")


    }

    const NumCell = size * size

    for (let i = 0; i < NumCell; i++) {
        // Ogni cella ha un numero progressivo, da 1 a 100.

        const num = i + 1;

        const cellElement = document.createElement("div")
        cellElement.className = "cell"
        cellElement.innerHTML = num

        CellGrid.append(cellElement)
        // Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro 


        cellElement.addEventListener("click", function () {
            
            cellElement.classList.add("bg-blue")

            for(let i = 0; i < arrayBomb.length; i++){
                const CellBomb = arrayBomb[i]

            if (parseInt(cellElement.innerHTML) === CellBomb){
            cellElement.classList.add("bg-red")

            }
            }

            

              
           


            // ed emetto un messaggio in console con il numero della cella cliccata.

            console.log(num);


        })




    }

})






// Descrizione:
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l’utente clicca su una cella:
// se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso.
// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// Attenzione che l’utente potrebbe cliccare due volte sulla stessa casella…




