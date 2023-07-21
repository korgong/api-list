// App.js
import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import apiListPageReducer from './reducers/slice';
import loadingReducer from './reducers/loadingSlice';

const HomePage = lazy(() => import('./pages/HomePage'));
const APIListPage = lazy(() => import('./pages/APIListPage'));

export const store = configureStore({
    reducer: {
        loading: loadingReducer,
        apiListPageData: apiListPageReducer,
    },
});

// todo change the directory of HomePage and APIListPage and add contents
// todo deal with production environment
const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/api-list" element={<APIListPage />} />
                        <Route path="/" element={<APIListPage />} />
                    </Routes>
                </Suspense>
            </Router>
        </Provider>
    );
};

export default App;
