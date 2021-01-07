import React from "react";
import styles from "./NewsItem.module.css";

const NewsItem = ({ title, image, url, source, description, theme }) => {
    const truncateString = (str) => {
        if (str === null) {
            return str;
        } else if (str.length < 120) {
            return str;
        } else {
            return str.slice(0, 120) + "...";
        }
    };
    return (
        <div
            className={`${styles.newsItem} ${
                theme === "dark" && styles.newsItemDark
            }`}
        >
            <div className={styles.image}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <img
                        src={
                            image === null ? require("../../img/news.png") : image
                        }
                        alt=""
                    />
                </a>
            </div>
            <div
                className={`${styles.source} ${
                    theme === "dark" && styles.sourceDark
                }`}
            >
                <h3>{source}</h3>
            </div>
            <div
                className={`${styles.source} ${
                    theme === "dark" && styles.titleDark
                }`}
            >
                <h4>{truncateString(title).split(" -")[0]}</h4>
            </div>
            <div
                className={`${styles.description} ${
                    theme === "dark" && styles.descriptionDark
                }`}
            >
                <p>{truncateString(description)}</p>
            </div>
            <div>
                <a
                    className={`${styles.readMore} ${
                        theme === "dark" && styles.readMoreDark
                    }`}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Read More
                </a>
            </div>
        </div>
    );
};

export default NewsItem;
