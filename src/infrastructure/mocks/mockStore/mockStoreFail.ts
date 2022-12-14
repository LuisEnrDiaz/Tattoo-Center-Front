import { configureStore } from '@reduxjs/toolkit';
import { tattooReducer } from '../../../features/tattoo/reducerTattoo/reducerTattoo';
import { userReducer } from '../../../features/user/reducerUser/reducerUser';
import { rootState, rootStore } from '../../store/store/store';
import { mockUser } from '../mockUser/mockUser';

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
        isLogged: false,
        isLogging: false,
        token: '',
        user: mockUser,
    },
};

export const mockStoreFail: rootStore = configureStore({
    reducer: {
        tattoos: tattooReducer,
        users: userReducer,
    },
    preloadedState,
});
