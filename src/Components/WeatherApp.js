import React, { useState, useEffect } from "react";

import styles from "../Css/WeatherApp.module.css";

const WeatherApp = () => {
    const APP_KEY = "1VGxV9PSzi2JnpgpSqDnQi6c0m1BXYas";

    const [weather, setWeather] = useState([]);

    const getWeather = async () => {};

    return (
        <div className={styles.weatherApp}>
            <div className={styles.weatherHeading}>
                <h2>Rockland County</h2>
            </div>
            <div className={styles.currentWeather}>
                <div>
                    <h3>Sunny</h3>
                    <p>
                        20&#176;<span>c</span>
                    </p>
                </div>
                <i className="fas fa-cloud-sun-rain"></i>
            </div>
            <div className={styles.upcomingWeatherContainer}>
                <div className={styles.upcomingWeather}>
                    <p>Today</p>
                    <i className="fas fa-cloud-sun"></i>
                    <p>25&#176;c</p>
                    <p>15&#176;c</p>
                </div>
                <div className={styles.upcomingWeather}>
                    <p>Tues</p>
                    <i className="fas fa-cloud-sun-rain"></i>
                    <p>25&#176;c</p>
                    <p>15&#176;c</p>
                </div>
                <div className={styles.upcomingWeather}>
                    <p>Wed</p>
                    <i className="fas fa-cloud-sun"></i>
                    <p>25&#176;c</p>
                    <p>15&#176;c</p>
                </div>
                <div className={styles.upcomingWeather}>
                    <p>Thurs</p>
                    <i className="fas fa-sun"></i>
                    <p>25&#176;c</p>
                    <p>15&#176;c</p>
                </div>
                <div className={styles.upcomingWeather}>
                    <p>Fri</p>
                    <i className="fas fa-sun"></i>
                    <p>25&#176;c</p>
                    <p>15&#176;c</p>
                </div>
            </div>
            <div className={styles.temperatureUnit}>
                <button>C</button>
                <button>F</button>
            </div>
        </div>
    );
};

export default WeatherApp;
