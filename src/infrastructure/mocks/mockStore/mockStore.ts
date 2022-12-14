import { configureStore } from '@reduxjs/toolkit';
import { tattooReducer } from '../../../features/tattoo/reducerTattoo/reducerTattoo';
import { userReducer } from '../../../features/user/reducerUser/reducerUser';
import { rootState, rootStore } from '../../store/store/store';

const preloadedState: rootState = {
    tattoos: [
        {
            id: '1',
            image: 'pepe',
            categories: 'BLACK & GREY',
            link: '',
            owner: '',
        },
    ],
    users: {
        isLogged: true,
        isLogging: true,
        token: '',
        user: null,
    },
};

export const mockStore: rootStore = configureStore({
    reducer: {
        tattoos: tattooReducer,
        users: userReducer,
    },
    preloadedState,
});
