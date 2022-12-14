import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../infrastructure/store/store/store';
import ProfilePage from './profilePage';

describe('Given TattooPage component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Categories"', () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <ProfilePage />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/Profile/i);
            expect(element).toBeInTheDocument();
        });
    });
});
