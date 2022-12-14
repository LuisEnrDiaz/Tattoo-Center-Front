import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../store/store/store';
import { Menu } from './menu';

describe('first', () => {
    describe('2', () => {
        test('should first', () => {
            render(
                <Provider store={appStore}>
                    <Router
                        initialEntries={['/', '/Login', '/Register']}
                        initialIndex={3}
                    >
                        <Menu></Menu>
                    </Router>
                </Provider>
            );

            const element = screen.getAllByRole('link');
        });
    });
});
