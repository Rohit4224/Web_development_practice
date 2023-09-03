const sum = a => Math.abs(a-50);

console.log(sum(2));

let ID = setInterval(()=>{
    console.log("best");
}, 2000);

console.log(`Rohit is`);

setTimeout(()=>{
    clearInterval(ID);
}, 5000);