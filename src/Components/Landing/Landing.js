import React, { useState } from "react";
import { useQueries } from "react-query";
import { Route } from "react-router-dom";

import PageHeader from "../Headers/PageHeader";
import Menu from "../Menu/Menu";
import Headlines from "../Headlines/Headlines";
import NewsSection from "../NewsArea/NewsSection";
import InfoApps from "../Apps/InfoApps";
import Spinner from "../Utilities/Spinner";

const Landing = () => {
    const [country, setCountry] = useState("nz");
    const [theme, setTheme] = useState("light");

    const [menuOpen, setMenuOpen] = useState(false);

    const APP_KEY = process.env.REACT_APP_NEWSAPI_KEY;

    // process.env.REACT_APP_NEWSAPI_KEY;

    const nz = "&domains=stuff.co.nz,rnz.co.nz,nzherald.co.nz,newshub.co.nz";
    const us = "&domains=cnn.com,foxnews.com,nytimes.com,msnbc.com";

    const getHeadlines = async () => {
        const response = await fetch(
            country === "us"
                ? `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${APP_KEY}`
                : `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${APP_KEY}`
        );
        const data = await response.json();
        return data.articles;
    };
    const getNational = async () => {
        const response = await fetch(
            country === "us"
                ? `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${APP_KEY}`
                : `http://newsapi.org/v2/everything?q=national${nz}&apiKey=${APP_KEY}`
        );
        const data = await response.json();
        return data.articles;
    };
    const getCovid = async () => {
        const response = await fetch(
            country === "us"
                ? `http://newsapi.org/v2/everything?q=covid${us}&apiKey=${APP_KEY}`
                : `http://newsapi.org/v2/everything?q=covid${nz}&apiKey=${APP_KEY}`
        );
        const data = await response.json();
        return data.articles;
    };
    const getPolitics = async () => {
        const response = await fetch(
            country === "us"
                ? `http://newsapi.org/v2/everything?q=politics${us}&apiKey=${APP_KEY}`
                : `http://newsapi.org/v2/everything?q=politics${nz}&apiKey=${APP_KEY}`
        );
        const data = await response.json();
        return data.articles;
    };
    const getSport = async () => {
        const response = await fetch(
            country === "us"
                ? `http://newsapi.org/v2/top-headlines?country=${country}&category=sports&apiKey=${APP_KEY}`
                : `http://newsapi.org/v2/top-headlines?country=${country}&category=sports&apiKey=${APP_KEY}`
        );
        const data = await response.json();
        return data.articles;
    };

    const results = useQueries([
        { queryKey: ["headlines", country], queryFn: getHeadlines },
        { queryKey: ["national", country], queryFn: getNational },
        { queryKey: ["covid", country], queryFn: getCovid },
        { queryKey: ["politics", country], queryFn: getPolitics },
        { queryKey: ["sport", country], queryFn: getSport },
    ]);

    const [headlines, national, covid, politics, sport] = results;

    // To get status from results array
    const statusArray = results.map((o) => o.status);

    // To check if all results have loaded
    const status = (value) => value === "success";
    const isSuccess = statusArray.every(status);

    const resultsArray = [headlines, national, covid, politics, sport];

    const subHeadlines = [
        "Headlines",
        "National",
        "Covid",
        "Politics",
        "Sport",
    ];

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

    return !isSuccess ? (
        <Spinner />
    ) : (
        <Route path="/">
            <Menu
                handleCountryChange={handleCountryChange}
                handleThemeChange={handleThemeChange}
                handleSetMenuOpen={handleSetMenuOpen}
                theme={theme}
                menuOpen={menuOpen}
            />
            <div
                className={`${"landing"} ${theme === "dark" && "landingDark"}`}
            >
                <PageHeader
                    handleThemeChange={handleThemeChange}
                    theme={theme}
                    menuOpen={menuOpen}
                    handleSetMenuOpen={handleSetMenuOpen}
                />
                <InfoApps theme={theme} />
            </div>
            <Route exact path={["/", "/all"]}>
                <Headlines headlines={headlines.data} theme={theme} />
                {resultsArray.slice(1, 5).map((articles, i) => (
                    <NewsSection
                        country={country}
                        Subheading={subHeadlines[i + 1]}
                        index={i}
                        theme={theme}
                        data={articles.data}
                        key={i}
                    />
                ))}
            </Route>
            <Route path="/headlines">
                <Headlines headlines={headlines.data} theme={theme} />
            </Route>
            {resultsArray.slice(1, 5).map((articles, i) => (
                <Route exact path={`/${subHeadlines[i + 1]}`}>
                    <NewsSection
                        country={country}
                        Subheading={subHeadlines[i + 1]}
                        index={i}
                        theme={theme}
                        data={articles.data}
                        key={i}
                    />
                </Route>
            ))}
            ;
        </Route>
    );
};

export default Landing;
