const isEven = (n) => {
    if (n%2 == 0)
        return ("it is even");
    else
        return ("it isnot even");
}

// console.log(isEven(2));


const object = {
    message: "Hello World",
    logMessage: function () {
        console.log(this.message);
    }
} ;

// object.logMessage();

// setTimeout(object.logMessage, 2000);
setTimeout(() => {object.logMessage()}, 2000);