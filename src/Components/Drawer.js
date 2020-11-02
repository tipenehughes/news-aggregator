import React from "react";
import styles from "../Css/Drawer.module.css";

const Drawer = ({ onClick }) => {
    return (
        <div className={styles.Drawer}>
            <div>
                <button href="#" onClick={onClick}>
                    Headlines
                </button>
                <button href="#">National</button>
                <button href="#">Politics</button>
                <button href="#">Sport</button>
            </div>
        </div>
    );
};

export default Drawer;
