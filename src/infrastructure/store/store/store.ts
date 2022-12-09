import { configureStore } from '@reduxjs/toolkit';
import { tattooReducer } from '../../../features/tattoo/reducerTattoo/reducerTattoo';

export const appStore = configureStore({
    reducer: {
        tattoos: tattooReducer,
    },
});

export type rootStore = typeof appStore;

export type rootState = ReturnType<typeof appStore.getState>;
