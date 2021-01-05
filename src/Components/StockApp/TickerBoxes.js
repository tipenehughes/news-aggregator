import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

import styles from "../../Css/StockApp.module.css";

const TickerBoxes = ({ price, theme }) => {
    const percent = (v) => {
        let value = v * 100;
        return value.toFixed(2) + "%";
    };

    const Tickers = Object.entries(price).map((data, i) => (
        <div className={styles.stockTiles} key={i}>
            <div
                className={`${styles.tickerSymbol} ${
                    theme === "dark" && styles.tickerSymbolDark
                }`}
            >
                <h4>{data[1].quote.symbol}</h4>
            </div>
            <div className={styles.stockName}>
                <p>{data[1].quote.companyName}</p>
            </div>
            <div className={styles.currentPrice}>
                <p>{"$" + data[1].quote.latestPrice.toFixed(2)}</p>
            </div>
            <div
                className={
                    data[1].quote.changePercent > 0
                        ? styles.movementUp
                        : styles.movementDown
                }
            >
                <span>
                    <FontAwesomeIcon
                        icon={
                            data[1].quote.changePercent > 0
                                ? faArrowUp
                                : faArrowDown
                        }
                    />
                </span>
                <p>{percent(data[1].quote.changePercent)}</p>
            </div>
        </div>
    ));

    return <>{Tickers}</>;
};

export default TickerBoxes;
