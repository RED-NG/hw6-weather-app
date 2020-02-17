const apiKey = "9eca7d882f669d4cc021928d6defcd52";
var citiesArray;
var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + " " + time;

$("#wicon").hide();

$("#city-search-btn").on("click", function() {
  event.preventDefault();

  //   location.reload();

  firstAjaxCall();
  secondAjaxCall();
});

function firstAjaxCall() {
  var locationQuery = $("#locationInput").val();
  localStorage.setItem("city", locationQuery);

  var locationInput = localStorage.getItem("city");

  console.log(localStorage);
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
    $("#search-p").html("Last location searched: " + locationInput);

    // console.log(response);
    // console.log(response.timezone);
    // console.log(response.weather[0].icon);
    // console.log(response.name);
    // console.log(response.weather[0].main);
    // console.log(response.weather[0].description);
    // console.log("Wind speed: " + response.wind.speed + " MPH");
    // console.log("Temperature: " + response.main.temp + " °C");
    // console.log("Feels like: " + response.main.feels_like + " °C");
    // console.log("Min. Temp: " + response.main.temp_min + " °C");
    // console.log("Min. Temp: " + response.main.temp_max + " °C");
    // console.log("Humidity " + response.main.humidity + "%");
    // console.log(response);
  });
}

function secondAjaxCall() {
  var locationQuery = $("#locationInput").val();
  localStorage.setItem("city", locationQuery);

  var locationInput = localStorage.getItem("city");

  console.log(localStorage);
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
    $("#temperature-one").html("Temperature: " + response.list[0].main.temp);
    $("#humidity-one").html(
      "Humidity: " + response.list[0].main.humidity + "%"
    );
    $("#temperature-two").html("Temperature: " + response.list[1].main.temp);
    $("#humidity-two").html(
      "Humidity: " + response.list[8].main.humidity + "%"
    );
    $("#temperature-three").html("Temperature: " + response.list[16].main.temp);
    $("#humidity-three").html(
      "Humidity: " + response.list[16].main.humidity + "%"
    );
    $("#temperature-four").html("Temperature: " + response.list[24].main.temp);
    $("#humidity-four").html(
      "Humidity: " + response.list[24].main.humidity + "%"
    );
    $("#temperature-five").html("Temperature: " + response.list[32].main.temp);
    $("#humidity-five").html(
      "Humidity: " + response.list[32].main.humidity + "%"
    );

    console.log(response);

    // console.log("Day one temperature: " + response.list[0].main.temp);
    // console.log("Day one humidity: " + response.list[0].main.humidity + "%");

    // console.log("Day two temperature: " + response.list[1].main.temp);
    // console.log("Day two humidity: " + response.list[1].main.humidity + "%");

    // console.log("Day three temperature: " + response.list[2].main.temp);
    // console.log("Day three humidity: " + response.list[2].main.humidity + "%");

    // console.log("Day four temperature: " + response.list[3].main.temp);
    // console.log("Day four humidity: " + response.list[3].main.humidity + "%");

    // console.log("Day five temperature: " + response.list[4].main.temp);
    // console.log("Day five humidity: " + response.list[4].main.humidity + "%");
  });
}
