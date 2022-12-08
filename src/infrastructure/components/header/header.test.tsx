import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Given Header component', () => {
    describe('When we render the component', () => {
        test('Then it should dsplay "TATTOO CENTER"', () => {
            render(<Header />);
            const element = screen.getByText(/TATTOO CENTER/i);
            expect(element).toBeInTheDocument();
        });
    });
});
