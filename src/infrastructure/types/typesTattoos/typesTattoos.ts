export type TattooI = {
    id: string;
    image: string;
    categories: Category;
    link: string;
    owner: string;
};

export type Category =
    | ''
    | 'TRADITIONAL'
    | 'Old SCHOOL'
    | 'TRIBAL'
    | 'REALISM'
    | 'JAPANESE'
    | 'BLACK & GREY';

export type ProtoTattooI = {
    image: string;
    categories: Category;
    link: string;
    owner: string;
};
