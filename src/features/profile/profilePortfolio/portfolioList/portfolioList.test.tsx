import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { PortfolioList } from './portfolioList';
import { mockStore } from '../../../../infrastructure/mocks/mockStore/mockStore';

describe('Given TattooList', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Provider store={mockStore}>
                    <PortfolioList />
                </Provider>
            );
        });
        test('Then it should display the title', () => {
            const element = screen.getByText(/Portfolio/i);
            expect(element).toBeInTheDocument();
        });
    });

    describe('When we render the component not login', () => {
        beforeEach(() => {
            render(
                <Provider store={mockStore}>
                    <PortfolioList />
                </Provider>
            );
        });
        test('Then it should display the title', () => {
            const element = screen.getByText(/loading/i);
            expect(element).toBeInTheDocument();
        });
    });
});
