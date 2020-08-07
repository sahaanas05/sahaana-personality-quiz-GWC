//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;

var result1Score = 0;
var result2Score = 0;
var result3Score = 0;
var result4Score = 0;

//grab result via DOM
var result = document.getElementById("result");
//element id for result image
var resultImg = document.getElementById("result-img");

//#TODO: Use the DOM to create variables for the first quiz question.
//question1
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

//question 2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

//question 3
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

//question 4
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

//#TODO: Add Event Listeners to your answer choice variables.
//Switch 2 and 4
q1a1.addEventListener("click", result1);
q1a2.addEventListener("click", result4);
q1a3.addEventListener("click", result3);
q1a4.addEventListener("click", result2);

//switch 3 and 1
q2a1.addEventListener("click", result3);
q2a2.addEventListener("click", result2);
q2a3.addEventListener("click", result1);
q2a4.addEventListener("click", result4);

//switch 1 and 2
q3a1.addEventListener("click", result2);
q3a2.addEventListener("click", result1);
q3a3.addEventListener("click", result3);
q3a4.addEventListener("click", result4);

//switch 3 and 4
q4a1.addEventListener("click", result1);
q4a2.addEventListener("click", result2);
q4a3.addEventListener("click", result4);
q4a4.addEventListener("click", result3);

//#TODO: Define quiz functions here
function result1() {
  result1Score += 1;
  questionCount += 1;
  if (questionCount >= 4) {
    updateResult();
  }
}

function result2() {
  result2Score += 1;
  questionCount += 1;
  if (questionCount >= 4) {
    updateResult();
  }
}

function result3() {
  result3Score += 1;
  questionCount += 1;
  if (questionCount >= 4) {
    updateResult();
  }
}

function result4() {
  result4Score += 1;
  questionCount += 1;
  if (questionCount >= 4) {
    updateResult();
  }
}
function updateResult() {
  //result1
  if (result1Score >= 3) {
    result.innerHTML =
      "Earth: You are very goal oriented and patient. You enjoy nature and more than anything, love to live in the moment.";
    //earth
    resultImg.innerHTML = "<img src = 'https://cdn.glitch.com/e2e7e364-37c8-4bd9-84e4-00c1dfdcb3f4%2FScreen%20Shot%202020-08-06%20at%207.29.33%20PM.png?v=1596756610683'>";
  }

  //result2
  else if (result2Score >= 3) {
    result.innerHTML =
      "Air: You are very social and love meeting new people. You love to share your thoughts and enjoy other's company.";
    //air
    resultImg.innerHTML = "<img src = 'https://cdn.glitch.com/e2e7e364-37c8-4bd9-84e4-00c1dfdcb3f4%2FScreen%20Shot%202020-08-06%20at%207.29.39%20PM.png?v=1596756611823'>";
  }

  //result3
  else if (result3Score >= 3) {
    result.innerHTML = 
      "Water: You are intuitive and empathetic. You have many deep feelings and may be very private person ";
    //water
    resultImg.innerHTML = "<img src = 'https://cdn.glitch.com/e2e7e364-37c8-4bd9-84e4-00c1dfdcb3f4%2FScreen%20Shot%202020-08-06%20at%207.29.44%20PM.png?v=1596756612678'>";
  }

  //result4
  else if (result4Score >= 3) {
    result.innerHTML = 
      "Fire: You are adventurous and love exploring. You are aslo very enthusiastic and love some action in your life.";
    //fire 
    resultImg.innerHTML = "<img src = 'https://cdn.glitch.com/e2e7e364-37c8-4bd9-84e4-00c1dfdcb3f4%2FScreen%20Shot%202020-08-06%20at%207.29.28%20PM.png?v=1596756609614'>";
  }

  //last result
  else {
    result.innerHTML = 
      "All: You are well rounded and don't like to confine yourself to a label. You think outside the box and are a leader.";
    //All
    resultImg.innerHTML = "<img src = 'https://cdn.glitch.com/e2e7e364-37c8-4bd9-84e4-00c1dfdcb3f4%2FScreen%20Shot%202020-08-06%20at%207.37.43%20PM.png?v=1596757073762'>";
  }
}

//Code for the restart button
var restart = document.getElementById("restartButton");
restart.addEventListener("click", restartB);

function restartB() {
  result.innerHTML = "Your result is...";
  questionCount = 0;
  result1Score = 0;
  result2Score = 0;
  result3Score = 0;
  result4Score = 0;
  resultImg.innerHTML =
    "<br>"
  enableQuestions();
}

function disableQ1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
}

q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);
q1a4.addEventListener("click", disableQ1);

function disableQ2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
}

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);
q2a4.addEventListener("click", disableQ2);

function disableQ3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
}

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);
q3a4.addEventListener("click", disableQ3);

function disableQ4() {
  q4a1.disabled = true;
  q4a2.disabled = true;
  q4a3.disabled = true;
  q4a4.disabled = true;
}

q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);
q4a3.addEventListener("click", disableQ4);
q4a4.addEventListener("click", disableQ4);

function enableQuestions() {
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
  q4a1.disabled = false;
  q4a2.disabled = false;
  q4a3.disabled = false;
  q4a4.disabled = false;
}
