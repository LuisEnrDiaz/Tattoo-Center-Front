import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { TattooItem } from './tattooItems';
import { mockTattoo } from '../../../../infrastructure/mocks/mockTattoo/mockTattoo';
import { mockStore } from '../../../../infrastructure/mocks/mockStore/mockStore';

describe('Given RobotList component', () => {
    describe('When we render the component', () => {
        render(
            <Provider store={mockStore}>
                <TattooItem item={mockTattoo} />
            </Provider>
        );
    });
    test('Then it should display the tattoo Categories name', () => {
        const element = screen.getAllByRole('img');
        expect(element[1]).toHaveAttribute('src', 'mayaImage');
        expect(element[1]).toHaveAttribute('alt', 'mayaImage');
    });
});
