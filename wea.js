let temp = document.querySelector('h1');
let city1 = document.querySelector('h2');
let humidity = document.querySelector('#first h6');
let wind = document.querySelector('#second h6');
let search = document.querySelector('#search');
let inp = document.querySelector('#inp');
let image = document.querySelector('#image');
let error = document.querySelector('.error');
let info = document.querySelector('.info');

const apiKey = 'f6462ef3aa1b7e148ef9577a7c0d5b46';
const apiUrl = ` https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    error.style.display = 'block';
  } else {
    var data = await response.json();

    city1.innerHTML = `${data.name}`;
    temp.innerHTML = `${data.main.temp}`;
    humidity.innerHTML = `${data.main.humidity}`;
    wind.innerHTML = `${data.wind.speed}`;
    console.log(data.weather[0].main);
    console.log(data);

    if (data.weather[0].main == 'Clouds') {
      image.src = '/clouds.png';
    } else if (data.weather[0].main == 'Clear') {
      image.src = '/clear.png';
    } else if (data.weather[0].main == 'Drizzle') {
      image.src = '/drizzle.png';
    } else if (data.weather[0].main == 'Mist') {
      image.src = '/mist.png';
    } else if (data.weather[0].main == 'Rain') {
      image.src = '/rain.png';
    } else if (data.weather[0].main == 'Snow') {
      image.src = '/snow.png';
    }

    info.style.display = 'block';
  }
}

search.addEventListener('click', () => {
  checkWeather(inp.value);
});

// f6462ef3aa1b7e148ef9577a7c0d5b46
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// https://api.openweathermap.org/data/2.5/weather?q={delhi}&appid={f6462ef3aa1b7e148ef9577a7c0d5b46}units=metric
