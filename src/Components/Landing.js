import React, { useState, useEffect } from "react";
import PageHeader from "./PageHeader";
import SubHeader from "./SubHeader";
import Drawer from "./Drawer";
import NewsArea from "./NewsArea";
import WeatherApp from "./WeatherApp/WeatherApp";

import "../App.css";

const Landing = () => {
    const [section, setSection] = useState("All");
    const [country, setCountry] = useState("nz");

    const SubHeadingValues = [
        "Todays Headlines",
        "National News",
        "Politics",
        "Sports",
    ];

    const NewsSection = SubHeadingValues.map((subheading, i) => (
        <div>
            <SubHeader Subheading={subheading} />
            <NewsArea country={country} index={i} />
        </div>
    ));

    // Event handler which updates and specifies section to display based on option selected in Drawer component
    const handleClick = (e) => {
        e.preventDefault();
        setSection(e.target.innerHTML);
    };

    // Event handler which updates and specifies country to display based on option selected in Drawer component
    const handleChange = (e) => {
        setCountry(e.target.value);
    };

    // Return based on state
    switch (section) {
        case "All":
            return (
                <>
                    <div className="drawer">
                        <Drawer onChange={handleChange} onClick={handleClick} />
                    </div>
                    <div className="main">
                        <PageHeader />
                        <WeatherApp />
                        {/* {NewsSection} */}
                    </div>
                </>
            );
            break;
        case "Headlines":
            return (
                <>
                    <div className="drawer">
                        <Drawer onChange={handleChange} onClick={handleClick} />
                    </div>
                    <div className="main">
                        <PageHeader />
                        <WeatherApp />
                        <SubHeader Subheading={SubHeadingValues[0]} />
                        <NewsArea country={country} index={0} />
                    </div>
                </>
            );
            break;
        case "National":
            return (
                <>
                    <div className="drawer">
                        <Drawer onChange={handleChange} onClick={handleClick} />
                    </div>
                    <div className="main">
                        <PageHeader />
                        <WeatherApp />
                        <SubHeader Subheading={SubHeadingValues[1]} />
                        <NewsArea country={country} index={1} />
                    </div>
                </>
            );
            break;
        case "Politics":
            return (
                <>
                    <div className="drawer">
                        <Drawer onChange={handleChange} onClick={handleClick} />
                    </div>
                    <div className="main">
                        <PageHeader />
                        <WeatherApp />
                        <SubHeader Subheading={SubHeadingValues[2]} />
                        <NewsArea country={country} index={2} />
                    </div>
                </>
            );
            break;
        case "Sport":
            return (
                <>
                    <div className="drawer">
                        <Drawer onChange={handleChange} onClick={handleClick} />
                    </div>
                    <div className="main">
                        <PageHeader />
                        <WeatherApp />
                        <SubHeader Subheading={SubHeadingValues[3]} />
                        {/* <NewsArea country={country} index={3} /> */}
                    </div>
                </>
            );
            break;
        default:
            return (
                <>
                    <div className="drawer">
                        <Drawer onChange={handleChange} onClick={handleClick} />
                    </div>
                    <div className="main">
                        <PageHeader />
                        <WeatherApp />
                        {/* {NewsSection} */}
                    </div>
                </>
            );
    }
};

export default Landing;
