export type UserI = {
    id: string;
    name: string;
    email: string;
    password: string;
    image: string;
    favorites: Array<string>;
    portfolio: Array<string>;
    description: string;
};

export type ProtoUserI = {
    name: string;
    email: string;
    password: string;
    image: string;
    favorites: Array<string>;
    portfolio: Array<string>;
    description: string;
};
