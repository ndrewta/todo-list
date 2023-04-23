import "./style.css";
import layoutInit from "./layout";
import formInit from "./form";
import pubSub from "./pubsub";
import createProjects from "./createProjects";

layoutInit();

const ps = pubSub();
const form = formInit("#content");
const cp = createProjects();
form.setForm();
const formElem = document.querySelector("form");
const newProjectBtn = document.getElementById("newProject");

newProjectBtn.addEventListener("click", () => ps.publish("toggle-form", null));
formElem.addEventListener("submit", (e) =>
  ps.publish("submit-form", { e, formElem })
);
ps.subscribe("toggle-form", form.toggleForm);
ps.subscribe("submit-form", cp.submit);
