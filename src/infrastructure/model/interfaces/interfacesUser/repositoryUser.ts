export interface RepositoryUser<UserI> {
    login: (user: Partial<UserI>) => Promise<UserI>;
    addTattoosFavorites: (user: UserI) => Promise<UserI>;
    deleteTattoosFavorites: (user: UserI) => Promise<UserI>;
    deleteUser: (id: string) => Promise<void>;
}
