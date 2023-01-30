function checkWin() {
    var inputs = getGameState()

    const symbols = ['x', '0']
    for (let i = 0; i < 2; i++) {
        if (checkWinForPlayer(symbols[i], inputs)) {
            document.getElementById('print').innerHTML = "player " + symbols[i] + " won";
            window.alert("player " + symbols[i] + " won")
            const ev = new Event("win");
            document.dispatchEvent(ev)
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;

            return
        }
    }

    if ((inputs[0] != '') && (inputs[1] != '') && (inputs[2] != '') && (inputs[3] != '') && (inputs[4] != '') && (inputs[5] != '') && (inputs[6] != '') && (inputs[7] != '') && (inputs[8] != '')) {
        document.getElementById('print').innerHTML = "Match Tie";
        window.alert('Match Tie');
    }

    if (flag == 1) {
        document.getElementById('print').innerHTML = "player X Turn";
    }
    else {
        document.getElementById('print').innerHTML = "player 0 Turn";
    }
}

document.addEventListener("win", playAudio);
function playAudio() {
    var x = document.getElementById("myAudio").play();
}

function getGameState() {
    const inputs = [
        document.getElementById("b1"), document.getElementById("b2"), document.getElementById("b3"),
        document.getElementById("b4"), document.getElementById("b5"), document.getElementById("b6"),
        document.getElementById("b7"), document.getElementById("b8"), document.getElementById("b9"),
    ]

    for (var i = 0; i < inputs.length; i++) {
        inputs[i] = inputs[i].innerHTML
    }

    return inputs
}

function checkWinForPlayer(symbol, inputs) {
    for (var i = 0; i < inputs.length; i += 3) {
        if ((inputs[i].toLowerCase() == symbol) &&
            (inputs[i + 1].toLowerCase() == symbol) &&
            (inputs[i + 2].toLowerCase() == symbol)) {
            return true;
        }
    }
    for (var i = 0; i < inputs.length / 3; i += 1) {
        if ((inputs[i].toLowerCase() == symbol) &&
            (inputs[i + 3].toLowerCase() == symbol) &&
            (inputs[i + 6].toLowerCase() == symbol)) {
            return true
        }
    }
    if ((inputs[0].toLowerCase() == symbol) &&
        (inputs[4].toLowerCase() == symbol) &&
        (inputs[8].toLowerCase() == symbol)) {
        return true
    }
    else if ((inputs[2].toLowerCase() == symbol) &&
        (inputs[4].toLowerCase() == symbol) &&
        (inputs[6].toLowerCase() == symbol)) {
        return true
    }

    return false
}

function reset() {
    location.reload();
    document.getElementById("b1").value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';
}
flag = 1;
function updateCell(id) {
    if (flag == 1) {
        console.log("player2")
        document.getElementById(id).innerHTML = "X";
        document.getElementById(id).disabled = true;
        flag = 0;
    }
    else {
        document.getElementById(id).innerHTML = "0";
        document.getElementById(id).disabled = true;
        flag = 1;
    }

    if (player2 == "") {
        computerTurn(flag)
        flag = 1
    }
}
function computerTurn(flag) {

    const freePositions = []
    const positions = document.querySelectorAll('.board-button')
const  position=[]
    for(var i=0;i<3 ;i++){
freePositions.push(position)
    }


    positions.forEach(position => {
        if (!position.innerHTML)
            freePositions.push(position)

    })
console.log(position)
    if (freePositions.length <=0)
        return

    let computerChoice = intelligentChoice()
    console.log(computerChoice)
    if (computerChoice == -1) {
    computerChoice = Math.floor(Math.random() * freePositions.length);

    }

    freePositions[computerChoice].innerHTML = flag === 0 ? '0' : 'X'

}

function intelligentChoice() {

    for (let i = 0; i < 9; i++){
        const allCells = getGameState()
        if (allCells[i] == '') {
            allCells[i] ='x';
            }
            if(checkWinForPlayer('x',allCells)){
                return i
            }
         
            
        }
    
return -1

}

// intelligent choice instead of random
// 1. allCells = getGameState()
// 2. iterate over all cells
//   3. mark cell as opposite player (X), if cell is empty
//   4. check if win condition applies as opposite player (X)
//     5. return the index of cell
// . const computerChoice = returned index





window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', ({ matches }) => {
        if (matches) {
            document.querySelector('html').classList.add('dark-mode')
            console.log("change to dark mode!")
        } else {
            document.querySelector('html').classList.remove('dark-mode')
            console.log("change to light mode!")
        }
    })


const urlparams = new URLSearchParams(window.location.search);


const player1 = urlparams.get('player1');
// player1=document.getElementById('player1-name').value;
// document.getElementById("player1-name").innerHTML='player1';
const Computer = urlparams.get('Computer')

const player2 = urlparams.get('player2');
// document.getElementById("player2-name").innerHTML='player2';


console.log("player names:", player1, Computer, player2);