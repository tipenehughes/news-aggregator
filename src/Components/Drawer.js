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
    faKiwiBird,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../Css/Drawer.module.css";

const Drawer = ({ onClick, onChange, country }) => {
    return (
        <div className={styles.Drawer}>
            <div>
                <button href="#" onClick={onClick}>
                    <FontAwesomeIcon
                        className={styles.fontAwesome}
                        icon={faGlobe}
                    />
                    All
                </button>
                <button href="#" onClick={onClick}>
                    <FontAwesomeIcon
                        className={styles.fontAwesome}
                        icon={faNewspaper}
                    />
                    Headlines
                </button>
                <button href="#" onClick={onClick}>
                    <FontAwesomeIcon
                        className={styles.fontAwesome}
                        icon={country === "nz" ? faKiwiBird : faFlagUsa}
                    />
                    National
                </button>
                <button href="#" onClick={onClick}>
                    <FontAwesomeIcon
                        className={styles.fontAwesome}
                        icon={faPlusSquare}
                    />
                    COVID-19
                </button>
                <button href="#" onClick={onClick}>
                    <FontAwesomeIcon
                        className={styles.fontAwesome}
                        icon={faLandmark}
                    />
                    Politics
                </button>
                <button href="#" onClick={onClick}>
                    <FontAwesomeIcon
                        className={styles.fontAwesome}
                        icon={faFootballBall}
                    />
                    Sport
                </button>
                <CountrySelector onChange={onChange} />
            </div>
        </div>
    );
};

export default Drawer;
