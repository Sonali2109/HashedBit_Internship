const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
  ];
  
  function calculateAverages() {
    const averages = students.map(student => {
      const totalScore = student.scores.reduce((sum, score) => sum + score, 0);
      const average = totalScore / student.scores.length;
      return { name: student.name, average: average };
    });
  
    displayResults(averages);
  }
  
  function displayResults(averages) {
    const resultList = document.getElementById("resultList");
    resultList.innerHTML = ''; // Clear previous results
  
    averages.forEach(student => {
      const li = document.createElement("li");
      li.textContent = `${student.name}: ${student.average.toFixed(2)}`;
      resultList.appendChild(li);
    });
  }
  