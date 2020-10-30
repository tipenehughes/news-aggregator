import React from "react";
import styles from "../Css/NewsItem.module.css";

const NewsItem = ({ title, image, url, source, description, index }) => {
    const truncateString = (str) => {
        if (str.length < 120) {
            return str;
        } else {
            return str.slice(0, 120) + "...";
        }
    }

    return (
        <div className={styles.NewsItem}>
            <img src={image} alt="" />
            <h3>{source}</h3>
            <h4>{truncateString(title)}</h4>
            <p>{truncateString(description)}</p>
            <a href={url} target="_blank">
                Read More
            </a>
        </div>
    );
};

export default NewsItem;
