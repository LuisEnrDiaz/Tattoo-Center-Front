import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import {
    rootState,
    rootStore,
} from '../../../../infrastructure/store/store/store';
import { tattooReducer } from '../../reducerTattoo/reducerTattoo';
import { TattooList } from './tattooList';

describe('Given TattooList', () => {
    const preloadedState: rootState = {
        tattoos: [
            {
                id: '1',
                image: 'pepe',
                categories: ['BLACK & GREY'],
                link: '',
                owner: '',
            },
        ],
    };
    const mockStore: rootStore = configureStore({
        reducer: {
            tattoos: tattooReducer,
        },
        preloadedState,
    });

    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Provider store={mockStore}>
                    <TattooList />
                </Provider>
            );
        });
        test('Then it should display the title', () => {
            const element = screen.getByText(/BLACK & GREY/i);
            expect(element).toBeInTheDocument();
        });
    });
});
