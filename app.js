const cityInput = document.querySelector("#cityInput");
const searchButton = document.querySelector("#searchButton");
const weatherCard = document.querySelector("#weatherCard");
const locationName = document.querySelector("#locationName");
const temperature = document.querySelector("#temperature");
var myKey = config.MY_KEY;

searchButton.addEventListener("click", async function () {
  const city = cityInput.value;
  if (city) {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${myKey}&q=${city}&aqi=no`,
        {
          mode: "cors",
        }
      );
      console.log(response);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      locationName.textContent = data.location.name;
      temperature.textContent = `${data.current.temp_c}°C`;
      weatherCard.style.display = "block";
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("An error occurred while fetching weather data.");
      weatherCard.style.display = "none";
    }
  } else {
    alert("Please enter a city name.");
    weatherCard.style.display = "none";
  }
});
