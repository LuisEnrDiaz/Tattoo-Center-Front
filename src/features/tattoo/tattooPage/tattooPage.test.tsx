import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { appStore } from '../../../infrastructure/store/store/store';
import TattooPage from './tattooPage';

describe('Given TattooPage component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Categories"', () => {
            render(
                <Provider store={appStore}>
                    <TattooPage />
                </Provider>
            );
            const element = screen.getByText(/ojala funcione tattoo/i);
            expect(element).toBeInTheDocument();
        });
    });
});
