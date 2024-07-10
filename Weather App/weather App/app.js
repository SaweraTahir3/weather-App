var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var weatherIcon = document.querySelector('#weather-icon');
var humidi = document.querySelector('#humidity');


var apiKey = "8d0ca48da7963a74c365b2374f3a8d1b";

        
btn.addEventListener('click', function() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${inputvalue.value}&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => {
        if(data.cod === '404') {
            alert('You entered a wrong city name');
            return;
        }

        var nameval = data.name;
        var description = data.weather[0].description;
        var temperature = data.main.temp;
        var wndspeed = data.wind.speed;
        var humidity = data.main.humidity;

        city.innerHTML = `<span>${nameval}</span>`;
        temp.innerHTML = `Tempreture: <span>${temperature.toFixed(1)}°C</span>`;
        wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h</span>`;
        descrip.innerHTML = `Sky Conditions: <span>${description}</span>`;
        humidi.innerHTML = `Humidity: <span>${humidity}%</span>`;


        console.log(`Weather main: ${data.weather[0].description}`);
        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "images/mist(1).png";
        } else if (data.weather[0].main === "Smoke") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main === "broken") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main === "Snow") {
            weatherIcon.src = "images/snow(1).png";
        } else if (data.weather[0].main === "Haze"){
            weatherIcon.src = './images/Haze.png' ;
        }
        
        
    })

});
