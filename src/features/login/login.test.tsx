import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../infrastructure/store/store/store';
import Login from './login';

describe('Given TattooPage component', () => {
    describe('When we render the component', () => {
        test('Then it should display "welcome back! Log in to your account"', () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <Login />{' '}
                    </Provider>
                </Router>
            );
            const element = screen.getByText(
                /welcome back! Log in to your account/i
            );
            expect(element).toBeInTheDocument();
        });
    });

    describe('When we render button', () => {
        test('Then it should click to button', () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <Login></Login>
                    </Provider>
                </Router>
            );
            const button = screen.getByRole('button');
            fireEvent.click(button);
            expect(fireEvent.click(button)).toBe(true);
        });
    });
});
