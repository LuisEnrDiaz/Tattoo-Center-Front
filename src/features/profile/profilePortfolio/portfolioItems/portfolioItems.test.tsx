import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import {
    rootState,
    rootStore,
} from '../../../../infrastructure/store/store/store';
import { mockTattoo } from '../../../../infrastructure/mocks/mockTattoo/mockTattoo';
import { userReducer } from '../../../user/reducerUser/reducerUser';
import { tattooReducer } from '../../../tattoo/reducerTattoo/reducerTattoo';
import { PortfolioItems } from './portfolioItems';

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
            <Provider store={mockStore}>
                <PortfolioItems item={mockTattoo} />
            </Provider>
        );
    });
    test('Then it should display the tattoo Categories name', () => {
        const element = screen.getAllByText('ELIMINAR');
        expect(element).toBeTruthy();
    });
});
