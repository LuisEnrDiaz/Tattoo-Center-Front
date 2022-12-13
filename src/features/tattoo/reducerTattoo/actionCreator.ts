import { createAction } from '@reduxjs/toolkit';
import { TattooI } from '../../../infrastructure/types/typesTattoos/typesTattoos';
import { UserI } from '../../../infrastructure/types/typesUsers/typesUsers';
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

export const deleteActionCreator = createAction<UserI>(
    actionTypesTattoo.delete
);
