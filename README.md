# weather-dashboard

A modern weather dashboard built using HTML, CSS, and Vanilla JavaScript. The application fetches real-time weather data from the OpenWeatherMap API and dynamically displays weather information for a searched city.

## Features

- Search weather by city name
- Display current temperature
- Display feels-like temperature
- View current weather condition
- Display humidity
- Dynamic weather icons
- Current city display
- Current date display
- Error handling for invalid cities
- Modern two-panel weather dashboard UI

## Tech Stack

- HTML5
- CSS3
- JavaScript
- OpenWeatherMap API

## How It Works

1. The user enters a city name in the search bar.
2. A click event triggers the weather fetch function.
3. JavaScript dynamically creates the API request URL.
4. The Fetch API sends a request to OpenWeatherMap.
5. The JSON response is converted into a JavaScript object.
6. Required weather data is extracted from the response.
7. The DOM is dynamically updated with the latest weather information.

## JavaScript Concepts Used

- DOM Manipulation
- Event Listeners
- Fetch API
- Async/Await
- JSON Parsing
- Template Literals
- Error Handling with `try...catch`
- Functions
- Dynamic Image Rendering

## Project Structure

```text
weather-dashboard/
│
├── index.html
├── style.css
├── script.js
├── cloud.avif
└── README.md
