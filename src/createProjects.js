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

  function submit({ e, formElem }) {
    e.preventDefault();

    const data = new FormData(formElem);
    const title = data.get("title");
    const date = data.get("date");
    const priority = data.get("priority");
    const description = data.get("description");
    const itemList = data.getAll("items");

    const project = new Project(title, date, priority, description, itemList);

    projects.push(project);
    console.log(projects);
    formElem.reset();
  }
  return { submit, projects };
}
