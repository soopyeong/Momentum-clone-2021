const API_KEY = "7fb56770f00584d02e565a737fee8cb5";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temperature = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      temperature.innerText = `${data.main.temp}°C / `;
    });
}
function onGeoError() {
  const noLocation = document.querySelector("#weather span:first-child");
  noLocation.innerText = "no Location";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
