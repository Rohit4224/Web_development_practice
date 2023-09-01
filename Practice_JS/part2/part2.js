/*let num = 1230;

if (num % 2 === 0) {
    console.log("good")
}
else {
    console.log("bad")
}

let firestname = prompt("Enter a Name: ");
let Lastname = prompt("Enter the Last name: ");
let age = prompt("Enter your age: ");

alert(`${firestname} ${Lastname} is ${age} years old.`)

let quarter = 2;

switch (quarter) {
    case 1: {
        console.log("January, February, March")
        break;
    }
    case 2 : {
        console.log("April, May, June")
        break;
    }
    case 3 : {
        console.log("July, August, September")
        break;
    }
    case 4 : {
        console.log("October, November, December")
        break;
    }
    default: {
        console.log("Enter the number from 1 to 4.")
    }
}*/

/*let golden_string = "avfdvd"

if ((golden_string[0] == 'a' || golden_string[0] == 'A') && golden_string.length > 5) {
    console.log("Golden String")
}*/

/*
let first_num = 10;
let second_num = 20;
let third_num = 30;

if (first_num > second_num && first_num > third_num) {
    console.log(first_num);
}
else if (second_num > first_num && second_num > third_num) {
    console.log(second_num);
}
else {
    console.log(third_num);
}*/

/*let num1 = 32;
let num2 = 35432;

if (num1 % 10 == num2 % 10) {
    console.log(`the numbers have the same last digit which is ${num1 % 10}`)
}
else {
    console.log("the numbers do not have the same last digit")
}*/

let num1 = 32;
let num2 = 35432;

num1 % 10 == num2 % 10 ? console.log(`the numbers have the same last digit which is ${num1 % 10}`) : console.log("the numbers do not have the same last digit")
