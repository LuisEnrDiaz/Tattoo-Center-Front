import { ProtoUserI, UserI } from '../../types/typesUsers/typesUsers';
import { mockTattoo } from '../mockTattoo/mockTattoo';

export const mockUser: UserI = {
    id: '1',
    name: 'maya',
    email: 'maya@gmail',
    password: 'pass',
    image: 'mayaImage',
    favorites: [mockTattoo],
    portfolio: [mockTattoo],
    description: 'hola',
};

export const newUser: ProtoUserI = {
    name: 'pepe',
    email: 'pepe@gmail',
    password: 'pass',
    image: 'pepeImage',
    favorites: [mockTattoo],
    portfolio: [mockTattoo],
    description: 'hola',
};

export const userFav = {
    id: '1',
    name: 'pepe',
    email: 'pepe@gmail',
    password: 'pass',
    image: 'pepeImage',
    favorites: [mockTattoo],
    portfolio: [mockTattoo],
    description: 'hola',
};

export const updateUser: UserI = {
    id: '1',
    name: 'coco',
    email: 'coco@gamil',
    password: 'pass',
    image: 'cocoImage',
    favorites: [mockTattoo],
    portfolio: [mockTattoo],
    description: 'hola',
};

export const mockToken = 'fcgvbh';
