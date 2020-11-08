import React, { useState, useEffect } from "react";
import Spinner from "../Spinner";
import TickerBoxes from "./TickerBoxes";

import styles from "../../Css/StockApp.module.css";

const StockApp = () => {
    const APP_KEY = process.env.REACT_APP_IEX_KEY;

    const [price, setPrice] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getPrice();
        // const interval = setInterval(function () {
        //     getPrice();
        // }, 30000);
    }, []);

    const getPrice = async () => {
        const response = await fetch(
            `https://cloud.iexapis.com/v1/stock/market/batch?types=quote&symbols=spy,tsla,amzn,googl,fb,msft,aapl,nflx&token=${APP_KEY}`
        );
        const data = await response.json();
        setPrice(data);
        setIsLoading(false);
    };

    return isLoading ? (
        <Spinner />
    ) : (
        <div className={styles.stockApp}>
            <div className={styles.stockHeading}>
                <h2>Stocks</h2>
            </div>
            <div className={styles.stockTilesContainer}>
                <TickerBoxes price={price} />
            </div>
        </div>
    );
};

export default StockApp;
