import { configureStore } from '@reduxjs/toolkit';
import { tattooReducer } from '../../../features/tattoo/reducerTattoo/reducerTattoo';
import { userReducer } from '../../../features/user/reducerUser/reducerUser';

export const appStore = configureStore({
    reducer: {
        tattoos: tattooReducer,
        users: userReducer,
    },
});

export type rootStore = typeof appStore;

export type rootState = ReturnType<typeof appStore.getState>;
