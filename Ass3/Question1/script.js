const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

// Function to display lists
function displayList(id, items) {
    const listElement = document.getElementById(id);
    listElement.innerHTML = ""; // Clear previous content
    items.forEach(state => {
        const li = document.createElement("li");
        li.textContent = state;
        listElement.appendChild(li);
    });
}

// Display original list initially
displayList("originalList", states);

// Filter states on button click
document.getElementById("filterButton").addEventListener("click", function() {
    const filteredStates = states.filter(state => !/^[AEIOUaeiou]/.test(state));
    displayList("filteredList", filteredStates);
});
