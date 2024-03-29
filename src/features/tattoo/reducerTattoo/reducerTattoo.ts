import { createReducer } from '@reduxjs/toolkit';
import { TattooI } from '../../../infrastructure/types/typesTattoos/typesTattoos';
import * as action from './actionCreator';

const initialState: Array<TattooI> = [];

export const tattooReducer = createReducer(initialState, (builder) => {
    builder.addCase(
        action.loadActionCreator,
        (state, action) => action.payload
    );

    builder.addCase(action.getActionCreator, (state, action) => [
        ...state,
        action.payload,
    ]);

    builder.addCase(action.createActionCreator, (state, action) => [
        ...state,
        action.payload,
    ]);

    builder.addCase(action.updateActionCreator, (state, action) =>
        state.map((item) =>
            item.id === action.payload.id ? action.payload : item
        )
    );

    builder.addDefaultCase((state) => state);
});
