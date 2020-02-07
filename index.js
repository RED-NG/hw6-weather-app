// moment().format("MMMM Do YYYY, h:mm:ss a");

$("#city-search").on("click", function() {
  var apiKey = "9eca7d882f669d4cc021928d6defcd52";
  //   var locationQuery = $("#locationInput").textContent;
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=" +
    apiKey;

  // city y
  // date n
  // icon Image n
  // temperature y
  // humidity y
  // wind speed y
  // uv index

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response.name);
    console.log(response.weather[0].main);
    console.log(response.weather[0].description);
    console.log("Wind speed: " + response.wind.speed + " MPH");
    console.log("Temperature: " + response.main.temp + " °C");
    console.log("Feels like: " + response.main.feels_like + " °C");
    console.log("Min. Temp: " + response.main.temp_min + " °C");
    console.log("Min. Temp: " + response.main.temp_max + " °C");
    console.log("Humidity " + response.main.humidity + "%");
    console.log(response);
  });
});