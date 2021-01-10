import React from "react";
import NewsItem from "./NewsItem";

import styles from "./NewsArea.module.css";

const NewsArea = ({ index, theme, data }) => {
    return (
        <div className={styles.newsArea}>
            {data.map((newsInfo) => (
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
};

export default NewsArea;
