function mergeObjects01 (obj1, obj2) {
    return {...obj1, ...obj2};
};

const mergeObjects02 = (obj1, obj2) => ({...obj1, ...obj2});

const mergeObjects = (obj1, obj2) => {
    return {...obj1, ...obj2};
};

console.log(mergeObjects({a:1, b:2},{c:3, d:4}));