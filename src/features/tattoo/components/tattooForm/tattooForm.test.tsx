import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { app } from '../../../../infrastructure/services/firebase/configFireBase';
import { appStore } from '../../../../infrastructure/store/store/store';
import { TattooForm } from './tattooForm';

describe('Given NewPlace component', () => {
    describe('When we render the component', () => {
        test('Then it should display the newPlace form', () => {
            render(
                <>
                    <Provider store={appStore}>
                        <Router>
                            <TattooForm></TattooForm>
                        </Router>
                    </Provider>
                </>
            );
            const element = screen.getByText(/Send/i);
            expect(element).toBeInTheDocument();
        });

        // describe('then the user clicks the button', () => {
        //     test('the handleAdd from the custom hook should be called', () => {
        //         const doc = jest.fn(() => ({ set: jest.fn() }));
        //         const collection = jest
        //             .spyOn(app.firestore(), 'collection')
        //             .mockReturnValue({
        //                 doc,
        //                 collection: jest.fn(),
        //             } as unknown as any);

        //         const button = screen.getByRole('button', { name: 'Send' });
        //         userEvent.click(button);
        //         expect(collection).toHaveBeenCalled();
        //     });
        // });
    });
});
