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

  function submit({ formElem }) {
    const data = new FormData(formElem);
    const title = data.get("title");
    const date = data.get("date");
    const priority = data.get("priority");
    const description = data.get("description");
    const itemList = data.getAll("items");
    const project = new Project(title, date, priority, description, itemList);

    projects.push(project);
    ps.publish("create-cover", projects);
    ps.publish("clear-form", null);
    formElem.reset();
  }

  function publishUpdatedArray() {
    // Publish updated projects array
    ps.publish("projects-update", projects);
  }

  ps.subscribe("projects-request", publishUpdatedArray);
  ps.subscribe("submit-form", submit);
  return { projects };
}
