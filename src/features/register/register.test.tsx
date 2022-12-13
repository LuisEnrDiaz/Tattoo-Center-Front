import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../infrastructure/store/store/store';
import Register from './register';

describe('Given TattooPage component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Categories"', () => {
            render(
                <Provider store={appStore}>
                    <Router>
                        <Register />
                    </Router>
                </Provider>
            );
            const element = screen.getByText(
                /Sing up filling out the fields below./i
            );
            expect(element).toBeInTheDocument();
        });
    });

    describe('When we render button', () => {
        test('Then it should click to button', () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <Register></Register>
                    </Provider>
                </Router>
            );
            const button = screen.getByRole('button');
            fireEvent.click(button);
            expect(fireEvent.click(button)).toBe(true);
        });
    });
});
