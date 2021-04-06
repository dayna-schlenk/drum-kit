// document.querySelectorAll("button").addEventListener("click", function() {
//     alert("I got clicked!");
// })

const drumBtns = document.querySelectorAll(".drum");

for (let i = 0; i < drumBtns.length; i++) {
    drumBtns[i].addEventListener("click", function() {
        console.log("I got clicked!");
    })
}