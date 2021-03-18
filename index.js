// document.querySelectorAll("button").addEventListener("click", function() {
//     alert("I got clicked!");
// })

const btns = document.querySelectorAll("button");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        alert("I got clicked!");
    })
}