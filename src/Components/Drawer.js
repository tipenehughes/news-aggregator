import React from "react";
import styles from "../Css/Drawer.module.css";

const Drawer = () => {
    return (
        <div className={styles.Drawer}>
            <div>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
        </div>
    );
};

export default Drawer;
