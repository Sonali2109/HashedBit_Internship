//Write your code here
function createDiv(width, height, text) {
    let container = document.getElementById("container");
    
    let newDiv = document.createElement("div");
    newDiv.style.width = width + "px";
    newDiv.style.height = height + "px";
    newDiv.textContent = text;

    container.appendChild(newDiv);
}
// Do not change this code
Window.createDiv = createDiv;