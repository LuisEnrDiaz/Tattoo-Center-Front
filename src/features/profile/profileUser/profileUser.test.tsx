import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../infrastructure/store/store/store';
import { ProfileUser } from './profileUser';
import { render, screen } from '@testing-library/react';

describe('Given TattooPage component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Categories"', () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <ProfileUser />
                    </Provider>
                </Router>
            );
            const element = screen.getAllByRole('button');
            expect(element[0]).toHaveAccessibleName('Delete');
        });
    });
});
