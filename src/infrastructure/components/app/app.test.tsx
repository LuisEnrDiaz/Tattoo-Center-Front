import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './app';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store/store';

describe('Given App component', () => {
    describe('When we render the component', () => {
        test('Then it should display the title', () => {
            render(
                <Provider store={appStore}>
                    <App />
                </Provider>
            );
            const element = screen.getByText(/TATTOO CENTER/i);
            expect(element).toBeInTheDocument();
        });
    });
});
