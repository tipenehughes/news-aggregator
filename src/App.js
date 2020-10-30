import React from "react";
import PageHeader from "./Components/PageHeader";
import SubHeader from "./Components/SubHeader";
import Drawer from "./Components/Drawer";
import NewsArea from "./Components/NewsArea";

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

    return (
        <div className="App">
            <div className="drawer">
                <Drawer />
            </div>
            <div className="main">
                <PageHeader />
                {NewsSection}
            </div>
        </div>
    );
};

export default App;
