import React from "react";
import WeatherApp from "./WeatherApp/WeatherApp";
import StockApp from "./StockApp/StockApp";
import RedditApp from "./RedditApp/RedditApp";

import styles from "./InfoApps.module.css";

const InfoApps = ({ theme }) => {
    return (
        <div className={styles.infoApps}>
            <WeatherApp theme={theme} />
            <StockApp theme={theme} />
            <RedditApp theme={theme} />
        </div>
    );
};

export default InfoApps;
