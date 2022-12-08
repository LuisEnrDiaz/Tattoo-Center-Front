import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../reducerTattoo/actionCreator';
import { TattooRepository } from '../../../infrastructure/services/repository/repositoryTattoos/tattooRepository';

import { rootState } from '../../../infrastructure/store/store';
import {
    ProtoTattooI,
    TattooI,
} from '../../../infrastructure/types/typesTattoos/typesTattoos';

export const useTattoo = () => {
    const tattoos = useSelector((state: rootState) => state.tattoos);

    const dispatcher = useDispatch();
    const tattoosCenter = useMemo(() => new TattooRepository(), []);

    const handleLoad = useCallback(() => {
        tattoosCenter
            .getAll()
            .then((tattoo) => dispatcher(action.loadActionCreator(tattoo)))
            .catch((error: Error) => console.log(error.name, error.message));
    }, [tattoosCenter, dispatcher]);

    const handleCreate = (newTattoo: ProtoTattooI) => {
        tattoosCenter
            .create(newTattoo)
            .then((tattoo: TattooI) =>
                dispatcher(action.createActionCreator(tattoo))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleUpdate = (updateTattoo: Partial<TattooI>) => {
        tattoosCenter
            .update(updateTattoo)
            .then((tattoo: TattooI) =>
                dispatcher(action.updateActionCreator(tattoo))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleDelete = (id: string) => {
        tattoosCenter
            .delete(id)
            .then(() => dispatcher(action.deleteActionCreator(id)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        tattoos,
        handleLoad,
        handleCreate,
        handleDelete,
        handleUpdate,
    };
};
