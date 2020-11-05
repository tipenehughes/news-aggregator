import React from "react";

import styles from "../Css/CountrySelector.module.css";

const CountrySelector = ({ onChange }) => {
    return (
        <form className={styles.CountrySelector}>
            <label htmlFor="country">Country:</label>
            <select onChange={onChange} name="country">
                <option value="nz">New Zealand</option>
                <option value="us">United States</option>
            </select>
        </form>
    );
};

export default CountrySelector;
