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
    textContent: "Date:",
    for: "date",
  });
  // Input
  const input = document.createElement("input");
  Object.assign(input, {
    type: "date",
    id: "date",
    name: "date",
    required: true,
  });
  // Append
  div.appendChild(label);
  div.appendChild(input);

  return div;
}

function createRadioInputs() {
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = "Priority:";
  const inputs = [];
  const values = ["low", "med", "high"];
  values.forEach((value) => {
    // Label
    const label = document.createElement("label");
    Object.assign(label, {
      textContent: value.toUpperCase(),
      for: value,
    });
    inputs.push(label);
    // Input
    const input = document.createElement("input");
    Object.assign(input, {
      type: "radio",
      id: value,
      name: "priority",
      value,
    });
    inputs.push(input);
  });

  div.appendChild(p);
  inputs.forEach((input) => {
    div.appendChild(input);
  });
  return div;
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
  });
  // Cancel button
  const resetBtn = document.createElement("button");
  Object.assign(resetBtn, {
    textContent: "Reset",
    type: "reset",
    id: "reset",
  });
  div.appendChild(submitBtn);
  div.appendChild(resetBtn);

  return div;
}

function createForm() {
  // Div
  const div = document.createElement("div");
  div.setAttribute("id", "form");
  // Form
  const form = document.createElement("form");
  form.setAttribute("method", "post");
  const title = createTitleInput();
  const date = createDateInput();
  const radio = createRadioInputs();
  const btns = createButtons();
  form.appendChild(title);
  form.appendChild(date);
  form.appendChild(radio);
  form.appendChild(btns);
  // Append to div
  div.appendChild(form);

  return div;
}

export default function init() {
  const body = document.querySelector("#content");

  const form = createForm();

  body.appendChild(form);
}
