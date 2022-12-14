import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import {
    appStore,
    rootState,
    rootStore,
} from '../../../../infrastructure/store/store/store';
import { tattooReducer } from '../../reducerTattoo/reducerTattoo';
import { TattooForm } from './tattooForm';
import { userReducer } from '../../../user/reducerUser/reducerUser';
import { MemoryRouter as Router } from 'react-router-dom';
import { useTattoo } from '../../hooks/usetattoo';
import { app } from '../../../../infrastructure/services/firebase/configFireBase';

jest.mock('../../../../infrastructure/services/firebase/configFireBase');

describe('Given RobotList component', () => {
    const preloadedState: rootState = {
        tattoos: [
            {
                id: '1',
                image: 'mayaImage',
                categories: 'TRIBAL',
                link: 'mayaLink',
                owner: '1',
            },
        ],
        users: {
            isLogged: false,
            isLogging: false,
            token: '',
            user: null,
        },
    };
    const mockStore: rootStore = configureStore({
        reducer: {
            tattoos: tattooReducer,
            users: userReducer,
        },
        preloadedState,
    });

    describe('When we render the component', () => {
        render(
            <Router>
                <Provider store={mockStore}>
                    <TattooForm />
                </Provider>
            </Router>
        );
        test('Then it should display the tattoo Categories name', () => {
            const element = screen.getByText(/CATEGORIES:/i);
            expect(element).toBeInTheDocument();

            const button = screen.getByRole('button');
            fireEvent.click(button);
            expect(fireEvent.click(button)).toBe(true);
        });
    });

    //    describe('when the form is rendered', () => {
    //        test('then it should display a form with 2 inputs and a button', () => {
    //            formElements.forEach((item) => {
    //                const element: HTMLFormElement = screen.getByRole(
    //                    item.role,
    //                    {
    //                        name: item.name,
    //                    }
    //                );
    //                expect(element).toBeInTheDocument();
    //            });
    //        });
    //    });
});

// describe('given addForm component', () => {
//     render(
//         <Provider store={appStore}>
//             <Router>
//                 <TattooForm />
//             </Router>
//         </Provider>
//     );

//     describe('then the user clicks the button', () => {
//         test('the handleAdd from the custom hook should be called', () => {
//             const doc = jest.fn(() => ({ set: jest.fn() }));
//             const collection = jest
//                 .spyOn(app.firestore(), 'collection')
//                 .mockReturnValue({
//                     doc,
//                     collection: jest.fn(),
//                 } as unknown as any);

//             expect(collection).toHaveBeenCalled();
//         });
//     });
// });
