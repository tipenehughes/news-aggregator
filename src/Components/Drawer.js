import React from "react";
import CountrySelector from "./CountrySelector";
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
    theme,
    drawerOpen,
}) => {
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
            className={`${styles.Drawer} ${
                theme === "dark" && styles.DrawerDark
            } ${drawerOpen && styles.DrawerOpen}`}
        >
            <div>
                {buttons.map((data, i) => {
                    return (
                        <button key={i} onClick={handleSectionChange}>
                            <FontAwesomeIcon
                                className={styles.fontAwesome}
                                icon={data[1]}
                            />
                            {data[0]}
                        </button>
                    );
                })}
                <CountrySelector handleCountryChange={handleCountryChange} />
            </div>
        </div>
    );
};

export default Drawer;
