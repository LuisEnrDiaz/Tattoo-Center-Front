import { createReducer } from '@reduxjs/toolkit';
import { UserI } from '../../../infrastructure/types/typesUsers/typesUsers';
import * as action from './actionCreator';

const initialState: {
    isLogged: boolean;
    isLogging: boolean;
    user: UserI | null;
    token: string;
} = { isLogged: false, isLogging: false, user: null, token: '' };

export const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(action.startLoginActionCreator, (state, action) => ({
        ...state,
        isLogging: true,
        isLogged: false,
        user: null,
        token: '',
    }));

    builder.addCase(action.loginActionCreator, (state, action) => ({
        ...state,
        isLogged: true,
        isLogging: false,
        user: action.payload.user,
        token: action.payload.token,
    }));

    builder.addCase(
        action.logoutActionCreator,
        (state, action) => initialState
    );

    builder.addCase(action.addFavoritesActionCreator, (state, action) => ({
        ...state,
        user: action.payload,
    }));

    builder.addCase(action.deleteFavoritesActionCreator, (state, action) => ({
        ...state,

        user: action.payload,
    }));

    // builder.addCase(action.deleteActionCreator, (state, action) =>
    // );

    builder.addDefaultCase((state) => state);
});
