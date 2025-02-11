function filterNumbers() {
    const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
    const result = inputArr.filter(num => num > 5);
    document.getElementById("result").textContent = "Numbers greater than 5: " + result.join(", ");
  }
  