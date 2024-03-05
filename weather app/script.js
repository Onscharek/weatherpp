
document.addEventListener("DOMContentLoaded", function() {
    fetchTime();
});

function fetchTime() {
    fetch("http://worldtimeapi.org/api/ip")
    .then((response) => response.json())
    .then((data) => displayTime(data))
    .catch((error) => console.log("Error Fetching Time!!", error))
}

function displayTime(data) {
    const currentTime = new Date(data.datetime);
    const timeOptions = { hour: 'numeric', minute: 'numeric' };
    const timeString = currentTime.toLocaleTimeString([], timeOptions);
    const timeDisplay = document.getElementById("current-time");
    timeDisplay.textContent =  timeString;
}



document.addEventListener("DOMContentLoaded", function() {
    fetchDate();
});

function fetchDate() {
    fetch("http://worldtimeapi.org/api/ip")
    .then((response) => response.json())
    .then((data) => displayDate(data))
    .catch((error) => console.log("Error Fetching Date!!", error))
}

function displayDate(data) {
    const currentDate = new Date(data.datetime);
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = currentDate.toLocaleDateString([], dateOptions);
    const dateDisplay = document.getElementById("dateDisplay");
    dateDisplay.textContent = dateString;
}

function fetchWeatherData() {
    const apiKey = 'e8150981ffd6db128e95e6f917c553a4';
    // Get the city name from the input field
    const city = document.getElementById('cityInput').value.trim();
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    // Make a GET request using fetch()
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Extract relevant data from the JSON response
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const location = data.name;
  
        // Update the HTML content dynamically
        document.getElementById('temperature').textContent = temperature + ' °C';
        document.getElementById('description').textContent = description;
        document.getElementById('location').textContent = location;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }
  