import React from "react";

import styles from "../Css/CountrySelector.module.css";

const CountrySelector = ({ handleCountryChange }) => {
    return (
        <form className={styles.countrySelector}>
            <label htmlFor="country">Country:</label>
            <select onChange={handleCountryChange} name="country">
                <option value="nz">New Zealand</option>
                <option value="us">United States</option>
            </select>
        </form>
    );
};

export default CountrySelector;
