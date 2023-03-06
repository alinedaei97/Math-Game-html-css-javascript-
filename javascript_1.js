var playing = false;
var score;
var timer;
var timeRemaining;
var correctAnswer;

document.getElementById("startreset").onclick = function () {
  // if we Click on start/reset button

  if (playing === true) {
    //  if we playing? --> yes

    location.reload();
  } else {
    // if we not  playing

    //Change mode to playing

    playing = true;

    //set score to 0

    score = 0;
    document.getElementById("scoreValue").innerHTML = score;

    //Show count down box

    show("timeRemaining");
    timeRemaining = 60;

    document.getElementById("time").innerHTML = timeRemaining;

    //Hide game over box

    hide("gameOver");

    //Change button to reset button

    document.getElementById("startreset").innerHTML = "Reset Game";

    //Start countdown

    startCountDown();

    //Generate Q&A

    generateQA();
  }
};
for (var i = 1; i < 5; i++) {
  // if we click on answer box

  document.getElementById("box" + i).onclick = function () {
    // if we playing?

    if (playing === true) {
      //if the answer is correct??

      if (this.innerHTML == correctAnswer) {
        //increase score by one

        score++;
        document.getElementById("scoreValue").innerHTML = score;

        hide("wrong");

        //show correct message one sec

        show("correct");
        setTimeout(function () {
          hide("correct");
        }, 1000);

        //generate new Q&A

        generateQA();
      } else {
        hide("correct");

        //show try again message for one sec

        show("wrong");
        setTimeout(function () {
          hide("wrong");
        }, 1000);
      }
    }
  };
}

function startCountDown() {
  timer = setInterval(timeFunc, 1000);
}

// timeFunc

function timeFunc() {
  timeRemaining -= 1;

  document.getElementById("time").innerHTML = timeRemaining;

  if (timeRemaining === 0) {
    stopCountDown();
    show("gameOver");

    document.getElementById("gameOver").innerHTML =
      "<p>game over!</p><p>Your score is " + score + ".</p>";
    hide("timeRemaining");
    hide("correct");
    hide("wrong");
    playing = false;

    document.getElementById("startreset").innerHTML = "Start Game";
  }
}

//Stop countdown

function stopCountDown() {
  clearInterval(timer);
}

//Hide an element

function hide(Id) {
  document.getElementById(Id).style.display = "none";
}

//Show an element

function show(Id) {
  document.getElementById(Id).style.display = "block";
}

//Generate question and multiple answers

function generateQA() {
  var x = Math.round(Math.random() * 9 + 1);
  var y = Math.round(Math.random() * 9 + 1);
  correctAnswer = x * y;

  document.getElementById("multipleBox").innerHTML = x + "X" + y;

  var correctPosition = Math.round(Math.random() * 3 + 1);
  document.getElementById("box" + correctPosition).innerHTML = correctAnswer;

  var answers = [correctAnswer];

  for (var i = 1; i < 5; i++) {
    if (i !== correctPosition) {
      do {
        var wrongAnswer =
          Math.round(Math.random() * 9 + 1) * Math.round(Math.random() * 9 + 1);
      } while (answers.indexOf(wrongAnswer) > -1);
      answers.push(wrongAnswer);
      document.getElementById("box" + i).innerHTML = wrongAnswer;
    }
  }
}
