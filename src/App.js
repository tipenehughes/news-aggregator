import React from "react";
import PageHeader from "./Components/PageHeader";
import SubHeader from "./Components/SubHeader";
import Drawer from "./Components/Drawer";
import NewsArea from "./Components/NewsArea";
import WeatherApp from "./Components/WeatherApp";

import "./App.css";

const App = () => {
    const SubHeadingValues = [
        "Todays Headlines",
        "National News",
        "Politics",
        "Sports",
    ];

    const NewsSection = SubHeadingValues.map((subheading, i) => (
        <div>
            <SubHeader Subheading={subheading} />
            <NewsArea index={i} />
        </div>
    ));

    const handleClick = (e) => {
        e.preventDefault();
        alert(e.target.innerHTML);
    };

    return (
        <div className="App">
            <div className="drawer">
                <Drawer onClick={handleClick} />
            </div>
            <div className="main">
                <PageHeader />
                <WeatherApp />
                {NewsSection}
            </div>
        </div>
    );
};

export default App;
