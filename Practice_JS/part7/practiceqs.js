let arrFunc = (n) => n * n * n;

// console.log(arrFunc(2));

function arrFunc01(n) {
  console.log(n * n * n);
}
// console.log(arrFunc01(2));

/* function twoSec() {} */

/* const func = function (ID) {
    clearInterval(ID);
} */

const HW = function (str){
    console.log(str);
}

const ID = setInterval(HW, 2000, "Rohit is Best");

setTimeout(clearInterval, 5000, ID);
