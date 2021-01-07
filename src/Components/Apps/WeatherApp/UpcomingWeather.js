import React from "react";

import styles from "./WeatherApp.module.css";

const UpcomingWeather = ({
    weatherSymbol,
    dailyData,
    currentData,
    unitSymbol,
    unixConverter,
    theme,
}) => {
    const futureWeather = dailyData.slice(1, 4).map((data, i) => (
        <div
            className={`${styles.upcomingWeather} ${
                theme === "dark" && styles.upcomingWeatherDark
            }`}
            key={i}
        >
            <p>{unixConverter(dailyData[i + 1].dt)}</p>
            <div className={styles.iconContainer}>
                <img
                    src={weatherSymbol(dailyData[i + 1].weather[0].main)}
                    alt={dailyData[i + 1].weather[0].main}
                />
            </div>
            <p>
                {Math.floor(dailyData[i + 1].temp.max)}&#176;
                {unitSymbol}
            </p>
            <p>
                {Math.floor(dailyData[i + 1].temp.min)}&#176;
                {unitSymbol}
            </p>
        </div>
    ));

    return (
        <div className={styles.upcomingWeatherContainer}>
            <div
                className={`${styles.upcomingWeather} ${
                    theme === "dark" && styles.upcomingWeatherDark
                }`}
            >
                <p>Today</p>
                <div className={styles.iconContainer}>
                    <img
                        src={weatherSymbol(currentData.weather[0].main)}
                        alt={currentData.weather[0].main}
                    />
                </div>
                <p>
                    {Math.floor(dailyData[0].temp.max)}&#176;
                    {unitSymbol}
                </p>
                <p>
                    {Math.floor(dailyData[0].temp.min)}&#176;
                    {unitSymbol}
                </p>
            </div>
            {futureWeather}
        </div>
    );
};

export default UpcomingWeather;
