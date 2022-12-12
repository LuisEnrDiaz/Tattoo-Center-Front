import { ProtoUserI, UserI } from '../../types/typesUsers/typesUsers';
import { mockTattoo } from '../mockTattoo/mockTattoo';

export const mockUser: UserI = {
    id: '1',
    name: 'maya',
    email: 'maya@gmail',
    password: '123',
    image: 'mayaImage',
    favorites: ['2'],
    portfolio: ['2'],
    description: 'hola',
};

export const newUser: ProtoUserI = {
    name: 'pepe',
    email: 'pepe@gmail',
    password: '123',
    image: 'pepeImage',
    favorites: ['2'],
    portfolio: ['2'],
    description: 'hola',
};

export const userFav = {
    id: '1',
    name: 'pepe',
    email: 'pepe@gmail',
    password: '123',
    image: 'pepeImage',
    favorites: [mockTattoo.id],
    portfolio: [mockTattoo.id],
    description: 'hola',
};

export const updateUser: UserI = {
    id: '1',
    name: 'coco',
    email: 'coco@gamil',
    password: '123',
    image: 'cocoImage',
    favorites: ['1'],
    portfolio: ['1'],
    description: 'hola',
};

export const mockToken = 'fcgvbh';
