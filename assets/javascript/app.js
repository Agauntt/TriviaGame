//inital variables
var card = $("#quiz-area");

var questions = [
{
    question: "Inside which element is Javascript placed?",
    answers: ["&lt;javacript&gt; ", "&lt;script&gt;  ", "&lt;js&gt;  ", "&lt;scripting&gt; "],
    correctAnswer: "<script>"
}, 
{
    question: "How do you create a function in JavaScript?",
    answers: ["function myFunction() ", "function:myFunction() ", "function = myFunction() ", "function.myFunction()"],
    correctAnswer: "function myFunction"
},
{
    question: "In what year was JavaScript released?",
    answers: ["1990 ", "1992 ", "1995 ", "1996 "],
    correctAnswer: "1995"
},
{
    question: "How do you write an IF statement in JavaScript",
    answers: ["if (i === 4) ", "if i = 4 ", "if i == 4 ", "if i == 4 then "],
    correctAnswer: "if (i === 4)"
}
];

//runs the countDown function every second
var time = 10
var IntervalID;
function timer() {
    IntervalID = setInterval(countDown, 1000);
}

function stop() {
    clearInterval(IntervalID);
}
//decreases the time variable by 1 and updates the timer displayed at the top of the page
function countDown(){
    time--;
    $("#counter-number").text(time);

    if (time === 0){
       stop();
       $("#sub-title").text("Game Over!")
    }
}


function start(){
    /*timer = setInterval(game.countDown, 1000);*/

    $("#sub-wrapper").prepend("<h2 id='sub-title'>Time remaining: <span id='counter-number'> 10 </span> </h2>");
    $("#start").remove();

    for(var i = 0; i < questions.length; i++){
        card.append("<h2>" + questions[i].question + "<h2>");
        
        for(var j = 0; j < questions[i].answers.length; j++) {
            card.append("<input id='btn' type='radio' name='question-"+ i +
            "'value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
        }
    }
    card.append("<br><br> <button class='text-center'id='done'>done</button>");
}

//starts the timer when the "begin" button is clicked
$("#start").click(timer);
$("#start").click(start);




