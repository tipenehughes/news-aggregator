import React from "react";

import styles from "./CountrySelector.module.css";

const CountrySelector = ({ handleCountryChange, theme }) => {
    return (
        <form
            className={`${styles.countrySelector} ${
                theme === "dark" && styles.countrySelectorDark
            }`}
        >
            <label htmlFor="country">Country:</label>
            <select onChange={handleCountryChange} name="country">
                <option value="nz">New Zealand</option>
                <option value="us">United States</option>
            </select>
        </form>
    );
};

export default CountrySelector;
