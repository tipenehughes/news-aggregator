import React from "react";

import styles from "../Css/SubHeader.module.css";

const SubHeader = ({ Subheading }) => {
    return (
        <div className={styles.SubHeader}>
            <h2>{Subheading}</h2>
        </div>
    );
};

export default SubHeader;
