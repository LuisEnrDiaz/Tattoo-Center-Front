import { LoginUser } from '../../../types/typesUsers/typesUsers';

export interface RepoUser<UserI> {
    get: (id: string) => Promise<UserI>;
    login: (user: Partial<UserI>) => Promise<LoginUser>;
    register: (user: Partial<UserI>) => Promise<UserI>;
    addTattoosFavorites: (id: string) => Promise<{ user: UserI }>;
    deleteTattoosFavorites: (id: string) => Promise<{ user: UserI }>;
    deleteUser: (id: string) => Promise<void>;
}

export type id = string;
