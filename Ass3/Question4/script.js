function countCharacters() {
    const inputString = document.getElementById("inputString").value.trim().toLowerCase();
    
    if (inputString.length < 20) {
      alert("Please enter a string with at least 20 characters.");
      return;
    }
  
    let vowels = "aeiou";
    let vowelCount = 0;
    let consonantCount = 0;
  
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
  
      if (/[a-z]/.test(char)) {  // Only consider alphabetic characters
        if (vowels.includes(char)) {
          vowelCount++;
        } else {
          consonantCount++;
        }
      }
    }
  
    document.getElementById("vowelCount").textContent = "Vowels: " + vowelCount;
    document.getElementById("consonantCount").textContent = "Consonants: " + consonantCount;
  }
  