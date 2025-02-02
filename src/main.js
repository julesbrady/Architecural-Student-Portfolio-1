// Import necessary styles and modules
import "./style.css";
import data from "./data.json";
import { createThreeScene } from "./threeScene";

// Image paths for different models
const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

const houses = [
  "./houseDrawings/house1.jpg",
  "./houseDrawings/house2.jpg",
  "./houseDrawings/house3.jpg",
  "./houseDrawings/house4.jpg",
];

// Ensure DOM loads before executing script
document.addEventListener("DOMContentLoaded", function () {
  // Select the buttons
  const firstAssignmentBtn = document.querySelector(".project-btn[href='#first-assignment']");
  const secondAssignmentBtn = document.querySelector(".project-btn[href='#second-assignment']");

  // Select the sections
  const firstAssignment = document.getElementById("first-assignment");
  const secondAssignment = document.getElementById("second-assignment");

  // Ensure buttons exist before adding event listeners
  if (firstAssignmentBtn && firstAssignment) {
    firstAssignmentBtn.addEventListener("click", function (e) {
      e.preventDefault();
      firstAssignment.classList.add("show"); // Reveal P01
      firstAssignment.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (secondAssignmentBtn && secondAssignment) {
    secondAssignmentBtn.addEventListener("click", function (e) {
      e.preventDefault();
      secondAssignment.classList.add("show"); // Reveal P02
      secondAssignment.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Populate images dynamically
  const projectContainer = document.getElementById("projects");
  if (projectContainer) {
    projectContainer.innerHTML = `
      <section id="p01">
        <h2>P01 Cadavre Exquis</h2>
        <div class="image-links">
          ${data.cadaves
            .map(
              (cadavre, index) =>
                `<a href="${cadavre}" target="_blank"><img src="${cadavre}" alt="cadavre ${index + 1}" /></a>`
            )
            .join("")}
        </div>
        <p>${data.p01Description}</p>
      </section>

      <section id="p02">
        <h2>P02 Inter (Operability)</h2>
        <div class="project">
          <h3>3D Models</h3>
          <div id="torus">
            <h4>Torus Model</h4>
            <canvas id="torus-canvas"></canvas>
            <div class="image-links">
              ${data.torusCharts
                .map(
                  (chart, index) =>
                    `<a href="${chart}" target="_blank"><img src="${chart}" alt="torus chart ${index + 1}" /></a>`
                )
                .join("")}
            </div>
          </div>

          <div id="pavilion">
            <h4>Pavilion Model</h4>
            <canvas id="pavilion-canvas"></canvas>
            <div class="image-links">
              ${data.pavilionCharts
                .map(
                  (chart, index) =>
                    `<a href="${chart}" target="_blank"><img src="${chart}" alt="pavilion chart ${index + 1}" /></a>`
                )
                .join("")}
            </div>
          </div>

          <div id="piranha">
            <h4>Piranha Plant Model</h4>
            <canvas id="piranha-canvas"></canvas>
            <div class="image-links">
              ${data.piranhaPhotos
                .map(
                  (photo, index) =>
                    `<a href="${photo}" target="_blank"><img src="${photo}" alt="piranha photo ${index + 1}" /></a>`
                )
                .join("")}
            </div>
          </div>
        </div>
        <p>${data.p02Description}</p>
      </section>
    `;
  }
});
