let arr = [7, 9, 1, 0, -2];

let n = 2;

let ans = arr.slice(arr.length - n);
console.log(ans);
console.log(arr);

let splicd = arr.splice(1, 2, "Rohit", "Khinchi");
console.log(arr);
console.log(splicd);

//let splce = 