/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { app } from '../../../../infrastructure/services/firebase/configFireBase';
import { TattooRepository } from '../../../../infrastructure/services/repository/repositoryTattoos/tattooRepository';
import { appStore } from '../../../../infrastructure/store/store/store';
import { useTattoo } from '../../hooks/usetattoo';
import { TattooForm } from './tattooForm';

jest.mock(
    '../../../../infrastructure/services/repository/repositoryTattoos/tattooRepository'
);
jest.mock('../../hooks/usetattoo');

describe('Given NewPlace component', () => {
    beforeEach(() => {
        (useTattoo as jest.Mock).mockReturnValue({
            handleCreate: jest.fn(),
        });
    });
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

        test('Then it should click to button', () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <TattooForm></TattooForm>
                    </Provider>
                </Router>
            );
            const button = screen.getByRole('button');
            fireEvent.click(button);
            expect(fireEvent.click(button)).toBe(true);
        });

        describe('then the user clicks the button', () => {
            test('the handleAdd from the custom hook should be called', async () => {
                TattooRepository.prototype.create = jest.fn();

                const doc = jest.fn(() => ({ set: jest.fn() }));
                const collection = jest
                    .spyOn(app.firestore(), 'collection')
                    .mockReturnValue({
                        doc,
                        collection: jest.fn(),
                    } as unknown as any);

                render(
                    <>
                        <Provider store={appStore}>
                            <Router>
                                <TattooForm></TattooForm>
                            </Router>
                        </Provider>
                    </>
                );

                const button = screen.getByRole('button', { name: 'Send' });
                await userEvent.click(button);
                expect(TattooRepository.prototype.create).toHaveBeenCalled();
                expect(useTattoo().handleCreate).toHaveBeenCalled();
                expect(collection).toHaveBeenCalled();
            });
        });
    });
});
