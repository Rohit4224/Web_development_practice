let arr = [124561, "fdsff", 5.5, 'C', true]

//console.log(arr[3].charCodeAt(0));
console.log("By property of the array " + arr.length);

let len = 0;
for (i of arr)
{
    if (i){
        console.log(typeof(i) + " " + i);
        len++;
    }
}
console.log("length of array\n" + len);

/* console.log(arr);
let temp = arr[0];
console.log("temp before " + temp);
temp = 0;
console.log(arr);
console.log("temp after " + temp); */

let temp = arr[0];
let len_n = 0;
console.log("temp after " + temp);
while(temp > 0)
{
    temp = Math.floor(temp/10);
    len_n++;
}
console.log("number length " + len_n);