import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { mockTattoo } from '../../../../infrastructure/mocks/mockTattoo/mockTattoo';
import { PortfolioItems } from './portfolioItems';
import { mockStore } from '../../../../infrastructure/mocks/mockStore/mockStore';

describe('Given RobotList component', () => {
    describe('When we render the component', () => {
        render(
            <Provider store={mockStore}>
                <PortfolioItems item={mockTattoo} />
            </Provider>
        );
    });
    test('Then it should display the tattoo Categories name', () => {
        const element = screen.getAllByRole('img');
        expect(element).toBeTruthy();
    });
});
