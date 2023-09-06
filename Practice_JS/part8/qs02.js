let arr = [37, 37, 37, 37, 19, 19, 5, 0, -5, 95];

// const addFive = arr.map(function(num){
    // return num +5;
// })

const addFive = arr.map((num, i) => {
    return {
    Index:  i,
    Number:  num+5}
})

console.log(addFive);