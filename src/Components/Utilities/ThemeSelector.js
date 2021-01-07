import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import styles from "./ThemeSelector.module.css";

const ThemeSelector = ({ handleThemeChange, theme }) => {
    return (
        <div
            className={`${styles.theme} ${
                theme === "dark" && styles.themeDark
            }`}
        >
            <button onClick={handleThemeChange}>
                {theme === "light" ? (
                    <FontAwesomeIcon icon={faMoon} />
                ) : (
                    <FontAwesomeIcon icon={faSun} />
                )}
            </button>
        </div>
    );
};

export default ThemeSelector;
