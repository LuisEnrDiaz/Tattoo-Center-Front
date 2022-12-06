export type TattooI = {
    id: string;
    image: string;
    categories: Array<Category>;
    link: string;
};

export type Category = string;

export type ProtoTattooI = {
    image: string;
    categories: Array<Category>;
    link: string;
};
