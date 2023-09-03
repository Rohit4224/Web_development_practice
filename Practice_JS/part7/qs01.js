const arrayAverage = (arr) => {
    let temp = 0;
    // console.log(arr);
    for (let i = 0; i < arr.length; i++){
        temp += arr[i];
    }
    // console.log(temp);
    temp = temp/arr.length;
    return temp;
}

console.log(arrayAverage([1,2,0]));