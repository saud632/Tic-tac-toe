function checkWin() {
    var inputs = [
        document.getElementById("b1"), document.getElementById("b2"), document.getElementById("b3"),
        document.getElementById("b4"), document.getElementById("b5"), document.getElementById("b6"),
        document.getElementById("b7"), document.getElementById("b8"), document.getElementById("b9")
    ]

    for (var i = 0; i < inputs.length; i++) {
        inputs[i] = inputs[i].innerHTML
    }
  



    if ((inputs[0] != '') && (inputs[1] != '') && (inputs[2] != '') && (inputs[3] != '') && (inputs[4] != '') && (inputs[5] != '') && (inputs[6] != '') && (inputs[7] != '') && (inputs[8] != '0')) {
        document.getElementById('print').innerHTML = "Match Tie";
        window.alert('Match Tie');
    }
    else {
        checkWinForPlayer('x', inputs)

        checkWinForPlayer('0', inputs)
        if (flag == 1) {
            document.getElementById('print').innerHTML = "player X Turn";
        }
        else {
            document.getElementById('print').innerHTML = "player 0 Turn";
        }
    }
   

}
document.addEventListener("win",playAudio);
function playAudio(){
    var x = document.getElementById("myAudio").play();
}

function checkWinForPlayer(symbol, inputs) {
    for (var i = 0; i < inputs.length; i += 3) {
        if ((inputs[i].toLowerCase() == symbol) &&
            (inputs[i + 1].toLowerCase() == symbol) &&
            (inputs[i + 2].toLowerCase() == symbol)) {
            document.getElementById('print').innerHTML = "player " + symbol + "won";
            window.alert('player' + symbol + 'won')
            const ev= new Event("win");
            document.dispatchEvent(ev)
        }
    }
    for (var i = 0; i < inputs.length / 3; i += 1) {
        console.log(i)
        if ((inputs[i].toLowerCase() == symbol) &&
            (inputs[i + 3].toLowerCase() == symbol) &&
            (inputs[i + 6].toLowerCase() == symbol)) {
            document.getElementById('print').innerHTML = "player " + symbol + "won";
            window.alert('player' + symbol + 'won')
            const ev= new Event("win");
            document.dispatchEvent(ev)
        }

       
        
    }
    if ((inputs[0].toLowerCase() == symbol) &&
        (inputs[4].toLowerCase() == symbol) &&
        (inputs[8].toLowerCase() == symbol)) {
        document.getElementById('print').innerHTML = "Player " + symbol + " won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player ' + symbol + ' won');
        const ev= new Event("win");
        document.dispatchEvent(ev)
        
    }
    else if ((inputs[2].toLowerCase() == symbol) &&
        (inputs[4].toLowerCase() == symbol) &&
        (inputs[6].toLowerCase() == symbol)) {
        document.getElementById('print').innerHTML = "Player " + symbol + " won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player ' + symbol + ' won');
        const ev= new Event("win");
        document.dispatchEvent(ev)
    }
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
    if ( document.getElementById(id).innerHTML != '')
    return
    if (flag == 1) {
        document.getElementById(id).innerHTML = "X";
        document.getElementById(id).disabled = true;
        flag = 0;
    }
    else {
        document.getElementById(id).innerHTML = "0";
        document.getElementById(id).disabled = true;
        flag = 1;
    }
}

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