const weather = document.querySelector(".js-weather");
const COORDS = "coords";
const API_KEY = "eace965324c3168e727cad365dc57a58";

function getWeather(lat,lon)
{
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json();
    }).then(function(json) {
        const temperature = json.main.temp;
        const locationName = json.name;
        weather.innerHTML = `<span>${temperature}℃ @ ${locationName}</span>`;
        const weatherImg = new Image();
        weatherImg.src= ` http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`;
        weather.prepend(weatherImg);
    })
}

function saveCoords(coordsObj)
{
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position)
{
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj =
    {
        latitude,
        longitude
    };

    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError()
{
    console.log("Can't access geo location");
}

function askForCoords()
{
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);

}

function loadCoords()
{
    const loadedCords = localStorage.getItem(COORDS);

    if(loadedCords === null)
    {
        askForCoords();
    }
    else
    {
        const parsedCoords = JSON.parse(loadedCords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}

function init()
{

    loadCoords();
}

init();