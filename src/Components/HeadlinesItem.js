import React from "react";

import styles from "../Css/Headlines.module.css";

const HeadlinesItem = ({ headlines, theme }) => {
    const truncateString = (str) => {
        if (str === null) {
            return str;
        } else if (str.length < 120) {
            return str;
        } else {
            return str.slice(0, 120) + "...";
        }
    };

    const h = headlines.slice(0, 9).map((newsInfo, i) => {
        const { urlToImage, source, title, description, url } = newsInfo;        

        const backgroundStyle = {
            background: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 80%) no-repeat center center / cover,
   url("${urlToImage}") no-repeat center center / cover`,
        };
        const backgroundStyleNull = {
            background: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 80%) no-repeat center center / cover,
            url("${require("../img/news.png")}") no-repeat center center / cover`,
        };

        return (
            <div
                className={`${styles.gridItem} ${theme === "dark" && styles.gridItemDark} ${styles["gridItem" + i]}`}
                style={
                    urlToImage === null ? backgroundStyleNull : backgroundStyle
                }
            >
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <div className={styles.source}>
                        <h3>{source.name}</h3>
                    </div>
                    <div className={styles.title}>
                        <h4>{truncateString(title).split(" -")[0]}</h4>
                    </div>
                    {i >= 1 && i <= 4 ? (
                        <></>
                    ) : (
                        <div className={styles.description}>
                            <p>{truncateString(description)}</p>
                        </div>
                    )}
                </a>
            </div>
        );
    });
    return <>{h}</>;
};

export default HeadlinesItem;
