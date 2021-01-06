import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "../Css/Theme.module.css";

const MobileMenuButton = ({ handleSetDrawerOpen, drawerOpen, theme }) => {
    return (
        <div
            className={`${styles.theme} ${
                theme === "dark" && styles.themeDark
            }`}
        >
            <button onClick={handleSetDrawerOpen}>
                {!drawerOpen === true ? (
                    <FontAwesomeIcon icon={faBars} />
                ) : (
                    <FontAwesomeIcon icon={faTimes} />
                )}
            </button>
        </div>
    );
};

export default MobileMenuButton;
