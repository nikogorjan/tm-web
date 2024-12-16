// app/store/index.js
'use client'; // Ensure this runs on the client side

import { configureStore } from '@reduxjs/toolkit';
import lenisReducer from './lenisSlice';

export const store = configureStore({
    reducer: {
        lenis: lenisReducer,
    },
});