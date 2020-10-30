import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

import styles from "../Css/NewsArea.module.css";

const NewsArea = ({ index }) => {
    const APP_KEY = "b27cf49d70cd463a94847f960c9ecff1";
    const COUNTRY_ID = "country=nz&";

    const [headlines, setHeadlines] = useState([]);
    const [sport, setSport] = useState([]);

    useEffect(() => {
        getNews();
        getSport();
    }, []);

    const getNews = async () => {
        const response = await fetch(
            `http://newsapi.org/v2/top-headlines?${COUNTRY_ID}apiKey=${APP_KEY}`
        );
        const data = await response.json();
        setHeadlines(data.articles);
    };
    const getSport = async () => {
        const response = await fetch(
            `http://newsapi.org/v2/top-headlines?${COUNTRY_ID}category=sports&apiKey=${APP_KEY}`
        );
        const data = await response.json();
        setSport(data.articles);
    };

    return (
        <div className={styles.NewsArea}>
            {headlines.map((newsInfo) => (
                <NewsItem
                    title={newsInfo.title}
                    image={newsInfo.urlToImage}
                    url={newsInfo.url}
                    source={newsInfo.source.name}
                    description={newsInfo.description}
                    index={index}
                />
            ))}
        </div>
    );
};

export default NewsArea;
