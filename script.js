const apiKey = "ec08f1281a3df94c94159431aa1a6cf3";
const city = "sargodha";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

function fetchWeather() {
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.main.temp);
    })
    .catch((error) => {
      console.error("Error fetching weather:", error);
    });
}

fetchWeather();