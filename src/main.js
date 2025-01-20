import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cadvres = [
  "./pictures/cadvre (2).jpg",
  "./pictures/cadvre (3).jpg",
  "./pictures/cadvre (4).jpg",
  "./pictures/cadvre (5).jpg",
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

const houses = [
  "./houseDrawings/housex.jpg",
  "./houseDrawings/housex.jpg",
  "./houseDrawings/housex.jpg",
  "./houseDrawings/housex.jpg",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      Cadavre Exquis: Conserving Optimism

        <div class="three-model">
        
         <img src="./file.jpg" id="model1" alt="Model 1 Image" />
        </div>
        <div id="images-description">
          <div id="images">
            ${cadvres
              .map(
                (cadvre, index) => `<img src="${cadvre}" alt="cadvre${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">As we venture into the unknown of tomorrow we find ourselves in a world of increasing conflict, violence,brutality, polarization and callousness. Today’s world is riddled with more crises, more tragedies and more corruption than one could ever comprehend.  Yet, while we recognize the connections of our current environment to historical parallels that, in their time,  foreshadowed outbreaks of devastation, we move towards this daunting future with inertia. We recognize it, we apprehensively know it’s coming, yet, we remain immobile when it comes to preventing our regression to yesterday's collapse. The problem is, we believe it’s irreversible. Bombarded with devastating stories and realities we are drained of our hope and pessimistic mindsets gain control. Pessimism, becoming a missile we are subconsciously aiming at our future selves. In our crumbling contemporary world, optimism is fleeting. The ability to face hardships and overcome them  through finding beauty and gratitude nurtures and conserves  our capacity for hope. Yet the more dire our future appears, this ability for optimism dwindles alongside any chance of hope. In this tumultuous period, it is of utmost importance that optimism is conserved. We can regain and foster optimism by continuing  to discover elements of the world  that give our lives value, seek the pleasing, find joy and curate hope with the beauty that, while concealed, still remains in our lives and in our futures. The resilience of nature, the aesthetic and beauty of the built environment and the charm of the remaining vibrance in our world must provide a solace of hope, a source of joy and gratitude that when recognized morphs pessimism into optimism. When our ability to conserve optimism and generate hope is lost, history will repeat itself, and the future will collapse. Therefore, despite the bleak regression to doom and violence that is the current trajectory of our future, we must harness optimism, a skill that is critical in redefining a different tomorrow. 

</h4>
        </div>
      </div>

      ${/* Model 2 commented out 
      <div id="project-row">
      Model 2
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>
*/ ""}

${/* Model 3 commented out       
<div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${houses
              .map(
                (house, index) => `<img src="${house}" alt="house${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
      */ ""}
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
{/* Model 1 commented out 
createThreeScene("#model1", "/3DModels/project1/cube.obj");
*/ ""}
{/* Model 2 commented out 
createThreeScene("#model2", "/3DModels/project2/tree.obj");
*/ ""}
{/* Model 3 commented out 
createThreeScene("#model3", "/3DModels/project3/cottage.obj");
*/ ""}
