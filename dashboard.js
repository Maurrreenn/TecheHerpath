// Check if a name is saved already
let savedName = localStorage.getItem("userName");

// If no saved name, ask the user
if (!savedName) {
    savedName = prompt("Please enter your name:");
    if (savedName && savedName.trim() !== "") {
        localStorage.setItem("userName", savedName.trim());
    } else {
        savedName = "Guest"; // fallback
    }
}

// Inject name into the dashboard
document.getElementById("userName").textContent = savedName;
