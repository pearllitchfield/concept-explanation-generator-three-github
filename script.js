function generateConcept(event) {
  event.preventDefault();

  ("Generating concept");
}

let conceptFormElement = document.querySelector("concept-generator-form");
conceptFormElement.addEventListener("submit", generateConcept);
