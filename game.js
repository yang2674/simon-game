var buttonColors = ['red', 'blue', 'green', 'yellow']
var gamePattern = []
var userClickedPattern = []
var level = 0;
var started = false;

//detect keboard press to begin game
$(document).keypress(function () {
    if (!started) {
        //displays level #
        $('#level-title').text(`Level ${level}`);
        nextSequence();
        //start game
        started = true;
    }
});


//check which button was pressed //handler function
$('.btn').click(function () {
    //stores id of button that was clicked
    var userChosenColor = $(this).attr('id');
    //pushes id into array
    userClickedPattern.push(userChosenColor);
    //check what the array contains
    playSound(userChosenColor);
    animatePress(userChosenColor);
});

//create random color, animate, and play sound
function nextSequence() {
    //update level
    level++;
    $('#level-title').text(`Level ${level}`);

    //select random color, push it into gamePattern
    var randomNumber = ~~(Math.random() * 4); // 0-3
    var randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor);

    //animate flash based on random color
    $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
    
    //play sound based on random color
    playSound(randomChosenColor);
}


//plays sounds for colors
function playSound(name) {
    //play sound based on color name  
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

//animates when button is pressed
function animatePress(currentColor) {
    //adds pressed class
    $(`#${currentColor}`).addClass('pressed');
    //removes pressed class AFTER delay
    setTimeout(function () {
        $(`#${currentColor}`).removeClass('pressed');
    }, 100);
}