
async function getWeather() {
    let city = document.getElementById("city").value.trim();
    let message = document.getElementById("message");

    if (city === "") {
        message.textContent = "Please enter a city name.";
        return;
    }

    message.textContent = "Loading weather...";

    try {
        // Find the city's coordinates
        let locationResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
        );

        let locationData = await locationResponse.json();

        if (!locationData.results) {
            message.textContent = "City not found. Try another name.";
            return;
        }

        let place = locationData.results[0];

        // Get the current weather
        let weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`
        );

        let weatherData = await weatherResponse.json();
        let current = weatherData.current;

        let conditions = {
            0: "Clear sky ☀️",
            1: "Mostly clear 🌤️",
            2: "Partly cloudy ⛅",
            3: "Overcast ☁️",
            45: "Foggy 🌫️",
            48: "Foggy 🌫️",
            51: "Light drizzle 🌦️",
            53: "Drizzle 🌦️",
            55: "Heavy drizzle 🌧️",
            61: "Light rain 🌧️",
            63: "Rain 🌧️",
            65: "Heavy rain 🌧️",
            71: "Light snow ❄️",
            73: "Snow ❄️",
            75: "Heavy snow ❄️",
            80: "Rain showers 🌦️",
            81: "Rain showers 🌧️",
            82: "Heavy rain showers 🌧️",
            95: "Thunderstorm ⛈️",
            96: "Thunderstorm with hail ⛈️",
            99: "Thunderstorm with hail ⛈️"
        };

        document.getElementById("cityName").textContent =
            place.name + (place.country ? ", " + place.country : "");

        document.getElementById("temperature").textContent =
            current.temperature_2m + "°C";

        document.getElementById("condition").textContent =
            conditions[current.weather_code] || "Weather conditions unavailable";

        document.getElementById("humidity").textContent =
            "Humidity: " + current.relative_humidity_2m + "%";

        document.getElementById("wind").textContent =
            "Wind speed: " + current.wind_speed_10m + " km/h";

        message.textContent = "";

    } catch (error) {
        message.textContent = "Unable to get weather. Check your internet.";
    }
}
