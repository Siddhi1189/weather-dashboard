const api_Key = "e24cc9816604e6d4852c14c96ddea428";

const city = document.getElementById("search");
const searchbtn = document.getElementById("search-btn");

const cityprint = document.querySelector(".city");
const tempprint = document.querySelector(".temp-value");
const tempprint1 = document.querySelector(".temp-value1");
const descriptionprint = document.querySelector(".description");
const humidityprint = document.querySelector(".humidity");

const cityRight = document.querySelector(".cityname");
const icon = document.querySelector(".icon");
const feels_like = document.querySelector(".feels_like");
const today = document.querySelector(".today");

searchbtn.addEventListener("click", () => {
  const cityName = city.value.trim();

  if (cityName === "") {
    alert("Please enter a city.");
    return;
  }

  getWeatherDetails(cityName);
});

async function getWeatherDetails(cityName) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_Key}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    displayWeather(data);

    city.value = "";
  } catch (error) {
    alert(error.message);
  }
}

function displayWeather(data) {
  const temp = Math.round(data.main.temp);
  const description = data.weather[0].description;
  const humidity = data.main.humidity;
  const cityname = data.name;
  const wicon = data.weather[0].icon;
  const feel = Math.round(data.main.feels_like);

  cityprint.textContent = cityname;

  tempprint.textContent = temp;

  descriptionprint.textContent =
    description.charAt(0).toUpperCase() + description.slice(1);

  humidityprint.textContent = humidity;
  cityRight.textContent = cityname;
  tempprint1.textContent = temp;
  feels_like.textContent = feel;

  icon.src = `https://openweathermap.org/img/wn/${wicon}@2x.png`;
  icon.alt = description;

  const date = new Date();

  today.textContent = date.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}
