import React, { useState, useEffect } from "react";
import CountrySelector from "./CountrySelector";
import Theme from "./Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faNewspaper,
    faPlusSquare,
    faFootballBall,
    faGlobe,
    faLandmark,
    faFlagUsa,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../Css/Drawer.module.css";

const Drawer = ({
    handleSectionChange,
    handleCountryChange,
    handleThemeChange,
    handleSetDrawerOpen,
    theme,
    drawerOpen,
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
            className={`${styles.drawer} ${
                theme === "dark" && styles.drawerDark
            } ${drawerOpen && styles.drawerOpen}`}
        >
            {pageWidth <= 480 && (
                <Theme handleThemeChange={handleThemeChange} theme={theme} />
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
                                handleSectionChange(e); handleSetDrawerOpen();
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

export default Drawer;
