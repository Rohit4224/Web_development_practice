let obj = document.getElementById("mainImg")

// console.dir(obj.src);

let classObj = document.getElementsByClassName("oldImg");
// console.dir(classObj);

for (clas of classObj)
    clas.src = obj.src;

let para1 = document.querySelector('h1');

// console.dir(para1);

let colorBxes = document.querySelectorAll('.boxLink')

for (color of colorBxes)
    color.style.color = 'yellow';
// console.dir(color[0]);

/* ------------------------------------------------------------------------------------------- */

let para = document.createElement("p");

para.innerText = "Hey I am red";
para.style.color = "red";

let bdy = document.querySelector("body");

bdy.append(para);

let h3 = document.createElement("h3");
h3.innerText = "I am a blue h3";

h3.style.color = "blue"

bdy.append(h3);

let div = document.createElement("div");

div.style.backgroundColor = "pink";

div.style.borderColor = "black";
div.style.borderStyle = "solid";

let h1 =  document.createElement("h1");
h1.innerText = "I am in Div";

div.appendChild(h1);

let p = document.createElement("p");
p.innerText = "ME TOO";

div.append(p);

bdy.append(div);

/* --------------------------------------------------------------------------- */

let input = document.createElement("input");
let button = document.createElement("button");

button.innerText = "Click me";

bdy.appendChild(input);
bdy.appendChild(button);

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");


document.querySelector("#btn").classList.add("btnStyle");

// let h1_2 = ;
// document.createElement("h1").innerText = "DOM Practice";
// bdy.prepend(h1_2);

// bdy.prepend(document.createElement("h1").innerText = "DOM Practice")

let h1_2 = document.createElement("h1");
h1_2.innerHTML = "<u>DOM PRACTICE</u>";
bdy.prepend(h1_2);
h1_2.classList.add("colorPurple");

let p_2 = document.createElement("p");
p_2.innerHTML = "Rohit Khinchi is doing his <b>best</b>";
bdy.insertAdjacentElement("afterend", p_2);

button.onclick = function ()
    {
        console.log("Hello");
    }
button.onmouseenter =  () => console.log("You are here");

function saybye () {
    console.log("BYE BYE");
}

function sayCazzo()
{
    console.log("double click cazzo")
}

button.addEventListener("click", saybye);
button.addEventListener("dblclick", sayCazzo);