import { actionTypesTattoo } from './actionTypes';
import { TattooI } from '../../../infrastructure/types/typesTattoos/typesTattoos';
import { tattooReducer } from './reducerTattoo';
import {
    deleteTattoo,
    mockTattoo,
} from '../../../infrastructure/mocks/mockTattoo/mockTattoo';

describe('Given reducerTattoo', () => {
    describe('When reducerTattoo is called', () => {
        describe('When loadActionCreator is called', () => {
            const state: TattooI[] = [];
            const action = {
                type: actionTypesTattoo.load,
                payload: [mockTattoo],
            };

            test('Then loadActionCreator return', () => {
                const result = tattooReducer(state, action);
                expect(result).toEqual([mockTattoo]);
            });
        });

        describe('When createActionCreator is called', () => {
            const state: TattooI[] = [];
            const action = {
                type: actionTypesTattoo.create,
                payload: mockTattoo,
            };

            test('Then createActionCreator return', () => {
                const result = tattooReducer(state, action);
                expect(result).toEqual([mockTattoo]);
            });
        });

        describe('When updateActionCreator is called', () => {
            const state: TattooI[] = [mockTattoo];
            const action = {
                type: actionTypesTattoo.update,
                payload: mockTattoo,
            };

            test('Then updateActionCreator return', () => {
                const result = tattooReducer(state, action);
                expect(result).toEqual([mockTattoo]);
            });

            test('Then updateActionCreator is different id', () => {
                const state: TattooI[] = [deleteTattoo];
                const action = {
                    type: actionTypesTattoo.update,
                    payload: mockTattoo,
                };
                const result = tattooReducer(state, action);
                expect(result).toEqual([deleteTattoo]);
            });
        });

        describe('When deleteActionCreator is called', () => {
            const state = [deleteTattoo];
            const action = {
                type: actionTypesTattoo.delete,
                payload: deleteTattoo.id,
            };

            test('Then deleteActionCreator return', () => {
                const result = tattooReducer(state, action);
                expect(result).toEqual([]);
            });
        });

        describe('When addDefaultCase is called', () => {
            test('Then addDefaultCase return', () => {
                const state: TattooI[] = [mockTattoo];
                const action = {
                    type: undefined,
                    payload: mockTattoo,
                };
                const result = tattooReducer(state, action);
                expect(result).toEqual(state);
            });
        });
    });
});
