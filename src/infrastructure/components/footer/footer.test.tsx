import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Given Footer component', () => {
    describe('When we render the component', () => {
        test('Then it should display "luis.enr.diaz.garcia@gmail.com"', () => {
            render(<Footer />);
            const element = screen.getByText(/luis.enr.diaz.garcia@gmail.com/i);
            expect(element).toBeInTheDocument();
        });
    });
});
