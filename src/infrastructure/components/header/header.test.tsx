import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../store/store/store';
import { Header } from './header';

describe('Given Header component', () => {
    describe('When we render the component', () => {
        test('Then it should display "TATTOO CENTER"', () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <Header />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/TATTOO CENTER/i);
            expect(element).toBeInTheDocument();
        });
    });
});
