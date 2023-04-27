export default function displayProjects(elem) {
  const content = document.querySelector(elem);
  function createCover(projects) {
    const index = projects.length - 1;
    const project = projects[index];

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

  function displayContent(projects, id) {
    const projectElem = projects[id];
    console.log(projectElem.itemList);
  }

  return { createCover, displayContent };
}
