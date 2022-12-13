import { createReducer } from '@reduxjs/toolkit';
import { TattooI } from '../../../infrastructure/types/typesTattoos/typesTattoos';
import * as action from './actionCreator';

const initialState: Array<TattooI> = [];

export const tattooReducer = createReducer(initialState, (builder) => {
    builder.addCase(
        action.loadActionCreator,
        (state, action) => action.payload
    );

    builder.addCase(action.createActionCreator, (state, action) => [
        ...state,
        action.payload,
    ]);

    builder.addCase(action.updateActionCreator, (state, action) =>
        state.map((item) =>
            item.id === action.payload.id ? action.payload : item
        )
    );

    builder.addCase(action.deleteActionCreator, (state, action) =>
        state.filter((item) => item.id !== action.payload.id)
    );

    builder.addDefaultCase((state) => state);
});
