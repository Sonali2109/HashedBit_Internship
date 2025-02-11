const students = {
    student1: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    },
    student2: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    },
    student3: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  };
  
  function calculateAverages() {
    const studentAverages = Object.keys(students).map(studentKey => {
      const scores = Object.values(students[studentKey]);
      const totalScore = scores.reduce((sum, score) => sum + score, 0);
      const average = totalScore / scores.length;
      return { [studentKey]: { average: average.toFixed(2) } };
    });
  
    displayResults(studentAverages);
  }
  
  function displayResults(averages) {
    const resultList = document.getElementById("resultList");
    resultList.innerHTML = ''; // Clear previous results
  
    averages.forEach(student => {
      const studentKey = Object.keys(student)[0];
      const average = student[studentKey].average;
      const li = document.createElement("li");
      li.textContent = `${studentKey}: Average = ${average}`;
      resultList.appendChild(li);
    });
  }
  