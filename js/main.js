"use strict";
let today = document.getElementById("day");
let todayMonthNum = document.getElementById("today-month-num");
let todayMonth=document.getElementById("today-month");

let city = document.getElementById("city");
let todayTemperature = document.getElementById("Temperature");
let photo = document.getElementById("img");
let isTodayClear = document.getElementById("is-clear");
let dayTwo = document.getElementById("day-two");
let dayTwoTemp = document.getElementById("temptwo");
let dayTwoSmalTemp = document.getElementById("d-smal");
let isDayTwoSunny = document.getElementById("is-sunny-day");
let dayTwoImg = document.getElementById("day-two-img");
let dayThree = document.getElementById("day-three");
let dayThreeTemp = document.getElementById("tempthree");
let dayThreeSmallTemp = document.getElementById("d-smal-day");
let dayThreeImg=document.getElementById("day-three-img")
let isDayThreeSunny = document.getElementById("is-sunny-day-three");
let asd=document.getElementById("asd");
let zxc=document.getElementById("zxc");
let cvb=document.getElementById("cvb");



let dataFromApi = [];
let city_info = document.getElementById("search-value");


function getWeather() {

  let http = new XMLHttpRequest();
  http.open(
    "GET",
    `https://api.weatherapi.com/v1/forecast.json?key=1ec0c6c6c3b6463d81e144642232508&q=${city_info.value}&days=3`
  );
  http.send();
  http.addEventListener("readystatechange", function () {
    if (http.readyState == 4) {
      dataFromApi = JSON.parse(http.response);
      console.log(dataFromApi)
      displayTodayData(dataFromApi);
      displayTomorrowData(dataFromApi);
      displayAfterTomorrowData(dataFromApi);
    }
  });
}
function displayTodayData(data) {
    city.innerHTML = data.location.name;
  todayTemperature.innerHTML = data.current.temp_c+"<sup>o</sup>c";
  photo.setAttribute("src", data.current.condition.icon);
  isTodayClear.innerHTML = data.current.condition.text;
  let todayDate=new Date();
  today.innerHTML=todayDate.toLocaleDateString("en-us",{weekday:"long"});
  todayMonthNum.innerHTML=todayDate.getDate();
  todayMonth.innerHTML=todayDate.toLocaleDateString("en-us",{month:"long"});
  asd.innerHTML=data.current.humidity+"%"+`                    <img src="images/icon-umberella.png">
  `;
  zxc.innerHTML=data.current.wind_kph+`                    <img src="images/icon-wind.png">
  `   ;               
  cvb.innerHTML=data.current.wind_dir+` <img src="images/icon-compass.png">`;







}
let search=document.getElementById("btn-one");
search.addEventListener("click",function(){
    getWeather();
})


function displayTomorrowData(data) {
    dayTwoTemp.innerHTML=data.forecast.forecastday[1].day.maxtemp_c+"<sup>o</sup>c";
    dayTwoSmalTemp.innerHTML=data.forecast.forecastday[1].day.mintemp_c+"<sup>o</sup>";
    dayTwoImg.setAttribute("src",data.forecast.forecastday[1].day.condition.icon);
    isDayTwoSunny.innerHTML=data.forecast.forecastday[1].day.condition.text;
    let todayDate=new Date();
    dayTwo.innerHTML=todayDate.toLocaleDateString("en-us",{weekday:"long"});




}

function displayAfterTomorrowData(data) {
    dayThreeTemp.innerHTML=data.forecast.forecastday[2].day.maxtemp_c+"<sup>o</sup>c";
    dayThreeSmallTemp.innerHTML=data.forecast.forecastday[2].day.mintemp_c+"<sup>o</sup>";
    dayThreeImg.setAttribute("src",data.forecast.forecastday[2].day.condition.icon);
    isDayThreeSunny.innerHTML=data.forecast.forecastday[2].day.condition.text;
    let todayDate=new Date();
    dayThree.innerHTML=todayDate.toLocaleDateString("en-us",{weekday:"long"});
}
