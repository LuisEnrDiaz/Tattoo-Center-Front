import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../reducerTattoo/actionCreator';
import { TattooRepository } from '../../../infrastructure/services/repository/repositoryTattoos/tattooRepository';
import {
    ProtoTattooI,
    TattooI,
} from '../../../infrastructure/types/typesTattoos/typesTattoos';
import { rootState } from '../../../infrastructure/store/store/store';

export const useTattoo = () => {
    const tattoos = useSelector((state: rootState) => state.tattoos);

    const dispatcher = useDispatch();
    const tattoosCenter = useMemo(() => new TattooRepository(), []);

    useEffect(() => {
        tattoosCenter
            .getAll()
            .then((tattoos) => dispatcher(action.loadActionCreator(tattoos)))
            .catch((error: Error) => console.log(error.name, error.message));
    }, [dispatcher, tattoosCenter]);

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
        handleCreate,
        handleDelete,
        handleUpdate,
    };
};
