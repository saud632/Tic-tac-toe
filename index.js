
function myfunction() {
    var p1=document.getElementById('b1').value;
var p2=document.getElementById('comp').value;
    var p3=document.getElementById('b2').value;
  
    window.open("http://127.0.0.1:5500/new-feature.html?player1=" + p1 +"&Computer="+ p2+ "&player2=" +p3)

    }
    

    function userinput() {
        // get the clock
        var mydiv = document.getElementById('secondplayer');
    
        // get the current value of the clock's display property
        var displaySetting = mydiv.style.display;
    
        // also get the clock button, so we can change what it says
        var friend = document.getElementById('friend');
    
        // now toggle the clock and the button text, depending on current state
        if (displaySetting == 'block') {
          // clock is visible. hide it
          mydiv.style.display = 'none';
          // change button text
          friend.innerHTML = 'Show content';
        }
        else {
          // clock is hidden. show it
          mydiv.style.display = 'block';
          // change button text
          friend.innerHTML = 'Enter player name';
        }
      }