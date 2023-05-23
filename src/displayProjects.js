import { format, differenceInDays, parseISO } from "date-fns";
import ps from "./pubsub";

export default function displayProjects(elem) {
  const content = document.querySelector(elem);
  let projects = [];
  function createCover(array, indexNumber) {
    const index = indexNumber;
    const project = array;
    if (index === null || index === undefined) {
      index = array.length - 1;
      project = project[index];
    }

    const cover = document.createElement("div");
    cover.setAttribute("class", "cover");
    cover.setAttribute("id", `cover${project.priority}`);
    cover.setAttribute("data-id", index);

    const titleDiv = document.createElement("div");
    const title = document.createElement("h2");
    const titleData = project.title;
    title.textContent = `Title: ${titleData}`;
    titleDiv.appendChild(title);
    cover.appendChild(titleDiv);

    const dateDiv = document.createElement("div");
    const date = document.createElement("h2");
    const dateData = format(new Date(project.date), "dd/MM/yyyy");
    const dateRemaining = differenceInDays(parseISO(project.date), new Date());
    if (dateRemaining < 0) {
      const positiveNumber = dateRemaining * -1;
      if (positiveNumber === 1) {
        date.textContent = `Due: ${dateData} (Overdue by ${positiveNumber} day)`;
      } else {
        date.textContent = `Due: ${dateData} (Overdue by ${positiveNumber} days.`;
      }
    } else if (dateRemaining === 0) {
      date.textContent = `Due: ${dateData} (Due today!)`;
    } else if (dateRemaining === 1) {
      date.textContent = `Due: ${dateData} (${dateRemaining} day remaining)`;
    } else {
      date.textContent = `Due: ${dateData} (${dateRemaining} days remaining)`;
    }

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

  function createTodayCover(array, indexNumber) {
    const index = indexNumber;
    const project = array;
    if (index === null || index === undefined) {
      index = array.length - 1;
      project = project[index];
    }

    const cover = document.createElement("div");
    cover.setAttribute("class", "cover");
    cover.setAttribute("id", `cover${project.priority}`);
    cover.setAttribute("data-id", index);

    const titleDiv = document.createElement("div");
    const title = document.createElement("h2");
    const titleData = project.title;
    title.textContent = `Title: ${titleData}`;
    titleDiv.appendChild(title);
    cover.appendChild(titleDiv);

    const descriptionDiv = document.createElement("div");
    const description = document.createElement("h2");
    const descriptionData = project.description;
    description.textContent = `Description: ${descriptionData}`;
    descriptionDiv.appendChild(description);
    cover.appendChild(descriptionDiv);

    content.appendChild(cover);
  }

  function clearDisplay() {
    while (content.hasChildNodes()) {
      content.removeChild(content.firstChild);
    }
  }

  function reloadProjectDisplay() {
    clearDisplay();
    ps.publish("projects-request", null);
    projects.forEach((project, index) => {
      createCover(project, index);
    });
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

  function saveToLocal() {
    // Store to local storage
    const json = JSON.stringify(projects);
    const key = "projects";
    const value = json;
    const obj = { key, value };
    ps.publish("store-local", obj);
  }

  function saveProject(project, index, itemList) {
    // Save title
    const title = document.querySelector("#titleDiv > input");
    project.title = title.value;

    // Save date
    const date = document.querySelector("#dateDiv > input");
    if (!(date.value === "")) {
      project.date = format(new Date(date.value), "yyyy/MM/dd");
    }

    // Save select
    const select = document.getElementById("prioritySelect");
    project.priority = select.value;

    // Save description
    const description = document.querySelector("#descriptionDiv > textarea");
    project.description = description.value;

    // Save checklist
    const li = document.querySelectorAll(`#checklist > li`);

    for (let i = 0; i <= itemList.length - 1; i += 1) {
      const el = li[i];
      const input = el.querySelector("input");
      itemList[i].value = input.value;
    }
    itemList.forEach((item, id) => {
      if (item.value === "") {
        itemList.splice(id, 1);
      }
    });

    clearDisplay();
    detailedDisplay(project, index);
    saveToLocal();
  }

  function addChecklistItem(itemList, div) {
    // Create new checklist item
    const li = document.createElement("li");
    li.setAttribute("id", `item${itemList.length}`);

    const input = document.createElement("input");
    Object.assign(input, {
      type: "text",
      id: `item${itemList.length}`,
    });
    input.setAttribute("maxlength", 35);
    li.appendChild(input);
    div.appendChild(li);
    const obj = { value: "", completed: false };
    itemList.push(obj);
  }

  function editProject(index) {
    // Remove return and delete buttons
    const returnBtn = document.getElementById("returnBtn");
    const deleteBtn = document.getElementById("deleteBtn");
    deleteBtn.remove();
    returnBtn.remove();

    // Edit selected project
    const project = projects[index];
    const { itemList } = project;
    const checklistElemDivider = document.getElementById(
      "checklist-elem-divider"
    );
    const checklistUl = document.getElementById("checklist");
    const li = document.querySelectorAll(`#checklist > li`);
    for (let i = 0; i < itemList.length; i += 1) {
      const el = li[i];
      // Elem to edit text
      while (el.hasChildNodes()) {
        el.removeChild(el.firstChild);
      }

      const input = document.createElement("input");
      Object.assign(input, {
        type: "text",
        id: `item${i}`,
        value: itemList[i].value,
      });

      input.setAttribute("maxlength", 35);
      el.appendChild(input);
    }
    // Change edit button to save
    const editBtn = document.querySelector("#editBtn");
    const saveBtn = document.createElement("button");
    editBtn.replaceWith(saveBtn);

    Object.assign(saveBtn, {
      textContent: "Save",
      id: "saveBtn",
    });
    saveBtn.addEventListener("click", () =>
      saveProject(project, index, itemList)
    );

    // Add checklist items
    const addBtn = document.createElement("button");
    Object.assign(addBtn, {
      textContent: "Add",
      id: "addBtn",
    });
    addBtn.addEventListener("click", () =>
      addChecklistItem(itemList, checklistUl)
    );
    checklistElemDivider.appendChild(addBtn);

    // Edit priority
    const projectPriority = project.priority;
    const priorityDiv = document.getElementById("priorityDiv");
    priorityDiv.setAttribute("class", "editDiv");
    const priorityH2 = document.querySelector("#priorityDiv > h2");
    priorityH2.textContent = "Priority: ";
    const prioritySelect = document.createElement("select");
    Object.assign(prioritySelect, {
      name: "priority",
      id: "prioritySelect",
    });
    const lowPriority = document.createElement("option");
    Object.assign(lowPriority, {
      textContent: "Low",
      value: "Low",
    });
    const medPriority = document.createElement("option");
    Object.assign(medPriority, {
      textContent: "Medium",
      value: "Medium",
    });
    const highPriority = document.createElement("option");
    Object.assign(highPriority, {
      textContent: "High",
      value: "High",
    });

    if (projectPriority === "Low") {
      lowPriority.selected = true;
    } else if (projectPriority === "Medium") {
      medPriority.selected = true;
    } else {
      highPriority.selected = true;
    }
    prioritySelect.appendChild(lowPriority);
    prioritySelect.appendChild(medPriority);
    prioritySelect.appendChild(highPriority);
    priorityDiv.appendChild(prioritySelect);

    // Edit title
    const titleDiv = document.getElementById("titleDiv");
    titleDiv.setAttribute("class", "editDiv");
    const titleH2 = document.querySelector("#titleDiv > h2");
    titleH2.textContent = "Title: ";
    const titleInput = document.createElement("input");
    Object.assign(titleInput, {
      defaultValue: project.title,
      name: "title",
    });
    titleInput.setAttribute("maxlength", 25);
    titleDiv.appendChild(titleInput);

    // Edit date
    const dateDiv = document.getElementById("dateDiv");
    dateDiv.setAttribute("class", "editDiv");
    const dateH2 = document.querySelector("#dateDiv > h2");
    dateH2.textContent = "Due: ";
    const dateInput = document.createElement("input");
    Object.assign(dateInput, {
      type: "date",
      name: "date",
      min: new Date().toISOString().slice(0, 10),
    });
    dateDiv.appendChild(dateInput);

    // Edit description
    const descriptionDiv = document.getElementById("descriptionDiv");
    descriptionDiv.setAttribute("class", "editDiv");
    const descriptionH2 = document.querySelector("#descriptionDiv > h2");
    descriptionH2.textContent = "Description: ";
    const descriptionInput = document.createElement("textarea");
    Object.assign(descriptionInput, {
      name: "description",
      defaultValue: project.description,
    });
    descriptionInput.setAttribute("maxlength", 50);
    descriptionDiv.appendChild(descriptionInput);
  }

  function deleteProject(index) {
    // Delete selected project and reload content area
    projects.splice(index, 1);
    reloadProjectDisplay();
    saveToLocal();
  }

  function detailedDisplay(project, index) {
    // Expand details of a single project
    const { itemList } = project;
    const display = document.createElement("div");
    display.setAttribute("class", "display");

    const titleDiv = document.createElement("div");
    titleDiv.setAttribute("id", "titleDiv");
    const title = document.createElement("h2");
    const titleData = project.title;
    title.textContent = `Title: ${titleData}`;
    titleDiv.appendChild(title);
    display.appendChild(titleDiv);

    const dateDiv = document.createElement("div");
    dateDiv.setAttribute("id", "dateDiv");
    const date = document.createElement("h2");
    const dateData = project.date;
    date.textContent = `Due: ${format(new Date(dateData), "dd/MM/yyyy")}`;
    dateDiv.appendChild(date);
    display.appendChild(dateDiv);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.setAttribute("id", "descriptionDiv");
    const description = document.createElement("h2");
    const descriptionData = project.description;
    description.textContent = `Description: ${descriptionData}`;
    descriptionDiv.appendChild(description);
    display.appendChild(descriptionDiv);

    const priorityDiv = document.createElement("div");
    priorityDiv.setAttribute("id", "priorityDiv");
    const priority = document.createElement("h2");
    const priorityData = project.priority;
    priority.textContent = `Priority: ${priorityData}`;
    priorityDiv.appendChild(priority);
    display.appendChild(priorityDiv);

    const listDiv = document.createElement("div");
    listDiv.setAttribute("id", "checklistDiv");
    const checklistElemDivider = document.createElement("div");
    checklistElemDivider.setAttribute("id", "checklist-elem-divider");
    const listTitle = document.createElement("h2");
    listTitle.textContent = "Checklist:";

    const list = document.createElement("ul");
    list.setAttribute("id", "checklist");
    itemList.forEach((item) => {
      const li = document.createElement("li");
      Object.assign(li, {
        id: `item${itemList.indexOf(item)}`,
      });

      const label = document.createElement("label");
      label.setAttribute("for", `checkbox${itemList.indexOf(item)}`);
      Object.assign(label, {
        textContent: item.value,
      });

      const checkbox = document.createElement("input");
      Object.assign(checkbox, {
        type: "checkbox",
        id: `checkbox${itemList.indexOf(item)}`,
      });
      if (item.completed) {
        checkbox.checked = true;
      }
      li.appendChild(checkbox);
      li.appendChild(label);
      list.appendChild(li);
      checkbox.addEventListener("click", () => {
        if (checkbox.checked) {
          item.completed = true;
        } else {
          item.completed = false;
        }
        saveToLocal();
      });
    });

    const buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("id", "buttonDiv");
    const returnBtn = document.createElement("button");
    Object.assign(returnBtn, {
      textContent: "Return",
      type: "button",
      id: "returnBtn",
    });
    const editBtn = document.createElement("button");
    Object.assign(editBtn, {
      textContent: "Edit",
      type: "button",
      id: "editBtn",
    });
    const deleteBtn = document.createElement("button");
    Object.assign(deleteBtn, {
      textContent: "Delete",
      type: "button",
      id: "deleteBtn",
    });

    returnBtn.addEventListener("click", () => reloadProjectDisplay());
    editBtn.addEventListener("click", () => editProject(index));
    deleteBtn.addEventListener("click", () => deleteProject(index));

    checklistElemDivider.appendChild(listTitle);
    listDiv.appendChild(checklistElemDivider);
    listDiv.appendChild(list);
    buttonDiv.appendChild(returnBtn);
    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(deleteBtn);
    display.appendChild(listDiv);
    display.appendChild(buttonDiv);
    content.appendChild(display);
  }

  function expandProject(array, e) {
    let index = getProjectId(e.target);
    if (index === undefined) {
      return;
    }
    let project = array[index];
    clearDisplay();
    detailedDisplay(project, index);
  }

  function updateProjectsArray(updatedProjects) {
    projects = updatedProjects;
  }

  function showToday(today) {
    clearDisplay();
    ps.publish("projects-request", null);
    projects.forEach((project, index) => {
      if (project.date === today) {
        createTodayCover(project, index);
      }
    });
  }

  function showUpcoming(today) {
    clearDisplay();
    ps.publish("projects-request", null);

    projects.forEach((project, index) => {
      if (!(project.date === today)) {
        createCover(project, index);
      }
    });
  }
  content.addEventListener("click", (e) => {
    ps.publish("projects-request", null);
    expandProject(projects, e);
  });
  ps.subscribe("projects-update", updateProjectsArray);
  ps.subscribe("show-today", showToday);
  ps.subscribe("show-upcoming", showUpcoming);
  ps.subscribe("show-all", reloadProjectDisplay);
}
