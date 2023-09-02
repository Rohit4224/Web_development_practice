const post = {
    username: "@rohit",
    content: "this is my first post",
    likes: 170,
    repost: 15,
    1: 42,
    null: 0.0,
    undefined: 69
};

console.log("null " + post[null]);
console.log('"null" ' + post["null"]);
console.log("1 " + post[1]);


/* let odd = function(n)
{
    console.log(n%2 != 0);
}

console.log(odd(10)); */

