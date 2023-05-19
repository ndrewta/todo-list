import ps from "./pubsub";
import logo from "./logo.png";

function getTodaysDate() {
  return new Date().toISOString().slice(0, 10);
}

function createHeader() {
  // Header
  const header = document.createElement("div");
  header.setAttribute("id", "header");

  // Logo + title div
  const leftDiv = document.createElement("div");
  leftDiv.setAttribute("id", "left-div");
  header.appendChild(leftDiv);

  // Logo
  const headerLogo = new Image();
  headerLogo.src = logo;
  leftDiv.appendChild(headerLogo);

  // Title
  const title = document.createElement("h1");
  title.textContent = "Todo List";
  leftDiv.appendChild(title);

  // Todays date

  const date = document.createElement("h1");
  const currentDate = new Date();
  date.textContent = `Today is ${currentDate.toLocaleDateString()}`;
  header.appendChild(date);

  return header;
}

function createList() {
  // List
  const list = document.createElement("ul");
  list.setAttribute("id", "nav-list");

  // Camel case
  function toCamelCase(str) {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  }

  // List elements
  const elemNames = ["New Project", "Today", "Upcoming", "Show all"];
  elemNames.forEach((name) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = name;
    const camelName = toCamelCase(name);
    button.setAttribute("id", camelName);
    item.appendChild(button);
    list.appendChild(item);

    if (name === "New Project") {
      button.addEventListener("click", () =>
        ps.publish("toggle-form", "#content")
      );
    }
    if (name === "Today") {
      button.addEventListener("click", () =>
        ps.publish("show-today", getTodaysDate())
      );
    }
    if (name === "Upcoming") {
      button.addEventListener("click", () =>
        ps.publish("show-upcoming", getTodaysDate())
      );
    }
    if (name === "Show all") {
      button.addEventListener("click", () => ps.publish("show-all", null));
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

  // Div
  const div = document.createElement("div");
  div.setAttribute("id", "page-wrapper");

  // Header
  const header = createHeader();

  // Nav
  const nav = createNav();

  // Content
  const content = createContent();

  // Footer
  const footer = createFooter();

  // Append to body
  div.appendChild(header);
  div.appendChild(nav);
  div.appendChild(content);
  div.appendChild(footer);
  body.appendChild(div);
}
