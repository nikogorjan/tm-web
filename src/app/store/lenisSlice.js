'use client'; // Ensure this runs on the client side

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lenis: null, // Will hold the Lenis instance
};

const lenisSlice = createSlice({
    name: 'lenis',
    initialState,
    reducers: {
        setLenis: (state, action) => {
            state.lenis = action.payload;
        },
        stopLenis: (state) => {
            if (state.lenis) {
                state.lenis.stop(); // Stop Lenis
            }
        },
        startLenis: (state) => {
            if (state.lenis) {
                state.lenis.start(); // Start Lenis
            }
        },
    },
});

export const { setLenis, stopLenis, startLenis } = lenisSlice.actions;

export default lenisSlice.reducer;