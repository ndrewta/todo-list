import "./style.css";
import layoutInit from "./layout";
import formInit from "./form";
import pubSub from "./pubsub";
import createProjects from "./createProjects";
import displayProjects from "./displayProjects";

layoutInit();

const ps = pubSub();
const form = formInit("#content");
const cp = createProjects();
form.setForm();
const dp = displayProjects("#content");
const formElem = document.querySelector("form");
const newProjectBtn = document.getElementById("newProject");

newProjectBtn.addEventListener("click", () => ps.publish("toggle-form", null));
formElem.addEventListener("submit", (e) =>
  ps.publish("submit-form", { e, formElem })
);
formElem.addEventListener("submit", () =>
  ps.publish("create-cover", cp.projects)
);

formElem.addEventListener("submit", () => ps.publish("toggle-form", null));

ps.subscribe("toggle-form", form.toggleForm);
ps.subscribe("submit-form", cp.submit);
ps.subscribe("submit-form", form.clearListItems);
ps.subscribe("create-cover", dp.createCover);
