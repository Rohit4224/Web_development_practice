let gameSeq = [];
let userSeq = [];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");
let buttons = ["red", "yellow", "green", "purple"]; 

document.addEventListener("keypress", function(event) {
    // console.dir(event);
    if (start == false && event.key == "r")
    {
        console.log("Game is started");
        start = true;
        setTimeout (levelUp, 500);
        //levelUp();
        let btns = document.querySelectorAll(".btn");
        for (let btn of btns)
        {
            btn.addEventListener("click", buttonPressed);
        // console.log(btn.classList[1]);
        }
    }
})

function levelUp () {
    level++;
    h2.innerText = `Level ${level}`;
    h2.classList.add("text_flash");
    setTimeout(function() {
        h2.classList.remove("text_flash");
    }, 150);
    if (level == 3)
        h2.innerText = `Level ${level} "Narendra very goood!!!!"`;
    if (level == 5)
         h2.innerText = `Level ${level} "NON MOLLARE MAI"`;
    if (level == 8)
        h2.innerText = `Level ${level} "MAAA... CHE bravoo non ridere"`;
    let color = buttons[randomIdx()];
    console.log("this is color for gameFlash ", color);
    gameSeq.push(color);
    console.log(gameSeq);
    let btn = document.querySelector(`.${color}`);
    gameFlash(btn);
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 150);
}

function userFlash(btn) {
    btn.classList.add("flash_user");
    setTimeout(function () {
        btn.classList.remove("flash_user");
    }, 150);
}

function randomIdx() {
    let random_index = Math.floor(Math.random() * 4);
    console.log("this is Index " + random_index);
    return (random_index);
}

function check_answer(idx) {
    if (userSeq[idx] === gameSeq[idx]){
        console.log("same value");
        console.log("this is idx ", idx);
        if (userSeq.length == gameSeq.length)
        {
            setTimeout(levelUp, 1000);
            userSeq.length = 0;
        }
    }
    else {
        console.log("not the same");
        h2.innerText = `Game Over!! Passed:${level}. Press "r" to play again`;
        let body = document.querySelector("body");
        body.classList.add("red_flash");
        setTimeout(function () {
            body.classList.remove("red_flash");
        }, 150);
        reset();
    }
}

function buttonPressed () {
    userFlash(this);
    console.log(this);
    console.log(`${this.classList[1]} is pressed`);
    userSeq.push(this.classList[1]);
    console.log("useSeq is : ", userSeq);
    Index_to_check = userSeq.length - 1;
    check_answer(Index_to_check);
}

function reset () {
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}