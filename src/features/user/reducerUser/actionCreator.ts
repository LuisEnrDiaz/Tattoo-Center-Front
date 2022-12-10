import { createAction } from '@reduxjs/toolkit';
import { UserI } from '../../../infrastructure/types/typesUsers/typesUsers';
import { actionTypesUser } from './actionTypes';

export const startLoginActionCreator = createAction<void>(
    actionTypesUser.startLogin
);
export const loginActionCreator = createAction<string>(actionTypesUser.login);
export const logoutActionCreator = createAction<void>(actionTypesUser.logout);
export const addFavoritesActionCreator = createAction<UserI>(
    actionTypesUser.addFavorites
);
export const deleteFavoritesActionCreator = createAction<UserI>(
    actionTypesUser.deleteFavorites
);
export const deleteUserActionCreator = createAction<UserI['id']>(
    actionTypesUser.deleteUser
);
