export type TattooI = {
    id: string;
    image: string;
    categories: Array<Category>;
    link: string;
    owner: string;
};

export type Category =
    | 'TRADITIONAL'
    | 'Old SCHOOL'
    | 'TRIBAL'
    | 'REALISM'
    | 'JAPANESE'
    | 'BLACK & GREY';

export type ProtoTattooI = {
    image: string;
    categories: Array<string>;
    link: string;
    owner: string;
};
