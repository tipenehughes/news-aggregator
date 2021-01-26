import React from "react";
import styles from "./Spinner.module.css";
import spinner from "../../img/spinner.svg";

const Spinner = () => {
    return <img src={spinner} className={styles.spinner} alt="loading" />;
};

export default Spinner;
