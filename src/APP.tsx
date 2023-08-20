import React from 'react';
import { BrowserRouter as BRouter, Routes, Route } from 'react-router-dom';
import PageA from "./PageA";
import PageB from "./PageB";

function App() {
    return (
        <BRouter>
            <Routes>
                <Route path='/pageA' Component={PageA} />
                <Route path='/pageB' Component={PageB} />
                <Route path='/' Component={PageA} />
            </Routes>
        </BRouter>
    );
}

export default App;