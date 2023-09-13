const h1 = document.querySelector("h1");

function changeColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${blue})`;

    h1.style.color = color;
}

// Change the color every 1000 milliseconds (1 second)
setInterval(changeColor, 1000);


function savetoDB (_data) {
    return new Promise (function (resolve, reject) {
        let InternetSpeed =Math.floor(Math.random() * 10) + 1;
        if (InternetSpeed > 4) {
            // code what we want to save in database if internet speed is good
            resolve("Success: data is saved");
        }else {
            reject("failure: weak connection");            
        }
    });
}

//sacetoDB returns Promise(which is object)
savetoDB ("Rohit khinchi loves coding").then(function (resolve) {
    console.log("data1 saved");
    console.log("result of promise: ", resolve);
    return savetoDB("hello coders");
}).then(function (resolve){
    console.log("data 2 is saved");
    console.log("result of promise: ", resolve);
}).catch(function(reject) {
    console.log("Promise was rejected");
    console.log("error of promise: ", reject);
})