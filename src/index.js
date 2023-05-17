import "./style.css";
import layoutInit from "./layout";
import formInit from "./form";
import createProjects from "./createProjects";
import displayProjects from "./displayProjects";
import ps from "./pubsub";
import setLocalStorage from "./localStorage";

layoutInit();
formInit("body");
createProjects();
displayProjects("#content");
setLocalStorage();

const nav = document.querySelector("#nav");
const testBtn = document.createElement("button");
testBtn.textContent = "TEST";
nav.appendChild(testBtn);
let testCounter = 0;
testBtn.addEventListener("click", () => {
  ps.publish("test", testCounter);
  testCounter += 1;
});

const storageBtn = document.createElement("button");
storageBtn.textContent = "Check Storage";
nav.appendChild(storageBtn);

storageBtn.addEventListener("click", () => {
  const key = localStorage.key(0);
  const json = localStorage.getItem(key);
  const obj = JSON.parse(json);
  console.log(obj);
});

const storageClearBtn = document.createElement("button");
storageClearBtn.textContent = "storageClearBtn";
nav.appendChild(storageClearBtn);

storageClearBtn.addEventListener("click", () => {
  localStorage.clear();
});
