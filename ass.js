async function testJoke() {
    let response = await fetch("https://official-joke-api.appspot.com/random_joke");
    let data = await response.json();
    console.log(data);
  }
  
  testJoke();