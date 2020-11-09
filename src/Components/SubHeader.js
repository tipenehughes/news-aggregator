import React from "react";

import styles from "../Css/Header.module.css";

const SubHeader = ({ Subheading }) => {
    return (
        <div className={styles.Header}>
            <h2>{Subheading}</h2>
        </div>
    );
};

export default SubHeader;
