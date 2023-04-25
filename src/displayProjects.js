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
    title.textContent = project.title;
    titleDiv.appendChild(title);
    cover.appendChild(titleDiv);

    const dateDiv = document.createElement("div");
    const date = document.createElement("h2");
    date.textContent = project.date;
    dateDiv.appendChild(date);
    cover.appendChild(dateDiv);

    content.appendChild(cover);
  }

  return { createCover };
}
