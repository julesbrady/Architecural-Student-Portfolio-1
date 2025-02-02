// Import necessary styles and modules
import "./style.css";
import { createThreeScene } from "./threeScene";

// Select buttons
const firstAssignmentBtn = document.querySelector(".project-btn[href='p01.html']");
const secondAssignmentBtn = document.querySelector(".project-btn[href='p02.html']");

// Ensure buttons exist before adding event listeners
if (firstAssignmentBtn) {
    firstAssignmentBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "p01.html";
    });
}

if (secondAssignmentBtn) {
    secondAssignmentBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "p02.html";
    });
}

// Initialize Three.js Scenes for each model (if applicable)
createThreeScene("#model1", "./models/torus.obj");
createThreeScene("#model2", "./models/pavilion.obj");
createThreeScene("#model3", "./models/piranha.obj");

console.log("Main.js loaded successfully");
