// slice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // Define your initial state here
};

// todo complete the logic
const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        // Define your reducers here
    },
});

export const { action1, action2 } = appSlice.actions;

export default appSlice.reducer;
