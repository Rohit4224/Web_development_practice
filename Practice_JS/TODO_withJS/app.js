/*let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");

// let body = document.querySelectorAll("body");
// 
// console.dir(lis[0]);
// console.log(body[0].children);
// let i = 0;
// for(; i < lis.length; i++);
button.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = input.value;
    
    let delbtn = document.createElement("button");
    
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    
    item.appendChild(delbtn);
    ul.appendChild(item);
    input.value = "";
})
let dlt_btns = document.querySelectorAll(".delete");


// console.dir(dlt_btns);

for (btn of dlt_btns)
{
    btn.addEventListener("click", function(){
        let par = this.parentElement;
        console.dir(dlt_btns);
        console.log(par);
    })
} */

let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");

let dlt_btns = document.querySelectorAll(".delete");

  /*   for (btn of dlt_btns) {
        btn.addEventListener("click", function(){
            let par = this.parentElement;
            console.dir(dlt_btns);
            console.log(par);
            par.remove();
        });
    }
 */
button.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = input.value;
    
    let delbtn = document.createElement("button");
    
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    
    item.appendChild(delbtn);
    if (input.value.length != 0)
        ul.appendChild(item);
    input.value = "";

    // Update dlt_btns inside the click event handler to capture dynamically created buttons
    let dlt_btns = document.querySelectorAll(".delete");

    /* for (btn of dlt_btns) {
        btn.addEventListener("click", function(){
            let par = this.parentElement;
            console.dir(dlt_btns);
            console.log(par);
            par.remove();
        });
    } */
});

//EVENT DELEGATION
ul.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        // Click event occurred on a "Delete" button
        let parent = event.target.parentElement;
        console.log(parent);
        // Optionally, you can remove the parent element (the <li>) here
        parent.remove();
    }
});
