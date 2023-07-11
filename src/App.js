// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/slice';
import HomePage from './pages/HomePage';
import APIListPage from './pages/APIListPage';

const store = configureStore({
    reducer: rootReducer,
});

// todo change the directory of HomePage and APIListPage and add contents
// todo deal with production environment
const App = () => (
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/api-list" element={<APIListPage />} />
                <Route path="/" element={<APIListPage />} />
            </Routes>
        </Router>
    </Provider>
);

export default App;
