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
            <button
                onClick={handleThemeChange}
                className={styles.buttonContainer}
                style={{
                    justifyContent:
                        theme === "dark" ? "flex-end" : "flex-start",
                }}
            >
                {theme === "light" ? (
                    <FontAwesomeIcon icon={faMoon} className={styles.icon} />
                ) : (
                    <FontAwesomeIcon icon={faSun} className={styles.icon} />
                )}
            </button>
        </div>
    );
};

export default ThemeSelector;
