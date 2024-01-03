let apikey = "07f1148db74ee5fa0ea5d8fb0333308b";
let apiURL = "https://api.openweathermap.org/data/2.5/weather?";
let city;
let userCity = document.getElementById("userText");
let temperature = document.getElementById("temp");
let ct = document.getElementById("city");
let humidity = document.getElementById("humditiy-info");
let windInfo = document.getElementById("wind-info");
let weatherImage = document.querySelector(".weather_img")

async function getWeatherData(){
    if (userCity.value==""){
        alert("Enter City Name")
    }
    else{
        city = userCity.value;
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
        let data = await response.json();
        ct.innerHTML = data.name;
        temperature.innerHTML = Math.round(data.main.temp - 273.15)+"°C";
        humidity.innerHTML = data.main.humidity + "%";
        windInfo.innerHTML = data.wind.speed + "km/h";
        userCity.value="";
        if(data.weather[0].main=="Clear"){
            weatherImage.src = "Clear.png";
        }
        if(data.weather[0].main=="Snow"){
            weatherImage.src = "Snow.png";
        }
        if(data.weather[0].main=="Cloud"){
            weatherImage.src = "Cloud.png";
        }
        if(data.weather[0].main=="Drizzle"){
            weatherImage.src = "Drizzle.png";
        }
        if(data.weather[0].main=="Mist"){
            weatherImage.src = "Mist.png";
        }
        if(data.weather[0].main=="Rain"){
            weatherImage.src = "Rainy2.png";
        }
        console.log(data)
}
}
