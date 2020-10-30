import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import styles from "../Css/PageHeader.module.css";

const PageHeader = () => {
    return (
        <div className={styles.PageHeader}>
            <h1>My News</h1>
        </div>
    );
};

export default PageHeader;
