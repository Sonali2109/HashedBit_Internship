function correctfn() {
    const sentence = document.getElementById("inputString").value.trim();
    const wrongWord = document.getElementById("wrongWord").value.trim();
    const correctWord = document.getElementById("correctWord").value.trim();
  
    if (!sentence || !wrongWord || !correctWord) {
      alert("Please fill out all fields.");
      return;
    }
  
    const updatedSentence = sentence.replace(new RegExp("\\b" + wrongWord + "\\b", 'g'), correctWord);
    
    document.getElementById("outputString").textContent = updatedSentence;
  }
  