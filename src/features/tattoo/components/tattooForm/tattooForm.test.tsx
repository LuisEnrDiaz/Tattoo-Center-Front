import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import {
    rootState,
    rootStore,
} from '../../../../infrastructure/store/store/store';
import { tattooReducer } from '../../reducerTattoo/reducerTattoo';
import { TattooForm } from './tattooForm';
import { userReducer } from '../../../user/reducerUser/reducerUser';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Given RobotList component', () => {
    const preloadedState: rootState = {
        tattoos: [
            {
                id: '1',
                image: 'mayaImage',
                categories: 'TRIBAL',
                link: 'mayaLink',
                owner: '1',
            },
        ],
        users: {
            isLogged: false,
            isLogging: false,
            token: '',
            user: null,
        },
    };
    const mockStore: rootStore = configureStore({
        reducer: {
            tattoos: tattooReducer,
            users: userReducer,
        },
        preloadedState,
    });

    describe('When we render the component', () => {
        render(
            <Router>
                <Provider store={mockStore}>
                    <TattooForm />
                </Provider>
            </Router>
        );
        test('Then it should display the tattoo Categories name', () => {
            const element = screen.getByText(/CATEGORIES/i);
            expect(element).toBeInTheDocument();
        });
    });
});
