import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import {
    mockTattoo,
    updateTattoo,
} from '../../../infrastructure/mocks/mockTattoo/mockTattoo';
import { TattooRepository } from '../../../infrastructure/services/repository/repositoryTattoos/tattooRepository';
import { appStore } from '../../../infrastructure/store/store/store';
import { TattooI } from '../../../infrastructure/types/typesTattoos/typesTattoos';
import { useTattoo } from './usetattoo';

jest.mock(
    '../../../infrastructure/services/repository/repositoryTattoos/tattooRepository'
);

describe('Given TattooRepository', () => {
    let result: {
        current: {
            tattoos: Array<TattooI>;
            handleCreate: (newTattoo: TattooI) => void;
            handleUpdate: (updateTattoo: Partial<TattooI>) => void;
            handleDelete: (id: string) => void;
        };
    };

    beforeEach(() => {
        TattooRepository.prototype.getAll = jest
            .fn()
            .mockResolvedValue([mockTattoo]);
        TattooRepository.prototype.create = jest
            .fn()
            .mockResolvedValue(mockTattoo);
        TattooRepository.prototype.update = jest
            .fn()
            .mockResolvedValue(updateTattoo);
        TattooRepository.prototype.delete = jest
            .fn()
            .mockResolvedValue(mockTattoo);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );

        ({ result } = renderHook(() => useTattoo(), { wrapper }));
    });

    test('Then should return mockTattoo', async () => {
        await waitFor(() => {
            expect(result.current.tattoos).toEqual([mockTattoo]);
        });
    });

    describe('Given handleCreate is called', () => {
        test('Then handleCreate return', async () => {
            await waitFor(() => {
                result.current.handleCreate(mockTattoo);
                expect(result.current.tattoos.at(-1)).toEqual(mockTattoo);
            });
            await waitFor(() => {
                expect(TattooRepository.prototype.create).toHaveBeenCalled();
            });
        });

        test('should first', () => {
            const error = () => {
                throw new Error('error');
            };
            expect(error).toThrowError();
        });
    });

    describe('Given handleUpdate is called', () => {
        test('Then handleUpdate return', async () => {
            await waitFor(() => {
                result.current.handleUpdate(updateTattoo);
                expect(result.current.tattoos.at(-1)).toEqual(updateTattoo);
            });
            await waitFor(() => {
                expect(TattooRepository.prototype.update).toHaveBeenCalled();
            });
        });
    });

    describe('Given handleDelete is Called', () => {
        test('Then handleDelete return', async () => {
            await waitFor(() => {
                result.current.handleDelete(mockTattoo.id);
                expect(result.current.tattoos.at(-1)).toEqual(undefined);
            });
            await waitFor(() => {
                expect(TattooRepository.prototype.delete).toHaveBeenCalled();
            });
        });
    });
});
