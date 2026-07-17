let refreshBtn = document.getElementById("refreshBtn");
let setup = document.getElementById("setup");
let punchline = document.getElementById("punchline");

async function getJoke() {
  setup.innerHTML = "Loading...";
  punchline.innerHTML = "";

  try {
    let response = await fetch("https://official-joke-api.appspot.com/random_joke");
    let data = await response.json();
    setup.innerHTML = data.setup;
    punchline.innerHTML = data.punchline;
  } catch (error) {
    setup.innerHTML = "Something went wrong. Please try again.";
  }
}

refreshBtn.addEventListener("click", getJoke);
getJoke();