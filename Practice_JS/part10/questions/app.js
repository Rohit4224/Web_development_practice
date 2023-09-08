let div = document.querySelector("div");
let inp = document.querySelector("input");
let body = document.querySelector("body");

function saySomething () {
    console.log("HEllo");
}

div.addEventListener("mouseout", saySomething);

inp.addEventListener("keypress", saySomething);
// window.addEventListener("scroll", saySomething);

/* function handleScroll() {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Print "Hello" to the console when scrolling
    console.log('Hello');

    // Update an element to display the scroll position
    const scrollInfo = document.getElementById('scroll-info');
    scrollInfo.textContent = `Scroll Position: ${scrollPosition}px`;
}

// Add a scroll event listener to the window
window.addEventListener('scroll', handleScroll); */
window.addEventListener('load', function () {
    console.log("the page is reloaded");
});

let button = document.querySelector("button");

function getRandomColor () {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return (`rgb(${red}, ${green}, ${blue})`);
}

function RGB () {
    let color = Math.floor(Math.random() * 3) + 1;

    if (color == 1)
        return ("red");
    if (color == 2)
        return ("green");
    if (color == 3)
        return ("blue"); 
}

button.addEventListener("click", function () {
    button.style.backgroundColor = RGB();
    console.dir(button);
    console.dir(button.style.backgroundColor);
    button.innerText = button.style.backgroundColor;
})

let h2 = document.querySelector("h2")
inp.addEventListener("input", function(){
    console.dir(inp);
    h2.innerText = this.value.replace(/[^a-zA-Z\s]/g, '');
    this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
})