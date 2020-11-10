import React, { useState } from "react";
import PageHeader from "./PageHeader";
import SubHeader from "./SubHeader";
import Drawer from "./Drawer";
import NewsArea from "./NewsArea";
import InfoApps from "./InfoApps";

import "../App.css";

const Landing = () => {
    const [section, setSection] = useState("All");
    const [country, setCountry] = useState("nz");
    const [theme, setTheme] = useState("light");

    const SubHeadingValues = [
        "Todays Headlines",
        "National News",
        "COVID-19",
        "Politics",
        "Sports",
    ];

    const NewsSection = SubHeadingValues.map((subheading, i) => (
        <div>
            <SubHeader Subheading={subheading} theme={theme} />
            <NewsArea country={country} index={i} theme={theme} />
        </div>
    ));

    // Event handler which updates and specifies section to display based on option selected in Drawer component
    const handleSectionChange = (e) => {
        e.preventDefault();
        setSection(e.target.innerText);
    };

    // Event handler which updates and specifies country to display based on option selected in Drawer component
    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    const handleThemeChange = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    // Return based on state
    switch (section) {
        case "All":
            return (
                <>
                    <div className="drawer">
                        <Drawer
                            onChange={handleCountryChange}
                            onClick={handleSectionChange}
                            country={country}
                            theme={theme}
                        />
                    </div>
                    <div className={theme === "light" ? "main" : "mainDark"}>
                        <PageHeader onClick={handleThemeChange} theme={theme} />
                        <InfoApps theme={theme} />
                        {NewsSection}
                    </div>
                </>
            );
            break;
        case "Headlines":
            return (
                <>
                    <div className="drawer">
                        <Drawer
                            onChange={handleCountryChange}
                            onClick={handleSectionChange}
                            country={country}
                            theme={theme}
                        />
                    </div>
                    <div className={theme === "light" ? "main" : "mainDark"}>
                        <PageHeader onClick={handleThemeChange} theme={theme} />
                        <InfoApps theme={theme} />
                        <SubHeader
                            Subheading={SubHeadingValues[0]}
                            theme={theme}
                        />
                        <NewsArea country={country} index={0} theme={theme} />
                    </div>
                </>
            );
            break;
        case "National":
            return (
                <>
                    <div className="drawer">
                        <Drawer
                            onChange={handleCountryChange}
                            onClick={handleSectionChange}
                            country={country}
                            theme={theme}
                        />
                    </div>
                    <div className={theme === "light" ? "main" : "mainDark"}>
                        <PageHeader onClick={handleThemeChange} theme={theme} />
                        <InfoApps theme={theme} />
                        <SubHeader
                            Subheading={SubHeadingValues[1]}
                            theme={theme}
                        />
                        <NewsArea country={country} index={1} theme={theme} />
                    </div>
                </>
            );
            break;
        case "COVID-19":
            return (
                <>
                    <div className="drawer">
                        <Drawer
                            onChange={handleCountryChange}
                            onClick={handleSectionChange}
                            country={country}
                            theme={theme}
                        />
                    </div>
                    <div className={theme === "light" ? "main" : "mainDark"}>
                        <PageHeader onClick={handleThemeChange} theme={theme} />
                        <InfoApps theme={theme} />
                        <SubHeader
                            Subheading={SubHeadingValues[2]}
                            theme={theme}
                        />
                        <NewsArea country={country} index={2} theme={theme} />
                    </div>
                </>
            );
            break;
        case "Politics":
            return (
                <>
                    <div className="drawer">
                        <Drawer
                            onChange={handleCountryChange}
                            onClick={handleSectionChange}
                            country={country}
                            theme={theme}
                        />
                    </div>
                    <div className={theme === "light" ? "main" : "mainDark"}>
                        <PageHeader onClick={handleThemeChange} theme={theme} />
                        <InfoApps theme={theme} />
                        <SubHeader
                            Subheading={SubHeadingValues[3]}
                            theme={theme}
                        />
                        <NewsArea country={country} index={3} theme={theme} />
                    </div>
                </>
            );
            break;
        case "Sport":
            return (
                <>
                    <div className="drawer">
                        <Drawer
                            onChange={handleCountryChange}
                            onClick={handleSectionChange}
                            country={country}
                            theme={theme}
                        />
                    </div>
                    <div className={theme === "light" ? "main" : "mainDark"}>
                        <PageHeader onClick={handleThemeChange} theme={theme} />
                        <InfoApps theme={theme} />
                        <SubHeader
                            Subheading={SubHeadingValues[4]}
                            theme={theme}
                        />
                        <NewsArea country={country} index={4} theme={theme} />
                    </div>
                </>
            );
            break;
        default:
            return (
                <>
                    <div className="drawer">
                        <Drawer
                            onChange={handleCountryChange}
                            onClick={handleSectionChange}
                            country={country}
                            theme={theme}
                        />
                    </div>
                    <div className={theme === "light" ? "main" : "mainDark"}>
                        <PageHeader onClick={handleThemeChange} theme={theme} />
                        <InfoApps theme={theme} />
                        {NewsSection}
                    </div>
                </>
            );
    }
};

export default Landing;
