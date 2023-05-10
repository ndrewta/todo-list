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
    const itemList = data
      .getAll("items")
      .map((item) => ({ value: item, completed: false }));
    const project = new Project(title, date, priority, description, itemList);
    console.log(project);
    projects.push(project);
    ps.publish("create-cover", projects);
    ps.publish("clear-form", null);
    formElem.reset();
  }

  function publishUpdatedArray() {
    // Publish updated projects array
    ps.publish("projects-update", projects);
  }

  function testSubmit(x) {
    const title = `Test ${x}`;
    const date = "12/12/2000";
    const priority = "high";
    const description = "asdasdasdasd";
    const itemList = ["x1", "x2", "x3"].map((item) => ({
      value: item,
      completed: false,
    }));
    const project = new Project(title, date, priority, description, itemList);

    projects.push(project);
    ps.publish("create-cover", projects);
  }

  ps.subscribe("projects-request", publishUpdatedArray);
  ps.subscribe("submit-form", submit);
  ps.subscribe("test", testSubmit);
  return { projects };
}
