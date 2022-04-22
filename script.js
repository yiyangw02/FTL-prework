// Global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
//Global Variables
// var pattern = [7,2,5,7,3,4,6,8,1,5,7,2,5, 3,1, 2, 4]; // secrete pattern of button presses
// random pattern!
const pattern = []
for (let i = 0; i < 13; i++) {
  pattern[i] = Math.floor(Math.random() * 8) + 1;
  
}


var progress = 0; // how far along the player is in guessing the pattern
                  // use progress as an index into the pattern array
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0; // where the user is in the clue sequence


function startGame(){
    progress = 0;
    gamePlaying = true;
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
    gamePlaying = false;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2, 
  5: 411.2,
  6: 213,
  7: 289.6,
  8:313
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
 stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)


function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

//Function for playing a single clue
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
//Function for plaing a sequence of clues
function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

// Win/Loss Notification
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game over. You won!")
}

//Guess
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if (pattern[guessCounter] != btn){
    // Guess was incorrect
    loseGame();
  }
  else{
    //Guess was correct
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
          winGame();
      }
      else{
        progress = progress + 1;
        playClueSequence();
      }  
    }
    else{
      guessCounter = guessCounter + 1;
    }
  }
}


// Button Image
const f1 = () => {
  document.getElementById("p1").style.display ='block';
  document.getElementById("p2").style.display ='none'
  document.getElementById("p3").style.display ='none'
  document.getElementById("p4").style.display ='none'
}

const f2 = () => {
  document.getElementById("p1").style.display ='none'
  document.getElementById("p2").style.display ='block'
  document.getElementById("p3").style.display ='none'
  document.getElementById("p4").style.display ='none'
}

const f3 = () => {
  document.getElementById("p1").style.display ='none'
  document.getElementById("p2").style.display ='none'
  document.getElementById("p3").style.display ='block'
  document.getElementById("p4").style.display ='none'
}

const f4 = () => {
  document.getElementById("p1").style.display ='none'
  document.getElementById("p2").style.display ='none'
  document.getElementById("p3").style.display ='none'
  document.getElementById("p4").style.display ='block'
}