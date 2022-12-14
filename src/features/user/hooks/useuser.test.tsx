import { configureStore } from '@reduxjs/toolkit';
import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { mockTattoo } from '../../../infrastructure/mocks/mockTattoo/mockTattoo';
import { mockUser } from '../../../infrastructure/mocks/mockUser/mockUser';
import { UserRepository } from '../../../infrastructure/services/repository/repositoryUser/userRepository';
import { rootState } from '../../../infrastructure/store/store/store';
import { UserI } from '../../../infrastructure/types/typesUsers/typesUsers';
import { userReducer } from '../reducerUser/reducerUser';
import { useUser } from './useuser';

jest.mock(
    '../../../infrastructure/services/repository/repositoryUser/userRepository'
);

describe('Given UserRepository', () => {
    let result: {
        current: {
            users: {
                isLogged: boolean;
                isLogging: boolean;
                user: UserI | null;
                token: string;
            };
            handleLogin: (user: Partial<UserI>) => void;
            handleAddFavorites: (id: string) => void;
            handleDeleteFavorites: (id: string) => void;
        };
    };

    const preloadState: Partial<rootState> = {
        users: {
            isLogged: true,
            isLogging: false,
            user: mockUser,
            token: '',
        },
    };

    const mockAppStore = configureStore({
        reducer: {
            users: userReducer,
        },
        preloadedState: preloadState,
    });

    beforeEach(() => {
        UserRepository.prototype.login = jest.fn().mockResolvedValue(mockUser);
        UserRepository.prototype.addTattoosFavorites = jest
            .fn()
            .mockResolvedValue(mockTattoo.id);
        UserRepository.prototype.deleteTattoosFavorites = jest
            .fn()
            .mockResolvedValue(mockTattoo.id);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={mockAppStore}>{children}</Provider>
        );

        ({ result } = renderHook(() => useUser(), { wrapper }));
    });

    describe('When handleLogin is called', () => {
        test('Then should return', async () => {
            await result.current.handleLogin(mockUser);
            expect(UserRepository.prototype.login).toHaveBeenCalled();
        });
    });

    describe('When handleAddFavorites is called', () => {
        test('Then should return', async () => {
            await result.current.handleAddFavorites(mockTattoo.id);
            expect(
                UserRepository.prototype.addTattoosFavorites
            ).toHaveBeenCalled();
        });
    });

    describe('When handleDeleteFavorites is called', () => {
        test('Then should return', async () => {
            await result.current.handleDeleteFavorites(mockTattoo.id);
            expect(
                UserRepository.prototype.deleteTattoosFavorites
            ).toHaveBeenCalled();
        });
    });
});
