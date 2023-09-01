let arr = [5, 42, 15, 12, 31, 25, 10, 40, 41, 0, 1, 55];

let i = 0;
let largest = arr[0];
while (i < arr.length)
{
    if (largest <= arr[i])
        largest = arr[i];
    i++;
}
console.log(largest);