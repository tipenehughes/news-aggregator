import React, { useState, useEffect } from "react";
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

    const [drawerOpen, setDrawerOpen] = useState(false);

    const [headlines, setHeadlines] = useState([]);
    const [national, setNational] = useState([]);
    const [covid, setCovid] = useState([]);
    const [politics, setPolitics] = useState([]);
    const [sport, setSport] = useState([]);

    const APP_KEY = process.env.REACT_APP_NEWSAPI_KEY;
    const COUNTRY_ID = `country=${country}&`;
    const nz = "&domains=stuff.co.nz,rnz.co.nz,nzherald.co.nz,newshub.co.nz";
    const us = "&domains=cnn.com,foxnews.com,nytimes.com,msnbc.com";

    useEffect(() => {
        getNews();
    }, [country]);

    const getNews = async () => {
        const news = fetch(
            country === "us"
                ? `https://newsapi.org/v2/top-headlines?${COUNTRY_ID}apiKey=${APP_KEY}`
                : `https://newsapi.org/v2/top-headlines?${COUNTRY_ID}apiKey=${APP_KEY}`
        );
        const national = fetch(
            country === "us"
                ? `https://newsapi.org/v2/top-headlines?${COUNTRY_ID}apiKey=${APP_KEY}`
                : `http://newsapi.org/v2/everything?q=national${nz}&apiKey=${APP_KEY}`
        );
        const covid = fetch(
            country === "us"
                ? `http://newsapi.org/v2/everything?q=covid${us}&apiKey=${APP_KEY}`
                : `http://newsapi.org/v2/everything?q=covid${nz}&apiKey=${APP_KEY}`
        );
        const politics = fetch(
            country === "us"
                ? `http://newsapi.org/v2/everything?q=politics${us}&apiKey=${APP_KEY}`
                : `http://newsapi.org/v2/everything?q=politics${nz}&apiKey=${APP_KEY}`
        );
        const sport = fetch(
            country === "us"
                ? `http://newsapi.org/v2/top-headlines?${COUNTRY_ID}category=sports&apiKey=${APP_KEY}`
                : `http://newsapi.org/v2/top-headlines?${COUNTRY_ID}category=sports&apiKey=${APP_KEY}`
        );
        await Promise.all([news, national, covid, politics, sport])
            .then((responses) => {
                return Promise.all(
                    responses.map((response) => {
                        return response.json();
                    })
                );
            })
            .then((data) => {
                setHeadlines(data[0].articles);
                setNational(data[1].articles);
                setCovid(data[2].articles);
                setPolitics(data[3].articles);
                setSport(data[4].articles);
            });
    };

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

    // Event handler which updates and specifies section to display based on option selected in Drawer component
    const handleSectionChange = (e) => {
        e.preventDefault();
        setSection(e.target.innerText);
    };

    // Event handler which updates and specifies country to display based on option selected in Drawer component
    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    // Event handler to toggle between light and dark theme

    const handleThemeChange = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    // Event handle to toggle mobile menu
    const handleSetDrawerOpen = () => {
        return !drawerOpen ? setDrawerOpen(true) : setDrawerOpen(false);
    };

    // Return based on state
    switch (section) {
        case "All":
            return (
                <>
                    <div className="drawer">
                        <Drawer
                            handleCountryChange={handleCountryChange}
                            handleSectionChange={handleSectionChange}
                            handleThemeChange={handleThemeChange}
                            handleSetDrawerOpen={handleSetDrawerOpen}
                            theme={theme}
                            drawerOpen={drawerOpen}
                        />
                    </div>
                    <div
                        className={`${"main"} ${
                            theme === "dark" && "mainDark"
                        }`}
                    >
                        <PageHeader
                            handleThemeChange={handleThemeChange}
                            theme={theme}
                            drawerOpen={drawerOpen}
                            handleSetDrawerOpen={handleSetDrawerOpen}
                        />
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
                            handleCountryChange={handleCountryChange}
                            handleSectionChange={handleSectionChange}
                            handleThemeChange={handleThemeChange}
                            handleSetDrawerOpen={handleSetDrawerOpen}
                            theme={theme}
                            drawerOpen={drawerOpen}
                        />
                    </div>
                    <div
                        className={`${"main"} ${
                            theme === "dark" && "mainDark"
                        }`}
                    >
                        <PageHeader
                            handleThemeChange={handleThemeChange}
                            theme={theme}
                            drawerOpen={drawerOpen}
                            handleSetDrawerOpen={handleSetDrawerOpen}
                        />
                        <InfoApps theme={theme} />
                        <SubHeader
                            Subheading={SubHeadingValues[0]}
                            theme={theme}
                        />
                        <NewsArea
                            country={country}
                            index={0}
                            theme={theme}
                            headlines={headlines}
                        />
                    </div>
                </>
            );
            break;
        case "National":
            return (
                <>
                    <div className="drawer">
                        <Drawer
                            handleCountryChange={handleCountryChange}
                            handleSectionChange={handleSectionChange}
                            handleThemeChange={handleThemeChange}
                            handleSetDrawerOpen={handleSetDrawerOpen}
                            theme={theme}
                            drawerOpen={drawerOpen}
                        />
                    </div>
                    <div
                        className={`${"main"} ${
                            theme === "dark" && "mainDark"
                        }`}
                    >
                        <PageHeader
                            handleThemeChange={handleThemeChange}
                            theme={theme}
                            drawerOpen={drawerOpen}
                            handleSetDrawerOpen={handleSetDrawerOpen}
                        />
                        <InfoApps theme={theme} />
                        <SubHeader
                            Subheading={SubHeadingValues[1]}
                            theme={theme}
                        />
                        <NewsArea
                            country={country}
                            index={1}
                            theme={theme}
                            national={national}
                        />
                    </div>
                </>
            );
            break;
        case "COVID-19":
            return (
                <>
                    <div className="drawer">
                        <Drawer
                            handleCountryChange={handleCountryChange}
                            handleSectionChange={handleSectionChange}
                            handleThemeChange={handleThemeChange}
                            handleSetDrawerOpen={handleSetDrawerOpen}
                            theme={theme}
                            drawerOpen={drawerOpen}
                        />
                    </div>
                    <div
                        className={`${"main"} ${
                            theme === "dark" && "mainDark"
                        }`}
                    >
                        <PageHeader
                            handleThemeChange={handleThemeChange}
                            theme={theme}
                            drawerOpen={drawerOpen}
                            handleSetDrawerOpen={handleSetDrawerOpen}
                        />
                        <InfoApps theme={theme} />
                        <SubHeader
                            Subheading={SubHeadingValues[2]}
                            theme={theme}
                        />
                        <NewsArea
                            country={country}
                            index={2}
                            theme={theme}
                            covid={covid}
                        />
                    </div>
                </>
            );
            break;
        case "Politics":
            return (
                <>
                    <div className="drawer">
                        <Drawer
                            handleCountryChange={handleCountryChange}
                            handleSectionChange={handleSectionChange}
                            handleThemeChange={handleThemeChange}
                            handleSetDrawerOpen={handleSetDrawerOpen}
                            theme={theme}
                            drawerOpen={drawerOpen}
                        />
                    </div>
                    <div
                        className={`${"main"} ${
                            theme === "dark" && "mainDark"
                        }`}
                    >
                        <PageHeader
                            handleThemeChange={handleThemeChange}
                            theme={theme}
                            drawerOpen={drawerOpen}
                            handleSetDrawerOpen={handleSetDrawerOpen}
                        />
                        <InfoApps theme={theme} />
                        <SubHeader
                            Subheading={SubHeadingValues[3]}
                            theme={theme}
                        />
                        <NewsArea
                            country={country}
                            index={3}
                            theme={theme}
                            politics={politics}
                        />
                    </div>
                </>
            );
            break;
        case "Sport":
            return (
                <>
                    <div className="drawer">
                        <Drawer
                            handleCountryChange={handleCountryChange}
                            handleSectionChange={handleSectionChange}
                            handleThemeChange={handleThemeChange}
                            handleSetDrawerOpen={handleSetDrawerOpen}
                            country={country}
                            theme={theme}
                            drawerOpen={drawerOpen}
                        />
                    </div>
                    <div
                        className={`${"main"} ${
                            theme === "dark" && "mainDark"
                        }`}
                    >
                        <PageHeader
                            handleThemeChange={handleThemeChange}
                            theme={theme}
                            drawerOpen={drawerOpen}
                            handleSetDrawerOpen={handleSetDrawerOpen}
                        />
                        <InfoApps theme={theme} />
                        <SubHeader
                            Subheading={SubHeadingValues[4]}
                            theme={theme}
                        />
                        <NewsArea
                            country={country}
                            index={4}
                            theme={theme}
                            sport={sport}
                        />
                    </div>
                </>
            );
            break;
        default:
            return (
                <>
                    <div className="drawer">
                        <Drawer
                            handleCountryChange={handleCountryChange}
                            handleSectionChange={handleSectionChange}
                            handleThemeChange={handleThemeChange}
                            handleSetDrawerOpen={handleSetDrawerOpen}
                            theme={theme}
                            drawerOpen={drawerOpen}
                        />
                    </div>
                    <div
                        className={`${"main"} ${
                            theme === "dark" && "mainDark"
                        }`}
                    >
                        <PageHeader
                            handleThemeChange={handleThemeChange}
                            theme={theme}
                            drawerOpen={drawerOpen}
                            handleSetDrawerOpen={handleSetDrawerOpen}
                        />
                        <InfoApps theme={theme} />
                        {NewsSection}
                    </div>
                </>
            );
    }
};

export default Landing;
