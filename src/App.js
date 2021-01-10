import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./Components/Landing/Landing";

import "./App.css";

const App = () => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <div className="App">
                    <Route exact path="/" component={Landing} />
                </div>
            </Router>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default App;
