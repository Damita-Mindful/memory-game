let uncoverCards = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let movements = 0;
let hits = 0;
let timer = false;
let seconds = 0;
let countSeconds = null;

//Doc HTML
let showMovements = document.getElementById('movements')
let showHits = document.getElementById('hits')
let showTime = document.getElementById('time')

let emojis = ["😳", "😳", "🤣", "🤣", "😇", "😇", "😍", "😍", "😋", "😋", "😒", "😒", "😴", "😴", "🤢", "🤢", "🥵", "🥵", "🥶", "🥶", "😵", "😵", "😎", "😎", "😡", "😡", "💩", "💩", "😭", "😭"];

emojis = emojis.sort(() => { return Math.random() - 0.5 })

//Funtions
function countTime(){
  countSeconds = setInterval(() => {
    seconds++;
    showTime.innerHTML = `Time: ${seconds} seconds`
    if(hits == 15){
      clearInterval(countSeconds)
      showTime.innerHTML = `Great 🎉 you got it in ${seconds} seconds!`
    }
  }, 1000)
}

let refresh = document.getElementById('refresh');
refresh.addEventListener('click', () => { location.reload()})

// principal function
function uncover(id) {

  if(timer == false) {
    countTime();
    timer = true;
  }


  uncoverCards++

  if (uncoverCards == 1) {
    //show first emoji
    card1 = document.getElementById(id)
    firstResult = emojis[id]
    card1.innerHTML = firstResult;

    //disable 1st button
    card1.disabled = true;

  } else if (uncoverCards == 2) {
    card2 = document.getElementById(id)
    secondResult = emojis[id]
    card2.innerHTML = secondResult;

    card2.disabled = true;

    //movements
    movements++
    showMovements.innerHTML = `Movements: ${movements}`

    if (firstResult == secondResult) {
      uncoverCards = 0;

      hits++
      showHits.innerHTML = `Hits: ${hits}`

      if (hits == 15) {
        showHits.innerHTML = `Hits: ${hits} 🤟😎`
        showTime.innerHTML = `Great 🎉 you got it in ${seconds} seconds!`
        showMovements.innerHTML = `Movements: ${movements} 👏`
      }

    } else {
      //show and cover again
      setTimeout(() => {
        card1.innerHTML = ' '
        card2.innerHTML = ' '
        card1.disabled = false;
        card2.disabled = false;
        uncoverCards = 0;
      }, 800)
      {
        showHits.innerHTML
      }
    }
  }
}


