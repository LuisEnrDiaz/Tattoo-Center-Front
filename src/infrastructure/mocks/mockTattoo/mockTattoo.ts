import { ProtoTattooI, TattooI } from '../../types/typesTattoos/typesTattoos';

export const mockTattoo: TattooI = {
    id: '1',
    image: 'mayaImage',
    categories: 'TRIBAL',
    link: 'mayaLink',
    owner: '1',
};

export const mockTattoo2: TattooI = {
    id: '2',
    image: 'mayaImage',
    categories: 'TRIBAL',
    link: 'mayaLink',
    owner: '1',
};

export const deleteTattoo: TattooI = {
    id: '2',
    image: 'pepeImage',
    categories: 'TRIBAL',
    link: '',
    owner: '',
};

export const newTattoo: ProtoTattooI = {
    image: 'mayaImage',
    categories: 'JAPANESE',
    link: 'mayaLink',
    owner: '',
};

export const updateTattoo: TattooI = {
    id: '1',
    image: 'mayaImage',
    categories: 'REALISM',
    link: 'mayaLink',
    owner: '',
};
