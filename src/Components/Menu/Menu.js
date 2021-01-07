import React, { useState, useEffect } from "react";
import CountrySelector from "./CountrySelector/CountrySelector";
import ThemeSelector from "../Utilities/ThemeSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faNewspaper,
    faPlusSquare,
    faFootballBall,
    faGlobe,
    faLandmark,
    faFlagUsa,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Menu.module.css";

const Menu = ({
    handleSectionChange,
    handleCountryChange,
    handleThemeChange,
    handleSetmenuOpen,
    theme,
    menuOpen,
}) => {
    const [pageWidth, setPageWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            return setPageWidth(window.innerWidth);
        });
    }, []);

    const buttons = [
        ["All", faGlobe],
        ["Headlines", faNewspaper],
        ["National", faFlagUsa],
        ["COVID-19", faPlusSquare],
        ["Politics", faLandmark],
        ["Sport", faFootballBall],
    ];
    return (
        <div
            className={`${styles.menu} ${
                theme === "dark" && styles.menuDark
            } ${menuOpen && styles.menuOpen}`}
        >
            {pageWidth <= 480 && (
                <ThemeSelector handleThemeChange={handleThemeChange} theme={theme} />
            )}
            <div
                className={`${styles.buttonContainer} ${
                    theme === "dark" && styles.buttonContainerDark
                }`}
            >
                {buttons.map((data, i) => {
                    return (
                        <button
                            key={i}
                            onClick={(e) => {
                                handleSectionChange(e); handleSetmenuOpen();
                            }}
                        >
                            <FontAwesomeIcon
                                className={styles.fontAwesome}
                                icon={data[1]}
                            />
                            {data[0]}
                        </button>
                    );
                })}
            </div>
            <CountrySelector handleCountryChange={handleCountryChange} />
        </div>
    );
};

export default Menu;
