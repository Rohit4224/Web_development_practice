let arr = [1, 45, 85, 96, -5, 0, 65]

let n = 6;

/* let i = arr.indexOf(n);

if (i != -1)
    console.log("number is present in the array");
else
    console.log("number is NOT present in the array");

 */
//console.log(err);

let len = arr.length;
let i = 0;
while (i < len)
{
    if (n == arr[i])
    {
        console.log("number exist");
        break;
    }
    i++;
}
if (i == len){
    // console.log('"' + n + '"' + " number does not exist");
    console.log(`"${n}" number does not exist`);
}    