import React from "react";
import CountrySelector from "./CountrySelector";
import styles from "../Css/Drawer.module.css";

const Drawer = ({ onClick, onChange }) => {
    return (
        <div className={styles.Drawer}>
            <div>
                
                <button href="#" onClick={onClick}>
                    All
                </button>
                <button href="#" onClick={onClick}>
                    Headlines
                </button>
                <button href="#" onClick={onClick}>
                    National
                </button>
                <button href="#" onClick={onClick}>
                    COVID-19
                </button>
                <button href="#" onClick={onClick}>
                    Politics
                </button>
                <button href="#" onClick={onClick}>
                    Sport
                </button>
                <CountrySelector onChange={onChange} />
            </div>
        </div>
    );
};

export default Drawer;
