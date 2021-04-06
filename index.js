const drumBtns = document.querySelectorAll(".drum");

for (let i = 0; i < drumBtns.length; i++) {
    drumBtns[i].addEventListener("click", function() {
        this.style.color = "white";
    })
}

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();