let searchInput = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn");
let result = document.getElementById("resultsContainer"); 
async function getWeather(city) {
    try {
      let geoResponse = await fetch("https://geocoding-api.open-meteo.com/v1/search?name=" + city);
      let geoData = await geoResponse.json();
      let { latitude, longitude } = geoData.results[0];
  
      let weatherResponse = await fetch("https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&current_weather=true");
      let weatherData = await weatherResponse.json();
      let { temperature, windspeed } = weatherData.current_weather;
  
      result.innerHTML = "<p>Temperature: " + temperature + "°C</p><p>Wind Speed: " + windspeed + " km/h</p>";
    } catch (error) {
      result.innerHTML = "<p>City not found. Please try again.</p>";
    }
  }
  
  function performSearch(){
      let query = searchInput.value.trim();
      result.innerHTML = "";
  
      if (query == ""){
         result.innerHTML = "<p>Please enter a city name.</p>";
         return;
      }
      getWeather(query);
  }
  searchBtn.addEventListener("click", performSearch);
  searchInput.addEventListener("keypress", function(event){
      if(event.key == "Enter"){performSearch();}
  });;
