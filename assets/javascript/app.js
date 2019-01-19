//inital variables
var card = $("#quiz-area");

//This array holds the questions that will protogate the quiz area
var questions = [
  {
    question: "Inside which element is Javascript placed?",
    answers: [
      "&lt;javacript&gt;",
      "&lt;script&gt;",
      "&lt;js&gt;",
      "&lt;scripting&gt;"
    ],
    correctAnswer: "<script>"
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      "function myFunction()",
      "function:myFunction()",
      "function = myFunction()",
      "function.myFunction()"
    ],
    correctAnswer: "function myFunction"
  },
  {
    question: "In what year was JavaScript released?",
    answers: ["1990", "1992", "1995", "1996"],
    correctAnswer: "1995"
  },
  {
    question: "How do you write an IF statement in JavaScript",
    answers: ["if (i === 4)", "if i = 4", "if i == 4", "if i == 4 then"],
    correctAnswer: "if (i === 4)"
  }
];

//starts the timer when the "begin" button is clicked
$("#start").click(timer);
$("#start").click(start);

//runs the countDown function every second
var time = 10;
var IntervalID;

//runs the countdown function every second
function timer() {
  IntervalID = setInterval(countDown, 1000);
}

//stops the timer from decrimenting
function stop() {
  clearInterval(IntervalID);
}

//decreases the time variable by 1 and updates the timer displayed at the top of the page
function countDown() {
  time--;
  $("#counter-number").text(time);

  if (time === 0) {
    stop();
    $("#sub-title").text("Game Over!");
  }
}

//This function runs when time is up or when the "done" button is pressed.
// Checks the number of correct answers and updates the quiz area
function answerCheck() {
  stop();
  $("#sub-title").text("How did you do?");

  if (
    $("input[name = question-0]:checked").val() == questions[0].correctAnswer
  ) {
    console.log("GG Placeholder");
  } else {
    console.log("wrong Placeholder");
  }
}

// Propogates the quiz area with the questions from the questions array. Also adds the end button and its handler.
function start() {
  $("#sub-wrapper").prepend(
    "<h2 id='sub-title'>Time remaining: <span id='counter-number'> 10 </span> </h2>"
  );
  $("#start").remove();

  for (var i = 0; i < questions.length; i++) {
    card.append("<h2>" + questions[i].question + "<h2>");

    for (var j = 0; j < questions[i].answers.length; j++) {
      card.append(
        "<input id='btn' type='radio' name='question-" +
          i +
          "'value='" +
          questions[i].answers[j] +
          "''>" +
          questions[i].answers[j]
      );
    }
  }
  card.append("<br><br> <button class='text-center' id='done'>done</button>");
  $("#done").click(answerCheck);
}
