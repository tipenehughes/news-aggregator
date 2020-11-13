import React from "react";

import styles from "../Css/Headlines.module.css";

const HeadlinesItem = ({ headlines }) => {
    const truncateString = (str) => {
        if (str === null) {
            return str;
        } else if (str.length < 120) {
            return str;
        } else {
            return str.slice(0, 120) + "...";
        }
    };

    const h = headlines.slice(0, 9).map((newsInfo, i) => (
        <div className={`${styles.gridItem} ${styles.gridItem + i}`}>
            <div className={styles.source}>
                <h3>{newsInfo.source.name}</h3>
            </div>
            <div className={styles.title}>
                <h4>{truncateString(newsInfo.title).split(" -")[0]}</h4>
            </div>
            <div className={styles.description}>
                <p>{truncateString(newsInfo.description)}</p>
            </div>
            <div className={styles.readMore}>
                <a
                    href={newsInfo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {" "}
                    Read More{" "}
                </a>
            </div>
        </div>
    ));
    return <>{h}</>;
};

export default HeadlinesItem;
