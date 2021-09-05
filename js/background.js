const images = [
  { img: "00.jpeg", city: "Zadar", country: "Republic of Croatia" },
  { img: "01.jpeg", city: "Meknes", country: "Kingdom of Morocco" },
  { img: "02.jpeg", city: "Mexico City", country: "United Mexican States" },
  { img: "03.jpeg", city: "Dakar", country: "Republic of Senegal" },
  { img: "04.jpeg", city: "Kathmandu", country: "Nepal" },
  { img: "05.jpeg", city: "Miami", country: "United States of America" },
  { img: "06.jpeg", city: "Novi Sad", country: "Republic of Serbia" },
  { img: "07.jpeg", city: "Shenzhen", country: "People's Republic of China" },
  { img: "08.jpeg", city: "Copenhagen", country: "Kingdom of Denmark" },
  { img: "09.jpeg", city: "Seoul", country: "Republic of Korea" },
];

const imageBox = document.querySelector(".background-box .image");

const randomChosen = images[Math.floor(Math.random() * images.length)];
const chosenImage = randomChosen.img;
const chosenCity = randomChosen.city;
const chosenCountry = randomChosen.country;

const destination = document.createElement("img");
const city = document.createElement("span");
const country = document.createElement("span");

const bgImage = `img/${chosenImage}`;

destination.src = bgImage;
city.innerText = chosenCity;
country.innerText = chosenCountry;

imageBox.appendChild(destination);
imageBox.appendChild(city);
imageBox.appendChild(country);
