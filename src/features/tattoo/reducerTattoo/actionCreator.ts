import { createAction } from '@reduxjs/toolkit';
import { TattooI } from '../../../infrastructure/types/typesTattoos/typesTattoos';
import { actionTypesTattoo } from './actionTypes';

export const loadActionCreator = createAction<Array<TattooI>>(
    actionTypesTattoo.load
);

export const createActionCreator = createAction<TattooI>(
    actionTypesTattoo.create
);

export const updateActionCreator = createAction<TattooI>(
    actionTypesTattoo.update
);

export const deleteActionCreator = createAction<TattooI['id']>(
    actionTypesTattoo.delete
);
