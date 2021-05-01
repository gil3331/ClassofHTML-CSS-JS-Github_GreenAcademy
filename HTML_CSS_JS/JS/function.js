// javascript5까지는 변수명을 var로 사용하고 그 이후로는 let을 자주 사용


let weatherImage = document.querySelector('.weather-image');
let weatherText = document.querySelector('.weather-text');
let weatherTempCurrent = document.querySelector('.weather-temp-current span');
let weatherTempMin = document.querySelector('.weather-temp-minmax .min');
let weatherTempMax = document.querySelector('.weather-temp-minmax .max');




fetch('https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=6dce104220b649653ee8a8f17c5fd01c')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
        console.log(myJson.weather[0].main);
        console.log(myJson.weather[0].icon);
        console.log(myJson.main.temp - 273.15);
        console.log(myJson.main.temp_max - 273.15);
        console.log(myJson.main.temp_min - 273.15);

        weatherImage.src = '../IMAGES/' + myJson.weather[0].icon + '@2x.png';
        weatherText.innerHTML = myJson.weather[0].main;
        weatherTempCurrent.innerHTML = Math.floor(myJson.main.temp - 273.15);
        weatherTempMin.innerHTML = Math.floor(myJson.main.temp_min - 273.15);
        weatherTempMax.innerHTML = Math.floor(myJson.main.temp_max - 273.15);
    });







