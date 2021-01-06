import React from "react";
import NewsItem from "./NewsItem";
import Headlines from "./Headlines";

import styles from "../Css/NewsArea.module.css";

const NewsArea = ({
    index,
    theme,
    headlines,
    national,
    covid,
    politics,
    sport,
}) => {
    if (index === 0) {
        return (
            <div className={styles.NewsArea}>
                <Headlines headlines={headlines} theme={theme}/>
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
