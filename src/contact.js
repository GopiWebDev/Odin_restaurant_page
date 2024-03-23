const createContact = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  const form = document.createElement("form");

  const headingInput = document.createElement("input");
  headingInput.type = "text";
  headingInput.placeholder = "Enter Heading";
  form.appendChild(headingInput);

  const submitBtn = document.createElement("input");
  submitBtn.type = "submit";
  submitBtn.value = "Submit";
  form.appendChild(submitBtn);

  pageContent.appendChild(form);
  content.appendChild(pageContent);
};

export default createContact;
