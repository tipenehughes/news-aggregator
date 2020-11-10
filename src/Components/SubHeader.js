import React from "react";

import styles from "../Css/Header.module.css";

const SubHeader = ({ Subheading, theme }) => {
    return (
        <div className={
            theme === "light" ? styles.Header : styles.HeaderDark
        }>
            <h2>{Subheading}</h2>
        </div>
    );
};

export default SubHeader;
