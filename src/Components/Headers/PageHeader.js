import React, { useState, useEffect } from "react";
import ThemeSelector from "../Utilities/ThemeSelector";
import MobileMenuButton from "../Menu/MobileMenuButton";
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
            className={`${styles.Header} ${
                theme === "dark" && styles.HeaderDark
            }`}
        >
            <h1>My News</h1>
            {pageWidth <= 480 && (
                <MobileMenuButton
                    handleSetMenuOpen={handleSetMenuOpen}
                    menurOpen={menuOpen}
                    theme={theme}
                />
            )}
            {pageWidth > 480 && (
                <ThemeSelector handleThemeChange={handleThemeChange} theme={theme} />
            )}
        </div>
    );
};

export default PageHeader;
