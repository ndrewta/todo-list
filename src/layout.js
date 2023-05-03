import ps from "./pubsub";

function createHeader() {
  // Header
  const header = document.createElement("div");
  header.setAttribute("id", "header");

  // Logo
  const img = document.createElement("p");
  img.textContent = "Img placeholder";
  header.appendChild(img);

  // Title
  const title = document.createElement("h1");
  title.textContent = "Todo List";
  header.appendChild(title);

  return header;
}

function createList() {
  // List
  const list = document.createElement("ul");

  // Camel case
  function toCamelCase(str) {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  }

  // List elements
  const elemNames = ["New Project", "Today", "Upcoming"];
  elemNames.forEach((name) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = name;
    const camelName = toCamelCase(name);
    button.setAttribute("id", camelName);
    item.appendChild(button);
    list.appendChild(item);

    if (name === "New Project") {
      button.addEventListener("click", () => ps.publish("toggle-form", null));
    }
  });

  return list;
}

function createNav() {
  // Nav
  const nav = document.createElement("div");
  nav.setAttribute("id", "nav");

  // Create and append list
  const list = createList();
  nav.appendChild(list);

  return nav;
}

function createContent() {
  // Content
  const content = document.createElement("div");
  content.setAttribute("id", "content");

  return content;
}

function createFooter() {
  // Footer
  const footer = document.createElement("div");
  footer.setAttribute("id", "footer");

  // Anchor
  const anchor = document.createElement("a");
  anchor.setAttribute("href", "https://github.com/ndrewta");
  anchor.setAttribute("target", "_blank");
  anchor.setAttribute("rel", "noopener noreferrer");
  anchor.textContent = "Site designed by ndrewta";
  footer.appendChild(anchor);

  return footer;
}

export default function init() {
  // Cache body
  const body = document.querySelector("body");

  // Header
  const header = createHeader();

  // Nav
  const nav = createNav();

  // Content
  const content = createContent();

  // Footer
  const footer = createFooter();

  // Append to body
  body.appendChild(header);
  body.appendChild(nav);
  body.appendChild(content);
  body.appendChild(footer);
}
