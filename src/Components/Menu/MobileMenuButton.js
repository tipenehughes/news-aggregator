import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "../Utilities/ThemeSelector.module.css";

const MobileMenuButton = ({ handleSetMenuOpen, menuOpen, theme }) => {
    return (
        <div
            className={`${styles.theme} ${
                theme === "dark" && styles.themeDark
            }`}
        >
            <button onClick={handleSetMenuOpen}>
                {!menuOpen === true ? (
                    <FontAwesomeIcon icon={faBars} />
                ) : (
                    <FontAwesomeIcon icon={faTimes} />
                )}
            </button>
        </div>
    );
};

export default MobileMenuButton;
