import React from "react";

import styles from "./RedditApp.module.css";

const RedditResults = ({ theme, data, index }) => {
    const redditUrl = "https://www.reddit.com";
    const truncateString = (str) => {
        if (str === null) {
            return str;
        } else if (str.length < 50) {
            return str;
        } else {
            return str.slice(0, 50) + "...";
        }
    };
    return (
        <>
            <div
                className={`${styles.resultsBox} ${
                    theme === "dark" && styles.resultsBoxDark
                }`}
            >
                <div
                    className={`${styles.upvotes} ${
                        theme === "dark" && styles.upvotesDark
                    }`}
                >
                    <p>{data.data.ups}</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.subreddit}>
                        <img src={require("../../../img/fmf.png")} alt="#" />
                        <a
                            href={`${redditUrl}/${data.data.subreddit_name_prefixed}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {data.data.subreddit_name_prefixed}
                        </a>
                    </div>
                    <div className={styles.mainContent}>
                        <div
                            className={`${styles.title} ${
                                theme === "dark" && styles.titleDark
                            }`}
                        >
                            <a
                                href={`${redditUrl}${data.data.permalink}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <h3>{data.data.title}</h3>
                            </a>
                        </div>
                        <a
                            className={`${styles.linkToThread} ${
                                theme === "dark" && styles.linkToThreadDark
                            }`}
                            href={data.data.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {truncateString(data.data.url)}
                        </a>
                    </div>

                    <div className={styles.comments}>
                        <a
                            href={`${redditUrl}${data.data.permalink}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            46 Comments
                        </a>
                    </div>
                </div>
                <div className={styles.image}>
                    {data.data.thumbnail === "default" ||
                    data.data.thumbnail === "self" ? (
                        <></>
                    ) : (
                        <a
                            href={`${redditUrl}${data.data.permalink}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={data.data.thumbnail} alt="" />
                        </a>
                    )}
                </div>
            </div>
        </>
    );
};

export default RedditResults;
