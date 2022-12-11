import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Layout } from './layout';

describe('Given Layout component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Testing"', () => {
            render(
                <Router>
                    <Layout>
                        <p>Testing</p>
                    </Layout>
                </Router>
            );
            const element = screen.getByText(/Testing/i);
            expect(element).toBeInTheDocument();
        });
    });
});
