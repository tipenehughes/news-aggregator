import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./MobileMenuButton.module.css";

const MobileMenuButton = ({ handleSetMenuOpen, menuOpen, theme }) => {
    return (
        <div
            className={`${styles.menuBtn} ${
                theme === "dark" && styles.menuBtnDark
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
