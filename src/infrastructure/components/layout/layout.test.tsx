import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../store/store/store';
import { Layout } from './layout';

describe('Given Layout component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Testing"', () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <Layout>
                            <p>Testing</p>
                        </Layout>
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/Testing/i);
            expect(element).toBeInTheDocument();
        });
    });
});
