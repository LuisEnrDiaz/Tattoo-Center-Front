import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { mockStore } from '../../../../infrastructure/mocks/mockStore/mockStore';
import { FavoritesList } from './favotitesList';

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
            const element = screen.getByText(/Favorites/i);
            expect(element).toBeInTheDocument();
        });
    });
});
