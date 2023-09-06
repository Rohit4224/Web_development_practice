const strs = ["ROhit", "Celso", "Fabio", "PEppe", "Baffo"];

const new_str1= strs.map(function(str){
    return str.toUpperCase();
})

const new_str = strs.map((str) => str.toUpperCase());

console.log(new_str);