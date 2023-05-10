import ps from "./pubsub";

export default function createForm(elem) {
  const content = document.querySelector(elem);
  function createTitleInput() {
    const div = document.createElement("div");
    // Label
    const label = document.createElement("label");
    Object.assign(label, {
      textContent: "Title:",
      for: "title",
    });
    // Input
    const input = document.createElement("input");
    Object.assign(input, {
      type: "text",
      id: "title",
      name: "title",
      required: true,
      disabled: true,
    });
    // Append
    div.appendChild(label);
    div.appendChild(input);

    return div;
  }

  function createDateInput() {
    const div = document.createElement("div");
    // Label
    const label = document.createElement("label");
    Object.assign(label, {
      textContent: "Due:",
      for: "date",
    });
    // Input
    const input = document.createElement("input");
    Object.assign(input, {
      type: "date",
      id: "date",
      name: "date",
      required: true,
      disabled: true,
    });
    // Append
    div.appendChild(label);
    div.appendChild(input);

    return div;
  }

  function createDescriptionInput() {
    const div = document.createElement("div");
    // Label
    const label = document.createElement("label");
    Object.assign(label, {
      textContent: "Description:",
      for: "description",
    });
    // Input
    const textArea = document.createElement("textarea");
    Object.assign(textArea, {
      id: "description",
      name: "description",
      required: true,
      disabled: true,
    });
    // Append
    div.appendChild(label);
    div.appendChild(textArea);

    return div;
  }

  function createRadioInputs() {
    const div = document.createElement("div");
    const divLabel = document.createElement("label");
    Object.assign(divLabel, {
      textContent: "Priority: ",
      for: "priority",
    });
    const inputs = [];
    const values = ["low", "med", "high"];

    function capitalise(i) {
      return i && i[0].toUpperCase() + i.slice(1);
    }
    values.forEach((value) => {
      // Label
      const label = document.createElement("label");
      Object.assign(label, {
        textContent: capitalise(value),
        htmlFor: value,
      });
      inputs.push(label);
      // Input
      const input = document.createElement("input");
      Object.assign(input, {
        type: "radio",
        id: value,
        name: "priority",
        value,
        disabled: true,
        required: true,
      });
      inputs.push(input);
    });

    div.appendChild(divLabel);
    inputs.forEach((input) => {
      div.appendChild(input);
    });
    return div;
  }
  function createListItems() {
    const div = document.createElement("div");
    const divLabel = document.createElement("label");
    Object.assign(divLabel, {
      textContent: "Add items ",
      for: "itemBtn",
    });
    const addBtn = document.createElement("button");
    Object.assign(addBtn, {
      textContent: "+ icon",
      id: "itemBtn",
      type: "button",
      disabled: true,
    });

    // List div
    const list = document.createElement("ul");
    list.setAttribute("id", "listItems");

    function createInput() {
      // Creates to do items
      const id = "item";
      const li = document.createElement("li");
      li.setAttribute("id", id);
      const localDiv = document.createElement("div");

      // Input
      const input = document.createElement("input");
      Object.assign(input, {
        type: "text",
        name: "items",
        id,
      });
      // Remove button
      const removeBtn = document.createElement("button");
      Object.assign(removeBtn, {
        textContent: "- icon",
        id,
        type: "button",
      });

      // Hook eventListener to remove button
      removeBtn.addEventListener("click", () => {
        const item = document.getElementById(id);
        item.remove();
      });

      localDiv.appendChild(input);
      localDiv.appendChild(removeBtn);
      li.appendChild(localDiv);

      list.appendChild(li);
    }
    // Hook eventListener to run createInput
    addBtn.addEventListener("click", createInput);

    // Append
    div.appendChild(divLabel);
    div.appendChild(addBtn);
    div.appendChild(list);

    return div;
  }

  function clearListItems() {
    const list = document.getElementById("listItems");
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }
  }

  function createButtons() {
    const div = document.createElement("div");
    div.setAttribute("id", "form-btns");

    // Submit button
    const submitBtn = document.createElement("button");
    Object.assign(submitBtn, {
      textContent: "Submit",
      type: "submit",
      id: "submit",
      disabled: true,
    });
    // Clear button
    const resetBtn = document.createElement("button");
    Object.assign(resetBtn, {
      textContent: "Clear",
      type: "reset",
      id: "clear",
      disabled: true,
    });
    resetBtn.addEventListener("click", clearListItems);
    div.appendChild(submitBtn);
    div.appendChild(resetBtn);

    return div;
  }

  function createLayout() {
    // Div
    const div = document.createElement("div");
    div.setAttribute("class", "form");
    // Form
    const form = document.createElement("form");
    form.setAttribute("method", "post");
    const title = createTitleInput();
    const date = createDateInput();
    const radio = createRadioInputs();
    const description = createDescriptionInput();
    const listItems = createListItems();
    const btns = createButtons();
    form.appendChild(title);
    form.appendChild(date);
    form.appendChild(radio);
    form.appendChild(description);
    form.appendChild(listItems);
    form.appendChild(btns);
    // Append to div
    div.appendChild(form);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      ps.publish("submit-form", { formElem: form });
    });
    form.addEventListener("submit", () => ps.publish("toggle-form", null));

    return div;
  }

  function toggleForm() {
    const formDiv = document.querySelector(".form");
    const formElements = formDiv.querySelectorAll("input, textarea, button");
    formDiv.classList.toggle("form-toggle");
    formElements.forEach((inputElem) => {
      const item = inputElem;
      if (item.disabled) {
        item.disabled = false;
      } else {
        item.disabled = true;
      }
    });
  }

  const form = createLayout();
  content.appendChild(form);
  ps.subscribe("toggle-form", toggleForm);
  ps.subscribe("clear-form", clearListItems);
}
