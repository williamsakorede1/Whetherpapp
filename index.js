const apiKey = "9459720b40077793ea7f54b64e381294";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("cityname");
const searchBtn = document.getElementById("citySubmit");
const weatherIcon = document.getElementById("weather-icon");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    
    if (response.status == 404){
        document.getElementById("error").style.display = "block";
        document.getElementById("hid").style.display = "none"
    } else {
        document.getElementById("error").style.display = "none";
        document.getElementById("hid").style.display = "contents";
    }

        if (data.weather[0].main == 'Mist') {
            weatherIcon.src = "./mist.png";
         } else if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = "./clouds.png";
         } else if (data.weather[0].main == 'Drizzle'){
            weatherIcon.src = "./drizzle.png";
         } else if (data.weather[0].main == 'Snow') {
            weatherIcon.src = "./snow.png";
         } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "./rain.png";
         } else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = "./clear.png";
         } else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = "./drizzle.png";
        }
        document.getElementById("displayCity").innerHTML = data.name;
        document.getElementById("results").innerHTML = Math.round(data.main.temp) + "°c";
        document.getElementById("humidity").innerHTML = data.main.humidity + "%";
        document.getElementById("wind").innerHTML = data.wind.speed + " km/h";
    }


searchBtn.onclick = function (){
    checkWeather(searchBox.value);
}

const welcome = document.getElementById("welcome");
