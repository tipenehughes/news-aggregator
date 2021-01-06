import React, { useState, useEffect } from "react";
import Theme from "./Theme";
import MobileMenuButton from "./MobileMenuButton";
import styles from "../Css/Header.module.css";

const PageHeader = ({
    handleThemeChange,
    theme,
    handleSetDrawerOpen,
    drawerOpen,
}) => {
    const [pageWidth, setPageWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            return setPageWidth(window.innerWidth);
        });
    }, []);

    console.log(pageWidth);

    return (
        <div
            className={`${styles.Header} ${
                theme === "dark" && styles.HeaderDark
            }`}
        >
            <h1>My News</h1>
            {pageWidth <= 480 && (
                <MobileMenuButton
                    handleSetDrawerOpen={handleSetDrawerOpen}
                    drawerOpen={drawerOpen}
                    theme={theme}
                />
            )}
            {pageWidth > 480 && (
                <Theme handleThemeChange={handleThemeChange} theme={theme} />
            )}
        </div>
    );
};

export default PageHeader;
