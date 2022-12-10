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
        isLogged: true,
        isLogging: false,
        user: null,
    }));

    builder.addCase(action.loginActionCreator, (state, action) => ({
        ...state,
        isLogged: true,
        token: action.payload,
    }));

    builder.addCase(
        action.logoutActionCreator,
        (state, action) => action.payload
    );

    builder.addCase(action.addFavoritesActionCreator, (state, action) => ({
        ...state,
        isLogged: true,
        user: action.payload,
    }));

    builder.addCase(action.deleteFavoritesActionCreator, (state, action) => ({
        ...state,
        isLogged: true,
        user: action.payload,
    }));

    // builder.addCase(action.deleteUserActionCreator, (state,action) => (
    // ));

    builder.addDefaultCase((state) => state);
});
