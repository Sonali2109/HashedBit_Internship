function countWords() {
    const paragraph = document.getElementById("paragraph").value.trim();
    
    const words = paragraph.split(/\s+/).filter(word => word.length > 0);

    document.getElementById("wordCount").textContent = `Number of words: ${words.length}`;
  }
  