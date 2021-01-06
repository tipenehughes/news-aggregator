import React from "react";
import HeadlinesItem from "./HeadlinesItem";

import styles from "../Css/Headlines.module.css";

const Headlines = ({ headlines, theme }) => {
    return (
        <div className={styles.gridContainer}>
            <HeadlinesItem headlines={headlines} theme={theme}/>            
        </div>
    );
};

export default Headlines;
