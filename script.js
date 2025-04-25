function displayConcept(response) {
  new Typewriter("#search-result", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 10,
  });
}

function generateConcept(event) {
  event.preventDefault();

  let searchBarInput = document.querySelector("#user-input");
  let apiKey = "7da7782c88c36f93atbb1b04a1aebo6b";
  let color = (style = "color: rgb(16, 113, 174");
  let context = `You are an expert and have a great deal of knowledge on a blend of scientific concepts. Your answers are restricted to four lines of explanation only, follow user instructions explicitly. Sign with <span style="color: ${color};"><b>SheCodes AI</b>`;

  let prompt = `User instructions: Generate a concept about ${searchBarInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let searchResultElement = document.querySelector("#search-result");
  searchResultElement.classList.remove("hidden");
  searchResultElement.innerHTML = `<div class="generating"> Generating concept search about ${searchBarInput.value} &nbsp&nbsp⏲️`;

  axios.get(apiUrl).then(displayConcept);
}

let conceptFormElement = document.querySelector("#concept-generator-form");
conceptFormElement.addEventListener("submit", generateConcept);
