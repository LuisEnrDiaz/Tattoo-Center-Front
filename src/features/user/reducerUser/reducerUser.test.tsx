import { mockTattoo } from '../../../infrastructure/mocks/mockTattoo/mockTattoo';
import {
    mockToken,
    mockUser,
    userFav,
} from '../../../infrastructure/mocks/mockUser/mockUser';
import { UserI } from '../../../infrastructure/types/typesUsers/typesUsers';
import { actionTypesUser } from './actionTypes';
import { userReducer } from './reducerUser';

describe('Given reducerUser', () => {
    let action: {
        type: string;
        payload: unknown;
    };

    let state: {
        isLogged: boolean;
        isLogging: boolean;
        user: UserI | null;
        token: string;
    };
    describe('When reducerUser is called', () => {
        test('Then loginActionCreator return', () => {
            action = {
                type: actionTypesUser.login,
                payload: {
                    isLogging: false,
                    isLogged: true,
                    token: mockToken,
                    user: mockUser,
                },
            };

            state = {
                ...state,
            };
            const result = userReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('Then addFavoritesActionCreator is called', () => {
        test('Then return', () => {
            action = {
                type: actionTypesUser.addFavorites,
                payload: mockUser,
            };

            state = {
                ...state,
                user: userFav,
            };
            const result = userReducer(state, action);
            expect(result.user).toEqual(mockUser);
        });
    });

    describe('Then deleteFavoritesActionCreator is called', () => {
        test('Then return', () => {
            action = {
                type: actionTypesUser.deleteFavorites,
                payload: mockUser,
            };

            state = {
                ...state,
                user: userFav,
            };

            const result = userReducer(state, action);
            expect(result.user).toEqual(mockUser);
        });
    });

    describe('When addDefaultCase is called', () => {
        test('Then addDefaultCase return', () => {
            const action = {
                type: undefined,
                payload: mockTattoo,
            };
            const result = userReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('Then logoutActionCreator', () => {
        const action = {
            type: actionTypesUser.logout,
            payload: {
                isLogging: false,
                isLogged: false,
                token: '',
                user: null,
            },
        };
        const state = {
            isLogging: false,
            isLogged: true,
            token: mockToken,
            user: mockUser,
        };
        const result = userReducer(state, action);
        expect(result).toEqual(action.payload);
    });

    describe('When the action is STARTLOGGING', () => {
        test('Then the returned state should include isLogging on true in the action payload', () => {
            action = {
                type: actionTypesUser.startLogin,
                payload: {
                    isLogging: true,
                    isLogged: false,
                    user: null,
                    token: '',
                },
            };

            const result = userReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });
});
