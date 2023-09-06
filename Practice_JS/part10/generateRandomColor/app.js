let btn = document.querySelector("button");

function generateRandomColor() {
    // console.log("Generate random color");
    let h3 = document.querySelector("h3");
    let div = document.querySelector("div");
    div.style.backgroundColor = getRandomColor();
    h3.innerText = getRandomColor();
    console.log("Color Updated");
}

btn.addEventListener("click", generateRandomColor);

function getRandomColor (){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}