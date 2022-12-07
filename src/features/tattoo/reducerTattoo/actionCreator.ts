import { createAction } from '@reduxjs/toolkit';
import { TattooI } from '../../../infrastructure/types/typesTattoos/typesTattoos';

import { actionTypes } from './actionTypes';

export const loadActionCreator = createAction<Array<TattooI>>(actionTypes.load);
export const createActionCreator = createAction<TattooI>(actionTypes.create);
export const updateActionCreator = createAction<TattooI>(actionTypes.update);
export const deleteActionCreator = createAction<TattooI['id']>(
    actionTypes.delete
);
