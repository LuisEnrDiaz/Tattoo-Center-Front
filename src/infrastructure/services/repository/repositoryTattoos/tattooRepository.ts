import { TattooI } from '../../../types/typesTattoos/typesTattoos';
import { Repository } from '../../../model/interfaces/interfaceTattoo/repository';
import { UserI } from '../../../types/typesUsers/typesUsers';

export class TattooRepository implements Repository<TattooI> {
    url: string;

    constructor() {
        this.url =
            'https://tattoo-center-back-production.up.railway.app/tattoos';
    }

    createError(response: Response) {
        const message = `Error ${response.status} : ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    getAll(): Promise<Array<TattooI>> {
        return fetch(this.url)
            .then((response) => {
                if (!response.ok) {
                    throw this.createError(response);
                }
                return response.json();
            })
            .then((data) => {
                return data.tattoos;
            });
    }

    get(id: string): Promise<TattooI> {
        return fetch(`${this.url}/${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => {
            if (!response.ok) {
                throw this.createError(response);
            }
            return response.json();
        });
    }

    create(item: Partial<TattooI>): Promise<TattooI> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => {
            if (!response.ok) {
                throw this.createError(response);
            }
            return response.json();
        });
    }

    update(partialTattoo: Partial<TattooI>): Promise<TattooI> {
        return fetch(this.url, {
            method: 'PATCH',
            body: JSON.stringify(partialTattoo),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => {
            if (!response.ok) {
                throw this.createError(response);
            }
            return response.json();
        });
    }

    delete(id: string): Promise<UserI> {
        return fetch(this.url, {
            method: 'DELETE',
            body: JSON.stringify(id),
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => {
            if (!response.ok) {
                throw this.createError(response);
            }
            return response.json();
        });
    }
}
