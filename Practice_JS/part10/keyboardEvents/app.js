/* let btn = document.querySelector("button");

btn.addEventListener("click", function(event) {
    console.log(event);
    console.log("button clicked");
}) */

let inp = document.querySelector("input");

/* inp.addEventListener("keydown", function () {
    console.log("key was pressed");
}) */

inp.addEventListener("keydown", function (event) {
    console.log(`key ${event.key} is released, code : ${event.code}`)
    if (event.code == "ArrowUp")
        console.log("character moves forward");
    else if (event.code == "ArrowDown")
        console.log("character moves down");    
    else if (event.code == "ArrowLeft")
        console.log("character moves left");
    else if (event.code == "ArrowRight")
        console.log("character moves Right");
    console.log("key was pressed");
})