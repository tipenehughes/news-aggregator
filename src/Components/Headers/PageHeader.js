import React, { useState, useEffect } from "react";
import ThemeSelector from "../Utilities/ThemeSelector";
import MobileMenuButton from "../Menu/MobileMenuButton/MobileMenuButton";
import styles from "./Header.module.css";

const PageHeader = ({
    handleThemeChange,
    theme,
    handleSetMenuOpen,
    menuOpen,
}) => {
    const [pageWidth, setPageWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            return setPageWidth(window.innerWidth);
        });
    }, []);

    return (
        <div
            className={`${styles.header} ${styles.mainHeader} ${
                theme === "dark" && styles.headerDark
            }`}
        >
            <h1>Todays News</h1>
            {pageWidth <= 480 && (
                <MobileMenuButton
                    handleSetMenuOpen={handleSetMenuOpen}
                    menurOpen={menuOpen}
                    theme={theme}
                />
            )}
            {pageWidth > 480 && (
                <ThemeSelector
                    handleThemeChange={handleThemeChange}
                    theme={theme}
                />
            )}
        </div>
    );
};

export default PageHeader;
