const enterBtn = document.querySelector('.enter');

enterBtn.addEventListener('click', async function () {
  const inputFlield = document.querySelector('.input').value;
  const weather = await getWeather(inputFlield);
  getUiWeather(weather);
});

// mendapatkan api
function getWeather(keyword) {
  return fetch('./data/data.json')
    .then((response) => response.json())
    .then((data) => data);
}

// menampilkan weather
function getUiWeather(data) {
  let isi = `<div class="content">
                <h1 class="city">${data.name}</h1>
                <div class="suhu">${data.main.temp} <span>°C</span></div>
                </div>
                <div class="content-img">
                    <span><i class="wi wi-cloudy fa-4x"></i></span>
                    <div class="desc-img">${data.weather[0].description}</div>
            </div>`;
  const container = document.querySelector('.main-content');
  container.innerHTML = isi;
}
