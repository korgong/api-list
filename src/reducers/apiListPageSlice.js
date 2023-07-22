import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { get } from '../utils/request';

// Async action for fetching data
export const fetchApiList = createAsyncThunk(
    'api/fetchApiList',
    async ({ apiCategory, apiQuery, apiCurrentPage }) => {
        const response = await get(
            `/api/list?_page=${apiCurrentPage}&_limit=3`
        );
        return response.data;
    }
);

const apiSlice = createSlice({
    name: 'api',
    initialState: {
        totalItems: 60,
        currentPage: 1,
        apiCategory: 'rest',
        queryStr: '',
        list: [],
        showLoading: false,
        error: null
    },
    reducers: {
        updateCategory: (state, action) => {
            state.apiCategory = action.payload;
        },
        updateTotalPages: (state, action) => {
            state.totalItems = action.payload;
        },
        updateCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        updateQueryStr: (state, action) => {
            state.queryStr = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchApiList.pending, (state) => {
                state.showLoading = true;
            })
            .addCase(fetchApiList.fulfilled, (state, action) => {
                // Add any fetched data to the array
                state.list = action.payload;
                state.showLoading = false;
            })
            .addCase(fetchApiList.rejected, (state, action) => {
                state.showLoading = false;
                state.error = action.error.message;
            });
    }
});

export const {
    updateCurrentPage,
    updateQueryStr,
    updateCategory,
    updateTotalPages
} = apiSlice.actions;

export default apiSlice.reducer;
