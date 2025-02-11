function reverseString() {
    const inputString = document.getElementById("inputString").value;
    
    if (inputString === "") {
      alert("Please enter a string.");
      return;
    }
  
    const reversed = inputString.split('').reverse().join('');
    
    document.getElementById("reversedString").textContent = "Reversed String: " + reversed;
  }
  