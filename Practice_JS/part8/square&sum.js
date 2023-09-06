let arr = [1, 2, 3, 4, 5];

let square = arr.map((num) => num *num);

console.log(square);

let result = square.reduce(function (sum, el){
    return sum +el;
})

result = result/arr.length;
console.log(result);