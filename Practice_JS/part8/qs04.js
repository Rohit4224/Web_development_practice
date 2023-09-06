function doubleAndReturnArgs01 (arr, ...args){
    return [
        ...arr, 
        ...args.map((num) => num*2)
    ];
};

const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map(function(num){
        return num*2;
    })
];

console.log(doubleAndReturnArgs([1,2,3], 4, 5, 6, 7));