var score = 0;
var timeRemain = 60;
var firstBox;
var secondBox;
var thirtBox;
var forthBox;
var question;

function start() {
  if (timeRemain === 60) {
    document.getElementById("timeRemaining").style.display = "block";
    generateNewQuestion();
    document.getElementById("button").innerHTML = "Reset Game";
    var timer = setInterval(showTimer, 1000);
    function showTimer() {
      document.getElementById("time").innerHTML = timeRemain;
      timeRemain--;
      if (timeRemain < 0) {
        document.getElementById("gameOver").style.display = "block";
        document.getElementById("gameOver").innerHTML =
          "<p>game over!</p><p>Your score is </p>" + "";
        clearInterval(timer);
      }
    }
  } else {
    timeRemain = 60;
    score = 0;
  }

  function generateNewQuestion() {
    var array = [1, 2, 3, 4];
    var correctAnswerBox = Math.floor(Math.random() * 4 + 1);

    var number1 = Math.floor(Math.random() * 9 + 1);
    var number2 = Math.floor(Math.random() * 9 + 1);
    var answer = number1 * number2;
    document.getElementById("number1").innerHTML = number1 + "X";
    document.getElementById("number2").innerHTML = number2;
    for (var i = 0; i < 4; i++) {
      if (array[i] === correctAnswerBox) break;
    }
    array.splice(i, 1);
    document.getElementById("box" + correctAnswerBox).innerHTML = answer;
    document.getElementById("box" + array[0]).innerHTML = Math.floor(
      Math.random() * Math.random() * 100 + 10
    );
    document.getElementById("box" + array[1]).innerHTML = Math.floor(
      Math.random() * Math.random() * 100 + 10
    );
    document.getElementById("box" + array[2]).innerHTML = Math.floor(
      Math.random() * Math.random() * 100 + 10
    );
}
}

// if we Click on start/reset button
//  if we playing?
// yes --> Reload page
//No -->
//set score to 0
//Reduce time by one sec in loops
// if time left ?
// yes --> continue the loop
// no --> gameover
//Generate new Q&A
//Change button to reset button

// if we clikc on answer box
// if we playing?
// no --> no action
// yes --> if the answer is correct??
// no --> show try again message for one sec
//yes -->
//increase score by one
//generate new Q&A
//show correct message one
