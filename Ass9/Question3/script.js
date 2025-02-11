function modifyArray(arr) {
    arr.push("New Element");
    arr.pop();
    return arr;
}
console.log("Modified array:", modifyArray([1, 2, 3]));