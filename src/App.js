import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./Components/Landing/Landing";

import "./App.css";

const App = () => {
    const queryClient = new QueryClient();
    return (
        <Router>
            <QueryClientProvider client={queryClient}>
                <div className="App">
                    <Route path="/">
                        <Landing />
                    </Route>
                </div>

                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </Router>
    );
};

export default App;
