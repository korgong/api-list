import React from 'react';
import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import APIListPage from "./APIListPage";
import { Provider } from 'react-redux';
import loadingReducer from "../reducers/loadingSlice";
import apiListPageReducer from "../reducers/apiListPageSlice";
import { configureStore } from '@reduxjs/toolkit';
import { getAPIList } from "../model/ListPageAPI";

export const store = configureStore({
    reducer: {
        loading: loadingReducer,
        apiListPageData: apiListPageReducer
    }
});

// jest.mock('../model/ListPageAPI', () => ({
//     getAPIList: jest.fn()
// }));
describe('HomePage', () => {
    it('renders without crashing', () => {
        // getAPIList.mockResolvedValue(Promise.resolve([{"id":1,"name":"Reinhold","category":"rest","description":"Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","createTime":"10/15/2022","owner":"Xever"},
        //     {"id":2,"name":"Enos","category":"odatav2","description":"Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.","createTime":"11/5/2022","owner":"Stavros"}]));
        render(
            <Provider store={store}>
                <APIListPage />
            </Provider>
        );
    });
});
