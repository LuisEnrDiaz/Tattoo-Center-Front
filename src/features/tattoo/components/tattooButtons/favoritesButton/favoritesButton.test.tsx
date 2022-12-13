import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../../../infrastructure/store/store/store';
import { FavoritesButton } from './favoritesButton';

describe('Given FavoritesButton component', () => {
    describe('When we render the component', () => {
        test('Then it should click to button', () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <FavoritesButton id={'123'}></FavoritesButton>
                    </Provider>
                </Router>
            );
            const button = screen.getByRole('img');
            fireEvent.click(button);
            expect(fireEvent.click(button)).toBe(false);
        });
    });
});
