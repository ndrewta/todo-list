export default function createProjects() {
  let projects = [];

  class Project {
    constructor(title, date, priority) {
      this.title = title;
      this.date = date;
      this.priority = priority;
    }
  }

  function submit({ e, formElem }) {
    e.preventDefault();

    const data = new FormData(formElem);
    const title = data.get("title");
    const date = data.get("date");
    const priority = data.get("priority");

    const project = new Project(title, date, priority);

    projects.push(project);
    console.log(projects);
    formElem.reset();
  }
  return { submit, projects };
}
