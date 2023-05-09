import "./style.css";
import layoutInit from "./layout";
import formInit from "./form";
import createProjects from "./createProjects";
import displayProjects from "./displayProjects";
import ps from "./pubsub";

layoutInit();
formInit("body");
createProjects();
displayProjects("#content");

const nav = document.querySelector("#nav");
const testBtn = document.createElement("button");
testBtn.textContent = "TEST";
nav.appendChild(testBtn);
let testCounter = 0;
testBtn.addEventListener("click", () => {
  ps.publish("test", testCounter);
  testCounter += 1;
});
