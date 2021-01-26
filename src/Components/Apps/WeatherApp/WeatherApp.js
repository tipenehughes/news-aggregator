import React, { useState } from "react";
import { useQuery } from "react-query";

import UpcomingWeather from "./UpcomingWeather";
import Spinner from "../../Utilities/Spinner";

import sun from "../../../img/icons/sun.svg";
import cloud from "../../../img/icons/cloud.svg";
import drizzle from "../../../img/icons/drizzle.svg";
import rain from "../../../img/icons/rain.svg";
import thunder from "../../../img/icons/thunder.svg";
import snow from "../../../img/icons/snow.svg";
import fog from "../../../img/icons/fog.svg";
import wind from "../../../img/icons/wind.svg";

import styles from "./WeatherApp.module.css";

const WeatherApp = ({ theme }) => {
    const APP_KEY = process.env.REACT_APP_OPENWEATHER_KEY;
    const MAPS_APP_KEY = process.env.REACT_APP_GOOGLEMAPS_KEY;

    const [units, setUnits] = useState("metric");
    const [unitSymbol, setUnitSymbol] = useState("c");

    const getCoordinates = () => {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    };

    const getWeather = async (units) => {
        const position = await getCoordinates();
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&units=${units}&appid=${APP_KEY}`
        );
        const data = await response.json();
        return data;
    };

    const getLocation = async () => {
        const position = await getCoordinates();
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&result_type=locality&key=${MAPS_APP_KEY}`
        );
        const data = await response.json();
        const address =
            data.results[0] === undefined
                ? ""
                : data.results[0].formatted_address
                      .match(/[^,]+,[^,]+/g)
                      .toString();
        return address;
    };

    const { data: weather, isLoading } = useQuery(["weather", units], () =>
        getWeather(units)
    );
    const { data: location } = useQuery(["location"], getLocation);
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
                return sun;
                break;
            case "Thunderstorm":
                return thunder;
                break;
            case "Drizzle":
                return drizzle;
                break;
            case "Rain":
                return rain;
                break;
            case "Snow":
                return snow;
                break;
            case "Clouds":
                return cloud;
                break;
            case "Mist":
                return cloud;
                break;
            case "Fog":
                return fog;
                break;
            case "Haze":
                return cloud;
                break;
            case "Squall":
                return wind;
                break;
            default:
                return sun;
        }
    };

    return (
        <div
            className={`${styles.weatherApp} ${
                theme === "dark" && styles.weatherAppDark
            }`}
        >
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    {" "}
                    <div
                        className={`${styles.weatherHeading} ${
                            theme === "dark" && styles.weatherHeadingDark
                        }`}
                    >
                        <h2>{location}</h2>
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
                                src={weatherSymbol(
                                    weather.current.weather[0].main
                                )}
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
                        theme={theme}
                    />
                    <div className={styles.temperatureUnit}>
                        <button onClick={handleClickUnits}>C</button>
                        <button onClick={handleClickUnits}>F</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default WeatherApp;
