import "./style.css";
import layoutInit from "./layout";
import form from "./form";
import pubSub from "./pubsub";

layoutInit();

const ps = pubSub();
const newForm = form("#content");
const newBtn = document.getElementById("newProject");

newBtn.addEventListener("click", () => ps.publish("toggle-form", null));
ps.subscribe("toggle-form", newForm.updateContent);
