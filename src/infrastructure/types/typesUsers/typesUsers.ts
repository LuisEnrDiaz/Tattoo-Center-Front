import { TattooI } from '../typesTattoos/typesTattoos';

export type UserI = {
    id: string;
    name: string;
    email: string;
    password: string;
    image: string;
    favorites: Array<TattooI>;
    portfolio: Array<TattooI>;
    description: string;
};

export type ProtoUserI = {
    name: string;
    email: string;
    password: string;
    image: string;
    favorites: Array<TattooI>;
    portfolio: Array<TattooI>;
    description: string;
};

export type LoginUser = { user: UserI; token: string };
