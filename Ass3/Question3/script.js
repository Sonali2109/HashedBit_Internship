function modifyString() {
    let stringArray = "INDIA".split(""); 
    stringArray.splice(3, 0, "O", "N", "E", "S"); 
    let modifiedString = stringArray.join(""); 
    document.getElementById("modifiedText").innerText = "Modified: " + modifiedString;
}
