import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './app';

describe('Given App component', () => {
    describe('When we render the component', () => {
        test('Then it should display the title', () => {
            render(<App />);
            const element = screen.getByText(/Luis Diaz/i);
            expect(element).toBeInTheDocument();
        });
    });
});
