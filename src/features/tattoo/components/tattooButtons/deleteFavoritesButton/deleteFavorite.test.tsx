import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../../../infrastructure/store/store/store';
import { DeleteFavoriteButton } from './deleteFavoriteButton';

describe('Given DeleteFavoriteButton component', () => {
    describe('When we render the component', () => {
        test('Then it should click to button', () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <DeleteFavoriteButton id={'123'}></DeleteFavoriteButton>
                    </Provider>
                </Router>
            );
            const button = screen.getByRole('img');
            fireEvent.click(button);
            expect(fireEvent.click(button)).toBe(false);
        });
    });
});
