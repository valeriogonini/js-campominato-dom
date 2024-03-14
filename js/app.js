console.log("ciao");


const ButtonPlay = document.querySelector(".play")
const CellGrid = document.querySelector(".grid-cell")
console.log(CellGrid, ButtonPlay);

// Ci saranno quindi 10 caselle per ognuna delle 10 righe.


// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.






ButtonPlay.addEventListener("click", function () {

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

            cellElement.classList.toggle("bg-blue")


            // ed emetto un messaggio in console con il numero della cella cliccata.

            console.log(num);


        })
    }
})
