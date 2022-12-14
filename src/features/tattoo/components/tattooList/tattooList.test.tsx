import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { TattooList } from './tattooList';
import { mockStore } from '../../../../infrastructure/mocks/mockStore/mockStore';

describe('Given TattooList', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Provider store={mockStore}>
                    <TattooList />
                </Provider>
            );
        });
        test('Then it should display the title', () => {
            const element = screen.getByText(/OLD SCHOOL/i);
            expect(element).toBeInTheDocument();
        });
    });
});
