import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import styles from "../Css/Theme.module.css";

const Theme = ({ onClick, theme }) => {
    return (
        <div className={theme === "light" ? styles.theme : styles.themeDark}>
            <button onClick={onClick}>
                {theme === "light" ? (
                    <FontAwesomeIcon icon={faMoon} />
                ) : (
                    <FontAwesomeIcon icon={faSun} />
                )}
            </button>
        </div>
    );
};

export default Theme;
