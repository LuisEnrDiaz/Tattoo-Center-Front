import {
    mockTattoo,
    newTattoo,
    updateTattoo,
} from '../../../mocks/mockTattoo/mockTattoo';
import { TattooRepository } from './tattooRepository';

describe('Given TattooRepository', () => {
    let service: TattooRepository;

    beforeEach(() => {
        service = new TattooRepository();
    });

    const response = {
        ok: false,
        status: 400,
        statusText: 'error',
    };

    describe('When createError is called', () => {
        test('Then should return error', () => {
            const error = service.createError(
                new Response('Error', {
                    status: 400,
                    statusText: 'error',
                })
            );
            const result = new Error('Error 400 : error');
            result.name = 'HTTPError';
            expect(error).toEqual(result);
        });
    });

    describe('When getAll is called,', () => {
        test('Then should return all tattoos', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue({ tattoos: [] }),
            });
            const result = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });

        test('Then should return error', async () => {
            global.fetch = jest.fn().mockResolvedValue(response);
            await expect(async () => await service.getAll()).rejects.toThrow();
        });
    });

    describe('When get is called', () => {
        test('Then should return tattoo', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockTattoo),
            });
            const result = await service.get(mockTattoo.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockTattoo);
        });

        test('Then should return error', async () => {
            global.fetch = jest.fn().mockResolvedValue(response);
            await expect(async () => await service.get('')).rejects.toThrow();
        });
    });

    describe('When create is called', () => {
        test('Then should return newTattoo', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(newTattoo),
            });
            const result = await service.create(newTattoo);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(newTattoo);
        });

        test('Then should return error', async () => {
            global.fetch = jest.fn().mockResolvedValue(response);
            await expect(
                async () => await service.create(newTattoo)
            ).rejects.toThrow();
        });
    });

    describe('When update is called', () => {
        test('Then should return update tattoo', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(updateTattoo),
            });
            const result = await service.update(updateTattoo);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(updateTattoo);
        });

        test('Then should return error', async () => {
            global.fetch = jest.fn().mockResolvedValue(response);
            await expect(
                async () => await service.update(updateTattoo)
            ).rejects.toThrow();
        });
    });

    describe('When delete is called', () => {
        test('Then should return void', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(''),
            });
            const result = await service.delete(mockTattoo.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual('');
        });

        test('Then should return error', async () => {
            global.fetch = jest.fn().mockResolvedValue(response);
            await expect(
                async () => await service.delete('')
            ).rejects.toThrow();
        });
    });
});
