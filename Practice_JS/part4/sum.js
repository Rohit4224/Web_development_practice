let n = 287152;

let temp = n;

/* let j = temp % 10;
console.log(j); */
let sum = 0;
while(temp > 0)
{
    sum = sum + (temp % 10);
    temp = Math.floor(temp / 10);
}
console.log(sum);