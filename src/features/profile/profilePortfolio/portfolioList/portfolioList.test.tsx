import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { PortfolioList } from './portfolioList';
import { mockStore } from '../../../../infrastructure/mocks/mockStore/mockStore';
import { mockStoreFail } from '../../../../infrastructure/mocks/mockStore/mockStoreFail';

describe('Given TattooList', () => {
    describe('When we render the component fail', () => {
        beforeEach(() => {
            render(
                <Provider store={mockStoreFail}>
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
            const element = screen.getByText(
                /You have not created any tattoos./i
            );
            expect(element).toBeInTheDocument();
        });
    });
});
