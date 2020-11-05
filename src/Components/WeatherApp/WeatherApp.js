import React, { useState, useEffect } from "react";
import UpcomingWeather from "./UpcomingWeather";
import Spinner from "../Spinner";

import styles from "../../Css/WeatherApp.module.css";

const WeatherApp = () => {
    const APP_KEY = process.env.REACT_APP_OPENWEATHER_KEY;

    const [isLoading, setIsLoading] = useState(true);
    const [weather, setWeather] = useState({});
    const [units, setUnits] = useState("metric");
    const [unitSymbol, setUnitSymbol] = useState("c");

    useEffect(() => {
        getWeather();
    }, [units, unitSymbol]);

    // API call to fetch weather data based on units, and set isLoading to false when completed

    const getWeather = async () => {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=41.086442&lon=-74.033740&exclude=minutely,hourly&units=${units}&appid=${APP_KEY}`
        );
        const data = await response.json();
        setWeather(data);
        setIsLoading(false);
    };

    // Event handler that changes API call and sets unit symbol based on celcius or fahrenheit

    const handleClickUnits = (e) => {
        if (e.target.innerText === "F") {
            setUnits("imperial");
            setUnitSymbol("f");
        }
        if (e.target.innerText === "C") {
            setUnits("metric");
            setUnitSymbol("c");
        }
    };

    // Converting Unix code returned from API into human readable format

    const unixConverter = (unix) => {
        const milliseconds = unix * 1000;
        const dateObject = new Date(milliseconds);
        const humanDateFormat = dateObject.toLocaleString("en-US", {
            weekday: "short",
        });
        return humanDateFormat;
    };

    // Switch statement to dynamically display weather icons based on data returned from API call

    const weatherSymbol = (data) => {
        switch (data) {
            case "Clear":
                return require("../../img/icons/sun.png");
                break;
            case "Thunderstorm":
                return require("../../img/icons/thunder.png");
                break;
            case "Drizzle":
                return require("../../img/icons/cloud.png");
                break;
            case "Rain":
                return require("../../img/icons/rain.png");
                break;
            case "Snow":
                return require("../../img/icons/snow.png");
                break;
            case "Clouds":
                return require("../../img/icons/cloud.png");
                break;
            case "Mist":
                return require("../../img/icons/cloud.png");
                break;
            case "Fog":
                return require("../../img/icons/cloud.png");
                break;
            case "Haze":
                return require("../../img/icons/cloud.png");
                break;
            case "Squall":
                return require("../../img/icons/cloud.png");
                break;
            default:
                return require("../../img/icons/sun.png");
        }
    };

    return isLoading ? (
        <Spinner />
    ) : (
        <div className={styles.weatherApp}>
            <div className={styles.weatherHeading}>
                <h2>Rockland County</h2>
            </div>
            <div className={styles.currentWeather}>
                <div>
                    <h3>{weather.current.weather[0].main}</h3>
                    <p>
                        {Math.floor(weather.current.temp)}&#176;
                        <span>{unitSymbol}</span>
                    </p>
                </div>
                <div className={styles.iconContainer}>
                    <img
                        src={weatherSymbol(weather.current.weather[0].main)}
                        alt={weather.current.weather[0].main}
                    />
                </div>
            </div>
            <UpcomingWeather
                weatherSymbol={weatherSymbol}
                dailyData={weather.daily}
                currentData={weather.current}
                unitSymbol={unitSymbol}
                unixConverter={unixConverter}
            />
            <div className={styles.temperatureUnit}>
                <button onClick={handleClickUnits}>C</button>
                <button onClick={handleClickUnits}>F</button>
            </div>
        </div>
    );
};

export default WeatherApp;
