var numberOfDrumButtons = $(".drum").length;

// Function to play sound
function makeSound(key){
    key = key.toLowerCase();
    switch(key){
        case "a":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "d":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "f":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(this.innerHTML);
    }

}

// Function to AnimateButtons
function buttonAnimation(currentKey) {
    var activeButton = $("." + currentKey);
    activeButton.addClass("pressed");
    activeButton.delay(100).queue(function(next) {
        $(this).removeClass("pressed");
        next();
    });
}

// function buttonAnimation(currentKey){
//     var activeButton = document.querySelector("."+currentKey);
//     activeButton.classList.add("pressed");
//     setTimeout(function(){
//         activeButton.classList.remove("pressed");
//     }, 100);
// }

//Detecting Button Press
$(".drum").on("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML); 
    buttonAnimation(buttonInnerHTML);
});


//Detecting Keypress
$(document).on("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
