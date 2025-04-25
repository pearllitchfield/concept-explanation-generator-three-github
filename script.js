function displayConcept(response) {
  new Typewriter("#search-result", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 60,
  });
}

function generateConcept(event) {
  event.preventDefault();

  let searchBarInput = document.querySelector("#user-input");
  let apiKey = "7da7782c88c36f93atbb1b04a1aebo6b";
  let context =
    "You are an expert and have a great deal of knowledge on a blend of scientific concepts. Your answers are restricted to four lines of explanation only, follow user instructions explicitly. Sign and bold with 'SheCodes AI'";
  let prompt = `User instructions: Generate a concept about ${searchBarInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayConcept);
}

let conceptFormElement = document.querySelector("#concept-generator-form");
conceptFormElement.addEventListener("submit", generateConcept);
