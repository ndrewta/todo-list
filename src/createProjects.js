import ps from "./pubsub";

export default function createProjects() {
  let projects = [];

  class Project {
    constructor(title, date, priority, description, itemList) {
      this.title = title;
      this.date = date;
      this.priority = priority;
      this.description = description;
      this.itemList = itemList;
    }
  }

  function sortDates() {
    if (!projects.length <= 0) {
      projects.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    projects.reverse();
  }

  function submit({ formElem }) {
    const data = new FormData(formElem);
    const title = data.get("title");
    const date = data.get("date");
    const priority = data.get("priority");
    const description = data.get("description");
    const itemList = data
      .getAll("items")
      .map((item) => ({ value: item, completed: false }));
    const project = new Project(title, date, priority, description, itemList);
    projects.push(project);
    ps.publish("show-all", projects);
    formElem.reset();
    // Store to local storage
    const json = JSON.stringify(projects);
    const key = "projects";
    const value = json;
    const obj = { key, value };
    ps.publish("store-local", obj);
  }

  function publishUpdatedArray() {
    // Publish updated projects array
    sortDates();
    ps.publish("projects-update", projects);
  }

  function setLocalStorage(value) {
    projects = value;
    ps.publish("show-all", projects);
  }

  ps.subscribe("projects-request", publishUpdatedArray);
  ps.subscribe("set-local", setLocalStorage);
  ps.subscribe("submit-form", submit);
  return { projects };
}
