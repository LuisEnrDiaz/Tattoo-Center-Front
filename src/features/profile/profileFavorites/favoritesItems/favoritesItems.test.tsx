import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { mockTattoo } from '../../../../infrastructure/mocks/mockTattoo/mockTattoo';
import { mockStore } from '../../../../infrastructure/mocks/mockStore/mockStore';
import { FavoritesItems } from './favoritesItems';

describe('Given RobotList component', () => {
    describe('When we render the component', () => {
        render(
            <Provider store={mockStore}>
                <FavoritesItems item={mockTattoo} />
            </Provider>
        );
    });
    test('Then it should display the tattoo Categories name', () => {
        const element = screen.getAllByRole('img');
        expect(element[0]).toHaveAttribute('src', './assets/papelera.png');
        expect(element[0]).toHaveAttribute('alt', 'papelera');
    });
});
