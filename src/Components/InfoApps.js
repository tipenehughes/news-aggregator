import React from "react";
import WeatherApp from "./WeatherApp/WeatherApp";
import StockApp from "./StockApp/StockApp";

import styles from "../Css/InfoApps.module.css";

const InfoApps = ({ theme }) => {
    return (
        <div className={styles.InfoApps}>
            <WeatherApp theme={theme} />
            <StockApp theme={theme} />
        </div>
    );
};

export default InfoApps;
