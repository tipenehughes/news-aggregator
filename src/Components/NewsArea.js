import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

import styles from "../Css/NewsArea.module.css";

const NewsArea = ({ index }) => {
    const APP_KEY = process.env.REACT_APP_NEWSAPI_KEY;
    const COUNTRY_ID = "country=nz&";

    const [headlines, setHeadlines] = useState([]);
    const [national, setNational] = useState([]);
    const [politics, setPolitics] = useState([]);
    const [sport, setSport] = useState([]);

    useEffect(() => {
        getNews();
        getNational();
        getPolitics();
        getSport();
    }, []);

    const getNews = async () => {
        const response = await fetch(
            `http://newsapi.org/v2/everything?domains=stuff.co.nz,rnz.co.nz,nzherald.co.nz,newshub.co.nz&apiKey=${APP_KEY}`
        );
        const data = await response.json();
        setHeadlines(data.articles);
    };
    const getNational = async () => {
        const response = await fetch(
            `http://newsapi.org/v2/everything?q=national&domains=stuff.co.nz,rnz.co.nz,nzherald.co.nz,newshub.co.nz&apiKey=${APP_KEY}`
        );
        const data = await response.json();
        setNational(data.articles);
    };
    const getPolitics = async () => {
        const response = await fetch(
            `http://newsapi.org/v2/everything?q=politics&domains=stuff.co.nz,rnz.co.nz,nzherald.co.nz,newshub.co.nz&apiKey=${APP_KEY}`
        );
        const data = await response.json();
        setPolitics(data.articles);
    };
    const getSport = async () => {
        const response = await fetch(
            `http://newsapi.org/v2/top-headlines?${COUNTRY_ID}category=sports&apiKey=${APP_KEY}`
        );
        const data = await response.json();
        setSport(data.articles);
    };
    if (index === 0) {
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
                        key={Math.floor(Math.random() * 10000)}
                    />
                ))}
            </div>
        );
    } else if (index === 1) {
        return (
            <div className={styles.NewsArea}>
                {national.map((newsInfo) => (
                    <NewsItem
                        title={newsInfo.title}
                        image={newsInfo.urlToImage}
                        url={newsInfo.url}
                        source={newsInfo.source.name}
                        description={newsInfo.description}
                        index={index}
                        key={Math.floor(Math.random() * 10000)}
                    />
                ))}
            </div>
        );
    } else if (index === 2) {
        return (
            <div className={styles.NewsArea}>
                {politics.map((newsInfo) => (
                    <NewsItem
                        title={newsInfo.title}
                        image={newsInfo.urlToImage}
                        url={newsInfo.url}
                        source={newsInfo.source.name}
                        description={newsInfo.description}
                        index={index}
                        key={Math.floor(Math.random() * 10000)}
                    />
                ))}
            </div>
        );
    } else if (index === 3) {
        return (
            <div className={styles.NewsArea}>
                {sport.map((newsInfo) => (
                    <NewsItem
                        title={newsInfo.title}
                        image={newsInfo.urlToImage}
                        url={newsInfo.url}
                        source={newsInfo.source.name}
                        description={newsInfo.description}
                        index={index}
                        key={Math.floor(Math.random() * 10000)}
                    />
                ))}
            </div>
        );
    }
};

export default NewsArea;
