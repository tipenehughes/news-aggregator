import React, { useState } from "react";
import { useQueries } from "react-query";
import PageHeader from "../Headers/PageHeader";
import SubHeader from "../Headers/SubHeader";
import Menu from "../Menu/Menu";
import NewsArea from "../NewsArea/NewsArea";
import InfoApps from "../Apps/InfoApps";

import styles from "./Landing.module.css";

const Landing = () => {
    const [section, setSection] = useState("All");
    const [country, setCountry] = useState("nz");
    const [theme, setTheme] = useState("light");

    const [menuOpen, setMenuOpen] = useState(false);

    const APP_KEY = process.env.REACT_APP_NEWSAPI_KEY;

    const nz = "&domains=stuff.co.nz,rnz.co.nz,nzherald.co.nz,newshub.co.nz";
    const us = "&domains=cnn.com,foxnews.com,nytimes.com,msnbc.com";

    const getHeadlines = async () => {
        const response = await fetch(
            country === "us"
                ? `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${APP_KEY}`
                : `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${APP_KEY}`
        );
        const data = await response.json();
        return data;
    };
    const getNational = async () => {
        const response = await fetch(
            country === "us"
                ? `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${APP_KEY}`
                : `http://newsapi.org/v2/everything?q=national${nz}&apiKey=${APP_KEY}`
        );
        const data = await response.json();
        return data;
    };
    const getCovid = async () => {
        const response = await fetch(
            country === "us"
                ? `http://newsapi.org/v2/everything?q=covid${us}&apiKey=${APP_KEY}`
                : `http://newsapi.org/v2/everything?q=covid${nz}&apiKey=${APP_KEY}`
        );
        const data = await response.json();
        return data;
    };
    const getPolitics = async () => {
        const response = await fetch(
            country === "us"
                ? `http://newsapi.org/v2/everything?q=politics${us}&apiKey=${APP_KEY}`
                : `http://newsapi.org/v2/everything?q=politics${nz}&apiKey=${APP_KEY}`
        );
        const data = await response.json();
        return data;
    };
    const getSport = async () => {
        const response = await fetch(
            country === "us"
                ? `http://newsapi.org/v2/top-headlines?country=${country}&category=sports&apiKey=${APP_KEY}`
                : `http://newsapi.org/v2/top-headlines?country=${country}&category=sports&apiKey=${APP_KEY}`
        );
        const data = await response.json();
        return data;
    };

    const results = useQueries([
        { queryKey: ["headlines", country], queryFn: getHeadlines },
        { queryKey: ["national", country], queryFn: getNational },
        { queryKey: ["covid", country], queryFn: getCovid },
        { queryKey: ["politics", country], queryFn: getPolitics },
        { queryKey: ["sport", country], queryFn: getSport },
    ]);

    const [ headlines, national, covid, politics, sport ] = results;

    const statusArray = results.map(o => o.status);
    const status = (value) => value === "loading";
    console.log(statusArray.every(status));

    const SubHeadingValues = [
        "Todays Headlines",
        "National News",
        "COVID-19",
        "Politics",
        "Sports",
    ];

    const NewsSection = SubHeadingValues.map((subheading, i) => (
        <>
            <SubHeader Subheading={subheading} theme={theme} />
            <NewsArea
                country={country}
                index={i}
                theme={theme}
                headlines={headlines}
                national={national}
                covid={covid}
                politics={politics}
                sport={sport}
            />
        </>
    ));

    // Event handler which updates and specifies section to display based on option selected in Menu component
    const handleSectionChange = (e) => {
        e.preventDefault();
        setSection(e.target.innerText);
    };

    // Event handler which updates and specifies country to display based on option selected in Menu component
    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    // Event handler to toggle between light and dark theme

    const handleThemeChange = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    // Event handle to toggle mobile menu
    const handleSetMenuOpen = () => {
        return !menuOpen ? setMenuOpen(true) : setMenuOpen(false);
    };

    return <h1>Hello</h1>;
    // Return based on state
    // switch (section) {
    //     case "All":
    //         return statusArray.every(status) ? <h1>Hello</h1> : (
    //             <>
    //                 <div className="Menu">
    //                     <Menu
    //                         handleCountryChange={handleCountryChange}
    //                         handleSectionChange={handleSectionChange}
    //                         handleThemeChange={handleThemeChange}
    //                         handleSetMenuOpen={handleSetMenuOpen}
    //                         theme={theme}
    //                         menuOpen={menuOpen}
    //                     />
    //                 </div>
    //                 <div
    //                     className={`${styles.landing} ${
    //                         theme === "dark" && styles.landingDark
    //                     }`}
    //                 >
    //                     <PageHeader
    //                         handleThemeChange={handleThemeChange}
    //                         theme={theme}
    //                         menuOpen={menuOpen}
    //                         handleSetMenuOpen={handleSetMenuOpen}
    //                     />
    //                     <InfoApps theme={theme} />
    //                     {NewsSection}
    //                 </div>
    //             </>
    //         );
    //         break;
    //     case "Headlines":
    //         return statusArray.every(status) ? <h1>Hello</h1> : (
    //             <>
    //                 <div className="Menu">
    //                     <Menu
    //                         handleCountryChange={handleCountryChange}
    //                         handleSectionChange={handleSectionChange}
    //                         handleThemeChange={handleThemeChange}
    //                         handleSetMenuOpen={handleSetMenuOpen}
    //                         theme={theme}
    //                         menuOpen={menuOpen}
    //                     />
    //                 </div>
    //                 <div
    //                     className={`${styles.landing} ${
    //                         theme === "dark" && styles.landingDark
    //                     }`}
    //                 >
    //                     <PageHeader
    //                         handleThemeChange={handleThemeChange}
    //                         theme={theme}
    //                         menuOpen={menuOpen}
    //                         handleSetMenuOpen={handleSetMenuOpen}
    //                     />
    //                     <InfoApps theme={theme} />
    //                     <SubHeader
    //                         Subheading={SubHeadingValues[0]}
    //                         theme={theme}
    //                     />
    //                     <NewsArea
    //                         country={country}
    //                         index={0}
    //                         theme={theme}
    //                         headlines={headlines}
    //                     />
    //                 </div>
    //             </>
    //         );
    //         break;
    //     case "National":
    //         return statusArray.every(status) ? <h1>Hello</h1> : (
    //             <>
    //                 <div className="Menu">
    //                     <Menu
    //                         handleCountryChange={handleCountryChange}
    //                         handleSectionChange={handleSectionChange}
    //                         handleThemeChange={handleThemeChange}
    //                         handleSetMenuOpen={handleSetMenuOpen}
    //                         theme={theme}
    //                         menuOpen={menuOpen}
    //                     />
    //                 </div>
    //                 <div
    //                     className={`${styles.landing} ${
    //                         theme === "dark" && styles.landingDark
    //                     }`}
    //                 >
    //                     <PageHeader
    //                         handleThemeChange={handleThemeChange}
    //                         theme={theme}
    //                         menuOpen={menuOpen}
    //                         handleSetMenuOpen={handleSetMenuOpen}
    //                     />
    //                     <InfoApps theme={theme} />
    //                     <SubHeader
    //                         Subheading={SubHeadingValues[1]}
    //                         theme={theme}
    //                     />
    //                     <NewsArea
    //                         country={country}
    //                         index={1}
    //                         theme={theme}
    //                         national={national}
    //                     />
    //                 </div>
    //             </>
    //         );
    //         break;
    //     case "COVID-19":
    //         return statusArray.every(status) ? <h1>Hello</h1> : (
    //             <>
    //                 <div className="Menu">
    //                     <Menu
    //                         handleCountryChange={handleCountryChange}
    //                         handleSectionChange={handleSectionChange}
    //                         handleThemeChange={handleThemeChange}
    //                         handleSetMenuOpen={handleSetMenuOpen}
    //                         theme={theme}
    //                         menuOpen={menuOpen}
    //                     />
    //                 </div>
    //                 <div
    //                     className={`${styles.landing} ${
    //                         theme === "dark" && styles.landingDark
    //                     }`}
    //                 >
    //                     <PageHeader
    //                         handleThemeChange={handleThemeChange}
    //                         theme={theme}
    //                         menuOpen={menuOpen}
    //                         handleSetMenuOpen={handleSetMenuOpen}
    //                     />
    //                     <InfoApps theme={theme} />
    //                     <SubHeader
    //                         Subheading={SubHeadingValues[2]}
    //                         theme={theme}
    //                     />
    //                     <NewsArea
    //                         country={country}
    //                         index={2}
    //                         theme={theme}
    //                         covid={covid}
    //                     />
    //                 </div>
    //             </>
    //         );
    //         break;
    //     case "Politics":
    //         return statusArray.every(status) ? <h1>Hello</h1> : (
    //             <>
    //                 <div className="Menu">
    //                     <Menu
    //                         handleCountryChange={handleCountryChange}
    //                         handleSectionChange={handleSectionChange}
    //                         handleThemeChange={handleThemeChange}
    //                         handleSetMenuOpen={handleSetMenuOpen}
    //                         theme={theme}
    //                         menuOpen={menuOpen}
    //                     />
    //                 </div>
    //                 <div
    //                     className={`${styles.landing} ${
    //                         theme === "dark" && styles.landingDark
    //                     }`}
    //                 >
    //                     <PageHeader
    //                         handleThemeChange={handleThemeChange}
    //                         theme={theme}
    //                         menuOpen={menuOpen}
    //                         handleSetMenuOpen={handleSetMenuOpen}
    //                     />
    //                     <InfoApps theme={theme} />
    //                     <SubHeader
    //                         Subheading={SubHeadingValues[3]}
    //                         theme={theme}
    //                     />
    //                     <NewsArea
    //                         country={country}
    //                         index={3}
    //                         theme={theme}
    //                         politics={politics}
    //                     />
    //                 </div>
    //             </>
    //         );
    //         break;
    //     case "Sport":
    //         return statusArray.every(status) ? <h1>Hello</h1> : (
    //             <>
    //                 <div className="Menu">
    //                     <Menu
    //                         handleCountryChange={handleCountryChange}
    //                         handleSectionChange={handleSectionChange}
    //                         handleThemeChange={handleThemeChange}
    //                         handleSetMenuOpen={handleSetMenuOpen}
    //                         country={country}
    //                         theme={theme}
    //                         menuOpen={menuOpen}
    //                     />
    //                 </div>
    //                 <div
    //                     className={`${styles.landing} ${
    //                         theme === "dark" && styles.landingDark
    //                     }`}
    //                 >
    //                     <PageHeader
    //                         handleThemeChange={handleThemeChange}
    //                         theme={theme}
    //                         menuOpen={menuOpen}
    //                         handleSetMenuOpen={handleSetMenuOpen}
    //                     />
    //                     <InfoApps theme={theme} />
    //                     <SubHeader
    //                         Subheading={SubHeadingValues[4]}
    //                         theme={theme}
    //                     />
    //                     <NewsArea
    //                         country={country}
    //                         index={4}
    //                         theme={theme}
    //                         sport={sport}
    //                     />
    //                 </div>
    //             </>
    //         );
    //         break;
    //     default:
    //         return statusArray.every(status) ? <h1>Hello</h1> : (
    //             <>
    //                 <div className="Menu">
    //                     <Menu
    //                         handleCountryChange={handleCountryChange}
    //                         handleSectionChange={handleSectionChange}
    //                         handleThemeChange={handleThemeChange}
    //                         handleSetMenuOpen={handleSetMenuOpen}
    //                         theme={theme}
    //                         menuOpen={menuOpen}
    //                     />
    //                 </div>
    //                 <div
    //                     className={`${styles.landing} ${
    //                         theme === "dark" && styles.landingDark
    //                     }`}
    //                 >
    //                     <PageHeader
    //                         handleThemeChange={handleThemeChange}
    //                         theme={theme}
    //                         menuOpen={menuOpen}
    //                         handleSetMenuOpen={handleSetMenuOpen}
    //                     />
    //                     <InfoApps theme={theme} />
    //                     {NewsSection}
    //                 </div>
    //             </>
    //         );
    // }
};

export default Landing;
