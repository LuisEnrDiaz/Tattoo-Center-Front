import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { mockStore } from '../../../../infrastructure/mocks/mockStore/mockStore';
import { FavoritesList } from './favotitesList';
import { mockStoreFail } from '../../../../infrastructure/mocks/mockStore/mockStoreFail';

describe('Given TattooList', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Provider store={mockStore}>
                    <FavoritesList />
                </Provider>
            );
        });
        test('Then it should display the title', () => {
            const element = screen.getByText(/You have no Favorites./i);
            expect(element).toBeInTheDocument();
        });
    });

    describe('When we render the component fail', () => {
        beforeEach(() => {
            render(
                <Provider store={mockStoreFail}>
                    <FavoritesList />
                </Provider>
            );
        });
        test('Then it should display the title', () => {
            const element = screen.getByText(/Favorites/i);
            expect(element).toBeInTheDocument();
        });
    });
});
