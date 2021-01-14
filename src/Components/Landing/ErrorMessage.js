import React from "react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ msg, theme }) => {
    return (
        <div
            className={`${"landing"} ${theme === "dark" && "landingDark"} ${
                styles.error
            }`}
        >
            <h2>{msg}</h2>
            <h2>
                See my{" "}
                <a
                    href="https://github.com/tipenehughes/news-aggregator"
                    className={styles.errorLink}
                    rel="noreferrer noopener"
                >
                    Github repository
                </a>{" "}
                for instructions on how to run in a local environment
            </h2>
        </div>
    );
};

export default ErrorMessage;
