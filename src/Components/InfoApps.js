import React from "react";
import WeatherApp from "./WeatherApp/WeatherApp";
import StockApp from "./StockApp/StockApp";

import styles from "../Css/InfoApps.module.css";

const InfoApps = () => {
    return (
        <div className={styles.InfoApps}>
            <WeatherApp />
            <StockApp />
        </div>
    );
};

export default InfoApps;
