export interface RepoUser<UserI> {
    get: (id: string) => Promise<UserI>;
    login: (user: Partial<UserI>) => Promise<string>;
    register: (user: Partial<UserI>) => Promise<UserI>;
    addTattoosFavorites: (id: string) => Promise<UserI>;
    deleteTattoosFavorites: (id: string) => Promise<UserI>;
    deleteUser: (id: string) => Promise<void>;
}

export type id = string;
