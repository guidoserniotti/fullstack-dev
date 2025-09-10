const Weather = ({ country, weatherState }) => {
    // Verificar que weather tiene los datos necesarios
    if (!weatherState.main) {
        return <div>Loading weather data...</div>;
    }

    return (
        <div>
            <h2>Weather in {country.capital[0]}</h2>
            <p>Temperature: {weatherState.main.temp} Celsius</p>
            <img
                src={`https://openweathermap.org/img/wn/${weatherState.weather[0].icon}@2x.png`}
                alt={weatherState.weather[0].description}
            />
            <p>Wind: {weatherState.wind.speed} m/s</p>
        </div>
    );
};

export default Weather;
