const loadData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/find?q=${city}&appid=9d1e73b14be4ab89a291a724a24aa7e2`;
  const response = await fetch(url);
  const data = await response.json();
  let temperature = data.list[0].main.temp - 273.15;
  getTemperature(Math.floor(temperature));
};

const getTemperature = (temperature) => {
  document.getElementById("weather").innerText = temperature;
  document.getElementById("weather-h1").style.display = "block";
};

const getCity = () => {
  const cityName = document.getElementById("search-bar").value;
  document.getElementById("city-name").innerText = cityName;
  loadData(cityName);
  document.getElementById("search-bar").value = "";
};
