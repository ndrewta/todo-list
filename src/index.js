import "./style.css";
import layoutInit from "./layout";
import formInit from "./form";
import createProjects from "./createProjects";
import displayProjects from "./displayProjects";
import setLocalStorage from "./localStorage";

layoutInit();
formInit("#content");
createProjects();
displayProjects("#content");
setLocalStorage();
