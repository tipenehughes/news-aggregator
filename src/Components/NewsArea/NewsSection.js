import React from "react";
import { Route } from "react-router-dom";
import NewsArea from "../NewsArea/NewsArea";
import SubHeader from "../Headers/SubHeader";
import styles from "../Landing/Landing.module.css";

const NewsSection = ({ Subheading, theme, country, index, data }) => {
    return (
        <div
            className={`${styles.landing} ${
                theme === "dark" && styles.landingDark
            }`}
        >
            <SubHeader Subheading={Subheading} theme={theme} />
            <NewsArea
                country={country}
                index={index}
                theme={theme}
                data={data}
            />
        </div>
    );
};

export default NewsSection;
