function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
console.log("Merged object:", mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));