// javascript5까지는 변수명을 var로 사용하고 그 이후로는 let을 자주 사용
let weatherImage = document.querySelector('.weather-image');
let weatherText = document.querySelector('.weather-text');
let weatherTempCurrent = document.querySelector('.weather-temp-current span');
let weatherTempMin = document.querySelector('.weather-temp-minmax .min');
let weatherTempMax = document.querySelector('.weather-temp-minmax .max');


var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {//실상 아래에도 맵을 구현해줄 코드가 있기 때문에 혹 아래의 주소가 안 잡힐 경우 디폴트로 두는 셈 침
        center: new kakao.maps.LatLng(37.498095, 127.027610), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로 지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);


//마커 생성
var marker = new kakao.maps.Marker({
    position: map.getCenter()
});

//마커표시
//marker.setMap(map);



// 지도에 클릭 이벤트를 등록합니다
// 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
    // 클릭한 위도, 경도 정보를 가져옵니다
    var latlng = mouseEvent.latLng;

    // 마커 위치를 클릭한 위치로 옮깁니다
    marker.setPosition(latlng);

    getWeatherData(latlng.getLat(),latlng.getLng())
});



// 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();

// // 주소로 좌표를 검색합니다
geocoder.addressSearch('서울 강남구 테헤란로5길 7', function(result, status) {

    // 정상적으로 검색이 완료됐으면
    if (status === kakao.maps.services.Status.OK) {

        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        marker = new kakao.maps.Marker({
            map: map,
            position: coords
        });

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);

        //api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
        //api.openweathermap.org/data/2.5/weather?q=seoul&appid=6dce104220b649653ee8a8f17c5fd01c
        getWeatherData(result[0].y, result[0].x)
    }


});




function getWeatherData(lat,lng) {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng + '&appid=6dce104220b649653ee8a8f17c5fd01c')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
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
}