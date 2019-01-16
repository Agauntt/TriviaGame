//inital variables
var time = 90

//runs the countDown function every second
function timer() {
    setInterval(countDown, 1000);
}

//decreases the time variable by 1 and updates the timer displayed at the top of the page
function countDown(){
    time--;
    $("#timer").text("Time remaining: " + time + " Seconds");
}

//starts the timer when the "begin" button is clicked
$("#startGun").click(timer);

