const app = document.querySelector("#app");
const cityInput = document.querySelector("#cityInput");
const searchButton = document.querySelector("#searchButton");

searchButton.addEventListener("click", function () {
  const city = cityInput.value;
  if (city) {
    fetchWeather(city);
  } else {
    alert("Please enter a city name.");
  }
});

function fetchWeather(city) {
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=2294d5cf68954095a5b221927231809&q=${city}&aqi=no`,
    {
      mode: "cors",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      // app.textContent = `Location: ${response.location.name},  Temperature: ${response.current.temp_c}'c`;
      app.innerHTML = `<div class="location">Location: ${response.location.name}</div> <div class="temp_c">Temperature: ${response.current.temp_c}</div>`;
    })
    .catch(function (error) {
      console.error("Error fetching weather data:", error);
      app.textContent = "An error occurred while fetching weather data.";
    });
}
