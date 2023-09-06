function ChangeColor() {
    console.dir(this);
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}

document.querySelector("button").addEventListener("click", ChangeColor)
document.querySelector("h1").addEventListener("click", ChangeColor)
document.querySelector("h3").addEventListener("click", ChangeColor)
document.querySelector("p").addEventListener("click", ChangeColor)