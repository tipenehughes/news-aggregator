import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

import styles from "../Css/NewsArea.module.css";

const NewsArea = ({ index, country, theme }) => {
    const APP_KEY = process.env.REACT_APP_NEWSAPI_KEY;
    const COUNTRY_ID = `country=${country}&`;
    const nz = "&domains=stuff.co.nz,rnz.co.nz,nzherald.co.nz,newshub.co.nz";
    const us = "&domains=cnn.com,foxnews.com,nytimes.com,msnbc.com";

    const [headlines, setHeadlines] = useState([]);
    const [national, setNational] = useState([]);
    const [covid, setCovid] = useState([]);
    const [politics, setPolitics] = useState([]);
    const [sport, setSport] = useState([]);

    useEffect(() => {
        getNews();
        // getNational();
        // getCovid();
        // getPolitics();
        // getSport();
    }, [country]);

    const getNews = async () => {
        const news = fetch(
            country === "us"
                ? `https://newsapi.org/v2/top-headlines?${COUNTRY_ID}apiKey=${APP_KEY}`
                : `https://newsapi.org/v2/top-headlines?${COUNTRY_ID}apiKey=${APP_KEY}`
        );
        const national = fetch(
            country === "us"
                ? `https://newsapi.org/v2/top-headlines?${COUNTRY_ID}apiKey=${APP_KEY}`
                : `http://newsapi.org/v2/everything?q=national${nz}&apiKey=${APP_KEY}`
        );
        const covid = fetch(
            country === "us"
                ? `http://newsapi.org/v2/everything?q=covid${us}&apiKey=${APP_KEY}`
                : `http://newsapi.org/v2/everything?q=covid${nz}&apiKey=${APP_KEY}`
        );
        const politics = fetch(
            country === "us"
                ? `http://newsapi.org/v2/everything?q=politics${us}&apiKey=${APP_KEY}`
                : `http://newsapi.org/v2/everything?q=politics${nz}&apiKey=${APP_KEY}`
        );
        const sport = fetch(
            country === "us"
                ? `http://newsapi.org/v2/top-headlines?${COUNTRY_ID}category=sports&apiKey=${APP_KEY}`
                : `http://newsapi.org/v2/top-headlines?${COUNTRY_ID}category=sports&apiKey=${APP_KEY}`
        );
        await Promise.all([news, national, covid, politics, sport])
            .then((responses) => {
                return Promise.all(
                    responses.map((response) => {
                        return response.json();
                    })
                );
            })
            .then((data) => {
                setHeadlines(data[0].articles);
                setNational(data[1].articles);
                setCovid(data[2].articles);
                setPolitics(data[3].articles);
                setSport(data[4].articles);
            });
    };
    // const getNews = async () => {
    //     const response = await fetch(
    //         country === "us"
    //             ? `https://newsapi.org/v2/top-headlines?${COUNTRY_ID}apiKey=${APP_KEY}`
    //             : `https://newsapi.org/v2/top-headlines?${COUNTRY_ID}apiKey=${APP_KEY}`
    //     );
    //     const data = await response.json();
    //     setHeadlines(data.articles);
    // };

    // const getNational = async () => {
    //     const response = await fetch(
    //         country === "us"
    //             ? `https://newsapi.org/v2/top-headlines?${COUNTRY_ID}apiKey=${APP_KEY}`
    //             : `http://newsapi.org/v2/everything?q=national&domains=stuff.co.nz,rnz.co.nz,nzherald.co.nz,newshub.co.nz&apiKey=${APP_KEY}`
    //     );
    //     const data = await response.json();
    //     setNational(data.articles);
    // };
    // const getCovid = async () => {
    //     const response = await fetch(
    //         country === "us"
    //             ? `http://newsapi.org/v2/everything?q=covid&domains=cnn.com,foxnews.com,nytimes.com,msnbc.com&apiKey=${APP_KEY}`
    //             : `http://newsapi.org/v2/everything?q=covid&domains=stuff.co.nz,rnz.co.nz,nzherald.co.nz,newshub.co.nz&apiKey=${APP_KEY}`
    //     );
    //     const data = await response.json();
    //     setCovid(data.articles);
    // };
    // const getPolitics = async () => {
    //     const response = await fetch(
    //         country === "us"
    //             ? `http://newsapi.org/v2/everything?q=politics&domains=cnn.com,foxnews.com,nytimes.com,msnbc.com&apiKey=${APP_KEY}`
    //             : `http://newsapi.org/v2/everything?q=politics&domains=stuff.co.nz,rnz.co.nz,nzherald.co.nz,newshub.co.nz&apiKey=${APP_KEY}`
    //     );
    //     const data = await response.json();
    //     setPolitics(data.articles);
    // };
    // const getSport = async () => {
    //     const response = await fetch(
    //         country === "us"
    //             ? `http://newsapi.org/v2/top-headlines?${COUNTRY_ID}category=sports&apiKey=${APP_KEY}`
    //             : `http://newsapi.org/v2/top-headlines?${COUNTRY_ID}category=sports&apiKey=${APP_KEY}`
    //     );
    //     const data = await response.json();
    //     setSport(data.articles);
    // };

    if (index === 0) {
        return (
            <div className={styles.NewsArea}>
                {headlines.slice(0, 12).map((newsInfo) => (
                    <NewsItem
                        title={newsInfo.title}
                        image={newsInfo.urlToImage}
                        url={newsInfo.url}
                        source={newsInfo.source.name}
                        description={newsInfo.description}
                        index={index}
                        key={Math.floor(Math.random() * 10000)}
                        theme={theme}
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
                        theme={theme}
                    />
                ))}
            </div>
        );
    } else if (index === 2) {
        return (
            <div className={styles.NewsArea}>
                {covid.map((newsInfo) => (
                    <NewsItem
                        title={newsInfo.title}
                        image={newsInfo.urlToImage}
                        url={newsInfo.url}
                        source={newsInfo.source.name}
                        description={newsInfo.description}
                        index={index}
                        key={Math.floor(Math.random() * 10000)}
                        theme={theme}
                    />
                ))}
            </div>
        );
    } else if (index === 3) {
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
                        theme={theme}
                    />
                ))}
            </div>
        );
    } else if (index === 4) {
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
                        theme={theme}
                    />
                ))}
            </div>
        );
    }
};

export default NewsArea;
