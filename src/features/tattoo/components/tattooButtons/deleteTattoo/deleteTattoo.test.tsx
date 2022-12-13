import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../../../infrastructure/store/store/store';
import { DeleteButton } from './deleteTattoo';

describe('Given DeleteButton component', () => {
    describe('When we render the component', () => {
        test('Then it should click to button', () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <DeleteButton id={'123'} />
                    </Provider>
                </Router>
            );
            const button = screen.getByRole('button');
            fireEvent.click(button);
            expect(fireEvent.click(button)).toBe(false);
        });
    });
});
