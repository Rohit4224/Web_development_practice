let arr = [8, 4, 5, 8, 6, 8, 7, 8];

let n = 8;

console.log(arr);
for (i of arr)
{
    if (i === n){
      arr.splice(arr.indexOf(i), 1);
    }  
}
console.log(arr);