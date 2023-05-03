import ps from "./pubsub";

export default function displayProjects(elem) {
  const content = document.querySelector(elem);
  let projects = [];
  function createCover(array, indexNumber) {
    let index = indexNumber;
    let project = array;
    if (index === null || index === undefined) {
      index = array.length - 1;
      project = project[index];
    }

    const cover = document.createElement("div");
    cover.setAttribute("class", "cover");
    cover.setAttribute("id", project.priority);
    cover.setAttribute("data-id", index);

    const titleDiv = document.createElement("div");
    const title = document.createElement("h2");
    const titleData = project.title;
    title.textContent = `Title: ${titleData}`;
    titleDiv.appendChild(title);
    cover.appendChild(titleDiv);

    const dateDiv = document.createElement("div");
    const date = document.createElement("h2");
    const dateData = project.date;
    date.textContent = `Due: ${dateData}`;
    dateDiv.appendChild(date);
    cover.appendChild(dateDiv);

    const descriptionDiv = document.createElement("div");
    const description = document.createElement("h2");
    const descriptionData = project.description;
    description.textContent = `Description: ${descriptionData}`;
    descriptionDiv.appendChild(description);
    cover.appendChild(descriptionDiv);

    content.appendChild(cover);
  }

  function reloadProjectDisplay(array) {
    while (content.hasChildNodes()) {
      content.removeChild(content.firstChild);
    }

    array.forEach((project, index) => {
      createCover(project, index);
    });
  }

  function displayContent(array, id) {
    const projectElem = projects[id];
  }

  function clearDisplay() {
    while (content.hasChildNodes()) {
      content.removeChild(content.firstChild);
    }
  }

  function getProjectId(e) {
    let id;

    if (e.getAttribute("class") === "cover") {
      id = e.dataset.id;
    } else if (e.closest(".cover")) {
      const x = e.closest(".cover");
      id = x.dataset.id;
    }
    return id;
  }

  function detailedDisplay(project) {
    const { itemList } = project;
    const display = document.createElement("div");
    display.setAttribute("class", "display");

    const titleDiv = document.createElement("div");
    const title = document.createElement("h2");
    const titleData = project.title;
    title.textContent = `Title: ${titleData}`;
    titleDiv.appendChild(title);
    display.appendChild(titleDiv);

    const dateDiv = document.createElement("div");
    const date = document.createElement("h2");
    const dateData = project.date;
    date.textContent = `Due: ${dateData}`;
    dateDiv.appendChild(date);
    display.appendChild(dateDiv);

    const descriptionDiv = document.createElement("div");
    const description = document.createElement("h2");
    const descriptionData = project.description;
    description.textContent = `Description: ${descriptionData}`;
    descriptionDiv.appendChild(description);
    display.appendChild(descriptionDiv);

    const listDiv = document.createElement("div");
    const listTitle = document.createElement("h2");
    listTitle.textContent = "Checklist:";

    const list = document.createElement("ul");
    itemList.forEach((item) => {
      const li = document.createElement("li");
      Object.assign(li, {
        textContent: item,
        id: itemList.indexOf(item),
      });

      const checkbox = document.createElement("input");
      Object.assign(checkbox, {
        type: "checkbox",
      });
      li.appendChild(checkbox);
      list.appendChild(li);
    });
    const editBtn = document.createElement("button");
    Object.assign(editBtn, {
      textContent: "Edit",
      type: "button",
    });
    const deleteBtn = document.createElement("button");
    Object.assign(deleteBtn, {
      textContent: "Delete",
      type: "button",
    });

    listDiv.appendChild(listTitle);
    listDiv.appendChild(list);
    listDiv.appendChild(editBtn);
    listDiv.appendChild(deleteBtn);
    display.appendChild(listDiv);
    content.appendChild(display);
  }

  function expandProject(array, e) {
    let index = getProjectId(e.target);
    if (index === undefined) {
      return;
    }
    let project = array[index];
    clearDisplay();
    detailedDisplay(project);
  }

  function updateProjectsArray(updatedProjects) {
    projects = updatedProjects;
  }

  content.addEventListener("click", (e) => {
    ps.publish("projects-request", null);
    expandProject(projects, e);
  });
  ps.subscribe("projects-update", updateProjectsArray);
  ps.subscribe("create-cover", createCover);
}
