$("#city-search-btn").on("click", function() {
  event.preventDefault();

  var apiKey = "9eca7d882f669d4cc021928d6defcd52";

  var locationQuery = $("#locationInput").val();
  localStorage.setItem("city", locationQuery);

  var locationInput = localStorage.getItem("city");
  $("#locationInput").value = locationInput;
  //   location.reload();

  console.log(localStorage);

  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    locationInput +
    "&units=metric&appid=" +
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
    //h1 class location-name
    //p id temperature
    //p id feels-like
    //p id current-condition
    //p id wind-speed
    //p id humidity

    $(".location-name").html(response.name);
    $("#temperature").html("Temperature: " + response.main.temp);
    $("#feels-like").html("Feels like: " + response.main.feels_like + " °C");
    $("#wind-speed").html("Wind speed: " + response.wind.speed + " MPH");
    $("#humidity").html("Humidity " + response.main.humidity + "%");

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
