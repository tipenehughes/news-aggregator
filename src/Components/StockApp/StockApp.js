import React, { useState, useEffect } from "react";
import Spinner from "../Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import styles from "../../Css/StockApp.module.css";

const StockApp = () => {
    const APP_KEY = process.env.REACT_APP_IEX_KEY;

    const [price, setPrice] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getPrice();
    }, []);

    const getPrice = async () => {
        const response = await fetch(
            `https://cloud.iexapis.com/v1/stock/market/batch?types=quote&symbols=spy,tsla,amzn,goog,fb,msft,aapl,nflx&token=${APP_KEY}`
        );
        const data = await response.json();
        setPrice(data);
        setIsLoading(false);
        console.log(price);
    };

    return isLoading ? (
        <Spinner />
    ) : (
        <div className={styles.stockApp}>
            <div className={styles.stockHeading}>
                <h2>Stocks</h2>
            </div>
            <div className={styles.stockTilesContainer}>
                <div className={styles.stockTiles}>
                    <div className={styles.tickerSymbol}>
                        <h4>SPY</h4>
                    </div>
                    <div className={styles.stockName}>
                        <p>SPDR S&P 500 ETF Trust</p>
                    </div>
                    <div className={styles.currentPrice}>
                        <p>$326.43</p>
                    </div>
                    <div className={styles.movement}>
                        <span>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </span>
                        <p>2.13%</p>
                    </div>
                </div>
                <div className={styles.stockTiles}>
                    <div className={styles.tickerSymbol}>
                        <h4>SPY</h4>
                    </div>
                    <div className={styles.stockName}>
                        <p>SPDR S&P 500 ETF Trust</p>
                    </div>
                    <div className={styles.currentPrice}>
                        <p>$326.43</p>
                    </div>
                    <div className={styles.movement}>
                        <span>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </span>
                        <p>2.13%</p>
                    </div>
                </div>
                <div className={styles.stockTiles}>
                    <div className={styles.tickerSymbol}>
                        <h4>SPY</h4>
                    </div>
                    <div className={styles.stockName}>
                        <p>SPDR S&P 500 ETF</p>
                    </div>
                    <div className={styles.currentPrice}>
                        <p>$326.43</p>
                    </div>
                    <div className={styles.movement}>
                        <span>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </span>
                        <p>2.13%</p>
                    </div>
                </div>
                <div className={styles.stockTiles}>
                    <div className={styles.tickerSymbol}>
                        <h4>SPY</h4>
                    </div>
                    <div className={styles.stockName}>
                        <p>SPDR S&P 500 ETF Trust</p>
                    </div>
                    <div className={styles.currentPrice}>
                        <p>$326.43</p>
                    </div>
                    <div className={styles.movement}>
                        <span>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </span>
                        <p>2.13%</p>
                    </div>
                </div>
                <div className={styles.stockTiles}>
                    <div className={styles.tickerSymbol}>
                        <h4>SPY</h4>
                    </div>
                    <div className={styles.stockName}>
                        <p>SPDR S&P 500 ETF Trust</p>
                    </div>
                    <div className={styles.currentPrice}>
                        <p>$326.43</p>
                    </div>
                    <div className={styles.movement}>
                        <span>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </span>
                        <p>2.13%</p>
                    </div>
                </div>
                <div className={styles.stockTiles}>
                    <div className={styles.tickerSymbol}>
                        <h4>SPY</h4>
                    </div>
                    <div className={styles.stockName}>
                        <p>SPDR S&P 500 ETF Trust</p>
                    </div>
                    <div className={styles.currentPrice}>
                        <p>$326.43</p>
                    </div>
                    <div className={styles.movement}>
                        <span>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </span>
                        <p>2.13%</p>
                    </div>
                </div>
                <div className={styles.stockTiles}>
                    <div className={styles.tickerSymbol}>
                        <h4>SPY</h4>
                    </div>
                    <div className={styles.stockName}>
                        <p>SPDR S&P 500 ETF Trust</p>
                    </div>
                    <div className={styles.currentPrice}>
                        <p>$326.43</p>
                    </div>
                    <div className={styles.movement}>
                        <span>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </span>
                        <p>2.13%</p>
                    </div>
                </div>
                <div className={styles.stockTiles}>
                    <div className={styles.tickerSymbol}>
                        <h4>SPY</h4>
                    </div>
                    <div className={styles.stockName}>
                        <p>SPDR S&P 500 ETF Trust</p>
                    </div>
                    <div className={styles.currentPrice}>
                        <p>$326.43</p>
                    </div>
                    <div className={styles.movement}>
                        <span>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </span>
                        <p>2.13%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StockApp;
