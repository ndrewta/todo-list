import "./style.css";
import layoutInit from "./layout";
import formInit from "./form";
import createProjects from "./createProjects";
import displayProjects from "./displayProjects";

layoutInit();
formInit("body");
createProjects();
displayProjects("#content");
