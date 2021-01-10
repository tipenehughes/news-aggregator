import React from "react";
import HeadlinesItem from "./HeadlinesItem";
import SubHeader from "../Headers/SubHeader";

import styles from "./Headlines.module.css";

const Headlines = ({ headlines, theme }) => {
    return (
        <div className={`${"landing"} ${theme === "dark" && "landingDark"}`}>
            <SubHeader Subheading={"Headlines"} theme={theme} />
            <div className="newsArea">
                <div className={styles.gridContainer}>
                    <HeadlinesItem headlines={headlines} theme={theme} />
                </div>
            </div>
        </div>
    );
};

export default Headlines;
