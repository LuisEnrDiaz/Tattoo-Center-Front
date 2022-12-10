import { mockUser } from '../../../mocks/mockUser/mockUser';
import { UserRepository } from './userRepository';

describe('Given UserRepository', () => {
    let service: UserRepository;

    beforeEach(() => {
        service = new UserRepository();
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

    describe('When get is called', () => {
        test('Then get should return user', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockUser),
            });
            const result = await service.get(mockUser.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockUser);
        });

        test('Then should return error', async () => {
            global.fetch = jest.fn().mockResolvedValue(response);
            await expect(async () => await service.get('')).rejects.toThrow();
        });
    });

    describe('When login is called', () => {
        test('Then login should return', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockUser),
            });
            const result = await service.login(mockUser);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockUser);
        });

        test('Then login should return error', async () => {
            global.fetch = jest.fn().mockResolvedValue(response);
            const error = service.createError(
                new Response('Error', {
                    status: 400,
                    statusText: 'error',
                })
            );
            await service.login(mockUser);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('When register is called', () => {
        test('Then register should return', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockUser),
            });
            const result = await service.register(mockUser);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockUser);
        });

        test('Then register should return error', async () => {
            global.fetch = jest.fn().mockResolvedValue(response);
            const error = service.createError(
                new Response('Error', {
                    status: 400,
                    statusText: 'error',
                })
            );
            await service.register(mockUser);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('When addTattoosFavorites is called', () => {
        test('Then addTattoosFavorites should return', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockUser),
            });
            const result = await service.addTattoosFavorites(mockUser.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockUser);
        });

        test('Then addTattoosFavorites should return error', async () => {
            global.fetch = jest.fn().mockResolvedValue(response);
            const error = service.createError(
                new Response('Error', {
                    status: 400,
                    statusText: 'error',
                })
            );
            await service.addTattoosFavorites(mockUser.id);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('When deleteTattoosFavorites is called', () => {
        test('Then deleteTattoosFavorites should return', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockUser),
            });
            const result = await service.deleteTattoosFavorites(mockUser.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockUser);
        });

        test('Then v should return error', async () => {
            global.fetch = jest.fn().mockResolvedValue(response);
            const error = service.createError(
                new Response('Error', {
                    status: 400,
                    statusText: 'error',
                })
            );
            await service.deleteTattoosFavorites(mockUser.id);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('When deleteUser is called', () => {
        test('Then deleteUser should return', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockUser.id),
            });
            const result = await service.deleteUser(mockUser.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual('1');
        });

        test('Then deleteUser should return error', async () => {
            global.fetch = jest.fn().mockResolvedValue(response);
            const error = service.createError(
                new Response('Error', {
                    status: 400,
                    statusText: 'error',
                })
            );
            await service.deleteUser(mockUser.id);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
});