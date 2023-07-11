import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action for fetching data
// todo change params
export const fetchApiList = createAsyncThunk('api/fetchApiList', async (params) => {
    const response = await axios.get('http://localhost:3001/list?_page=1&_limit=10', { params: {} });
    return response.data;
});

const apiSlice = createSlice({
    name: 'api',
    initialState: { list: [], status: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchApiList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchApiList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Add any fetched data to the array
                state.list = state.list.concat(action.payload);
            })
            .addCase(fetchApiList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default apiSlice.reducer;
