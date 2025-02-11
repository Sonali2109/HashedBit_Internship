document.getElementById("colorchange").addEventListener("click", function () {
    let color = document.getElementById("colorbox").value;
    document.getElementById("text-container").style.color = color;
});

document.getElementById("fontsize").addEventListener("input", function () {
    let fontSize = this.value + "px";
    document.getElementById("text-container").style.fontSize = fontSize;
});

document.getElementById("italic").addEventListener("click", function () {
    let text = document.getElementById("text-container");
    text.style.fontStyle = text.style.fontStyle === "italic" ? "normal" : "italic";
});

document.getElementById("underline").addEventListener("click", function () {
    let text = document.getElementById("text-container");
    text.style.textDecoration = text.style.textDecoration === "underline" ? "none" : "underline";
});

document.getElementById("bold").addEventListener("click", function () {
    let text = document.getElementById("text-container");
    text.style.fontWeight = text.style.fontWeight === "bold" ? "normal" : "bold";
});

document.getElementById("list").addEventListener("change", function () {
    let font = this.value;
    document.getElementById("text-container").style.fontFamily = font;
});

document.getElementById("getstyle").addEventListener("click", function () {
    let text = document.getElementById("text-container");
    let styles = window.getComputedStyle(text);
    
    let cssProps = `
        color: ${styles.color}; 
        font-size: ${styles.fontSize}; 
        font-family: ${styles.fontFamily}; 
        font-style: ${styles.fontStyle}; 
        font-weight: ${styles.fontWeight}; 
        text-decoration: ${styles.textDecorationLine};
    `;

    document.getElementById("css-props").innerText = cssProps.trim();
});
