function generateConcept(event) {
  event.preventDefault();

  new Typewriter("#search-result", {
    strings:
      "A singularity realm refers to a state or concept that is often used in both scientific and fictional contexts. In physics, a singularity is a point of infinite density and gravity, like the center of a black hole. In the realm of AI, the term refers to a potential future point where artificial intelligence surpasses human intelligence.",
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

let conceptFormElement = document.querySelector("#concept-generator-form");
conceptFormElement.addEventListener("submit", generateConcept);
