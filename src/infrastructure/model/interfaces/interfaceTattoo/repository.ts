export interface Repository<TattooI> {
    getAll: () => Promise<Array<TattooI>>;
    get?: (id: string) => Promise<TattooI>;
    create: (item: Partial<TattooI>) => Promise<TattooI>;
    update: (item: Partial<TattooI>) => Promise<TattooI>;
    delete: (id: string) => Promise<void>;
}
