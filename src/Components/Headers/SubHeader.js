import React from "react";

import styles from "./Header.module.css";

const SubHeader = ({ Subheading, theme }) => {
    return (
        <div
            className={`${styles.header} ${
                theme === "dark" && styles.headerDark
            }`}
        >
            <h2>{Subheading}</h2>
        </div>
    );
};

export default SubHeader;
