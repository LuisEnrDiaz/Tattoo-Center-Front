/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './app';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store/store';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Given App component', () => {
    describe('When we render the component', () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Provider store={appStore}>
                        <Router>
                            <App />
                        </Router>
                    </Provider>
                );
            });
        });
        test('Then it should display the title', () => {
            const title = 'luis.enr.diaz.garcia@gmail.com';
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
