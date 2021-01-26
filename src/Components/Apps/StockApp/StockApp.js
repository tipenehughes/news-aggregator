import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../Utilities/Spinner";
import TickerBoxes from "./TickerBoxes";

import styles from "./StockApp.module.css";

const StockApp = ({ theme }) => {
    const APP_KEY = process.env.REACT_APP_IEX_KEY;

    const getPrice = async () => {
        const response = await fetch(
            `https://cloud.iexapis.com/v1/stock/market/batch?types=quote&symbols=spy,tsla,amzn,googl,fb,msft,aapl,nflx&token=${APP_KEY}`
        );
        return response.json();
    };

    const { data, isLoading } = useQuery(["price"], getPrice);

    return (
        <div
            className={`${styles.stockApp} ${
                theme === "dark" && styles.stockAppDark
            }`}
        >
            <div
                className={`${styles.stockHeading} ${
                    theme === "dark" && styles.stockHeadingDark
                }`}
            >
                <h2>Stocks</h2>
            </div>
            {isLoading ? (
                <Spinner />
            ) : (
                <div className={styles.stockTilesContainer}>
                    <TickerBoxes price={data} theme={theme} />
                </div>
            )}
        </div>
    );
};

export default StockApp;
