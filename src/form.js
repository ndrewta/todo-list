export default function createForm(elem) {
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
      disabled: true,
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
      disabled: true,
    });
    // Cancel button
    const resetBtn = document.createElement("button");
    Object.assign(resetBtn, {
      textContent: "Clear",
      type: "reset",
      id: "clear",
      disabled: true,
    });
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
    const btns = createButtons();
    form.appendChild(title);
    form.appendChild(date);
    form.appendChild(radio);
    form.appendChild(btns);
    // Append to div
    div.appendChild(form);

    return div;
  }

  function setForm() {
    const content = document.querySelector(elem);
    const form = createLayout();
    content.appendChild(form);
  }
  function toggleForm() {
    const formDiv = document.querySelector(".form");
    const title = document.getElementById("title");
    const date = document.getElementById("date");
    const low = document.getElementById("low");
    const med = document.getElementById("med");
    const high = document.getElementById("high");
    const submitBtn = document.getElementById("submit");
    const resetBtn = document.getElementById("clear");
    const formList = [title, date, low, med, high, submitBtn, resetBtn];
    formDiv.classList.toggle("form-toggle");
    formList.forEach((inputElem) => {
      const item = inputElem;
      if (item.disabled) {
        item.disabled = false;
      } else {
        item.disabled = true;
      }
    });
  }

  return { setForm, toggleForm };
}
