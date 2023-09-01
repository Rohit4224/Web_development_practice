let str = prompt("Enter something");

let idx = 2;

if (str.charCodeAt(idx) >= 97 && str.charCodeAt(idx) <= 122)
    console.log("character is lowercase");
else
    console.log("character is not lowercase");

/* let guess = prompt("Enter the name of the movie");

let fav_movie = "Harry Potter";

while (guess != "Harry Potter" && guess != "Quit" && guess != "quit")
{
    console.log("Wrong movie");
    guess = prompt("Enter the name of the movie");
}
console.log("Gotcha"); */