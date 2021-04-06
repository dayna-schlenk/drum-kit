// document.querySelectorAll("button").addEventListener("click", function() {
//     alert("I got clicked!");
// })

const drumBtns = document.querySelectorAll(".drum");

for (let i = 0; i < drumBtns.length; i++) {
    drumBtns[i].addEventListener("click", function() {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    })
}