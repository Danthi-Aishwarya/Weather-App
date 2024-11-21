document.getElementById("searchBtn").addEventListener("click", fetchWeather);
async function fetchWeather() {
  const city = document.getElementById("city").value.trim();
  if (!city) {
    alert("Please enter a location!");
    return;
  }
  try {
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=XVAXY2LJBEMKGP79PD92B9B26&include=current&unitGroup=metric&lang=en&tz=Asia/Kolkata`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error(error);
    alert("Weather data could not be fetched. Please try again later.");
  }
}
function displayWeather(data) {
  const locationElement = document.getElementById("location");
  const temperatureElement = document.getElementById("temperature");
  const descriptionElement = document.getElementById("description");
  locationElement.textContent = `${data.address}`;
  temperatureElement.textContent = `${data.currentConditions.temp}°C`;
  descriptionElement.textContent = `${data.currentConditions.conditions}`;
}
