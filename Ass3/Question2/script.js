function reverseWords() {
    let str = document.getElementById("originalText").innerText;
    let reversed = str.split(" ").reverse().join(" ");
    document.getElementById("reversedText").innerText = reversed;
}
