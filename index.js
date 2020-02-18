const apiKey = "9eca7d882f669d4cc021928d6defcd52";
var citiesArray = ["London", "Paris", "Tokyo", "Toronto"];
var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + " " + time;

var citiesDiv = document.querySelector("#search-p");
// var cityDiv = document.querySelector("#last-searched");

if (localStorage.getItem("city")) {
  citiesArray = localStorage.getItem("city").split(",");
  showCities();
}

console.log(citiesArray);
function showCities() {
  citiesDiv.innerHTML = "";
  citiesArray.forEach(function(e) {
    // var buttonCity = $("<button>");
    // buttonCity.addClass("btn btn-dark");
    // buttonCity.innerHTML = e;
    // cityDiv.append(buttonCity);
    citiesDiv.append(e);
  });
}

$("#wicon").hide();
$("#1con").hide();
$("#2con").hide();
$("#3con").hide();
$("#4con").hide();
$("#5con").hide();

$("#city-search-btn").on("click", function() {
  event.preventDefault();
  firstAjaxCall();
  secondAjaxCall();
  showCities();
  console.log(citiesArray);
});

function firstAjaxCall() {
  var locationQuery = $("#locationInput").val();
  citiesArray.push(locationQuery);
  localStorage.setItem("city", locationQuery);
  var locationInput = localStorage.getItem("city");
  $("#locationInput").value = locationInput;

  const queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    locationInput +
    "&units=metric&appid=" +
    apiKey;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $(".location-name").html(response.name + " " + "(" + dateTime + ")");
    $("#wicon").show();
    var iconcode = response.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    $("#wicon").attr("src", iconurl);
    $("#temperature").html("Temperature: " + response.main.temp + " °C");
    $("#feels-like").html("Feels like: " + response.main.feels_like + " °C");
    $("#wind-speed").html("Wind speed: " + response.wind.speed + " MPH");
    $("#humidity").html("Humidity " + response.main.humidity + "%");
    // $("#search-p").html("Last location searched: " + locationInput);
  });
}

function secondAjaxCall() {
  var locationQuery = $("#locationInput").val();
  localStorage.setItem("city", locationQuery);
  var locationInput = localStorage.getItem("city");
  $("#locationInput").value = locationInput;

  const fiveDayQueryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    locationInput +
    "&units=metric&appid=" +
    apiKey;

  $.ajax({
    url: fiveDayQueryURL,
    method: "GET"
  }).then(function(response) {
    $(".date-one").html(response.list[0].dt_txt);
    $("#1con").show();
    var codeIcon = response.list[0].weather[0].icon;
    var urlIcon = "http://openweathermap.org/img/w/" + codeIcon + ".png";
    $("#1con").attr("src", urlIcon);
    $("#temperature-one").html("Temperature: " + response.list[0].main.temp);
    $("#humidity-one").html(
      "Humidity: " + response.list[0].main.humidity + "%"
    );

    $(".date-two").html(response.list[8].dt_txt);
    $("#2con").show();
    var codeIcon = response.list[8].weather[0].icon;
    var urlIcon = "http://openweathermap.org/img/w/" + codeIcon + ".png";
    $("#2con").attr("src", urlIcon);
    $("#temperature-two").html("Temperature: " + response.list[1].main.temp);
    $("#humidity-two").html(
      "Humidity: " + response.list[8].main.humidity + "%"
    );

    $(".date-three").html(response.list[16].dt_txt);
    $("#3con").show();
    var codeIcon = response.list[16].weather[0].icon;
    var urlIcon = "http://openweathermap.org/img/w/" + codeIcon + ".png";
    $("#3con").attr("src", urlIcon);
    $("#temperature-three").html("Temperature: " + response.list[16].main.temp);
    $("#humidity-three").html(
      "Humidity: " + response.list[16].main.humidity + "%"
    );

    $(".date-four").html(response.list[24].dt_txt);
    $("#4con").show();
    var codeIcon = response.list[24].weather[0].icon;
    var urlIcon = "http://openweathermap.org/img/w/" + codeIcon + ".png";
    $("#4con").attr("src", urlIcon);
    $("#temperature-four").html("Temperature: " + response.list[24].main.temp);
    $("#humidity-four").html(
      "Humidity: " + response.list[24].main.humidity + "%"
    );

    $(".date-five").html(response.list[32].dt_txt);
    $("#5con").show();
    var codeIcon = response.list[32].weather[0].icon;
    var urlIcon = "http://openweathermap.org/img/w/" + codeIcon + ".png";
    $("#5con").attr("src", urlIcon);
    $("#temperature-five").html("Temperature: " + response.list[32].main.temp);
    $("#humidity-five").html(
      "Humidity: " + response.list[32].main.humidity + "%"
    );
  });
}
