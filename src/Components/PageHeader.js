import React from "react";
import Theme from "./Theme";
import styles from "../Css/Header.module.css";

const PageHeader = ({ onClick, theme }) => {
    return (
        <div className={theme === "light" ? styles.Header : styles.HeaderDark}>
            <h1>My News</h1>
            <Theme onClick={onClick} theme={theme} />
        </div>
    );
};

export default PageHeader;
