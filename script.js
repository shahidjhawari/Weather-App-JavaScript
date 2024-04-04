const apiKey = "ec08f1281a3df94c94159431aa1a6cf3";
const third = `&appid=${apiKey}&units=metric`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;

const myInput = document.querySelector("#weather-input");
const myBtn = document.querySelector("#weather-btn");
const myImg = document.querySelector("#weather-image");


function fetchWeather(city) {
  fetch(apiUrl + city + third)
    .then((response) => {
      if(response.status == "404"){
        document.querySelector("span").style.display = "block";
      }else if(response.status == "200"){
        document.querySelector("span").style.display = "none";
        document.querySelector(".weather-info").style.display = "block";
      }
      
      return response.json();
    })
    .then((data) => {
      console.log(data);

      const city = document.querySelector("#city").innerHTML = data.name;
      const temp = document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C";
      const wind = document.querySelector("#wind").innerHTML = data.wind.speed + "km/h";
      const humidity = document.querySelector("#humidity").innerHTML = data.main.humidity + "%";

      if(data.weather[0].main == "Clouds"){
        myImg.src = "img/cloudy.png";
      }else if(data.weather[0].main == "Rain"){
        myImg.src = "img/rainy.png";
      }else if(data.weather[0].main == "Clear"){
        myImg.src = "img/clear.png";
      }else if(data.weather[0].main == "Drizzel"){
        myImg.src = "img/drizzel.png";
      }
    })
    .catch((error) => {
      console.error("Error fetching weather:", error);
    });
}

myBtn.addEventListener("click", () => {
  fetchWeather(myInput.value);
})




